'use client'

import {useState, useEffect} from "react";
import axios from 'axios';
import {useRouter} from "next/navigation"

type Question = {
  question: string
  options: string[]
  correct_answer: string
}

type QuizResult = {
  score: number
  total: number
  correct: number[]  
  wrong: number[]    
  feedback: string[] 
}

type User = {
  username: string;
  class: number
}

type LeaderboardEntry = {
  id: string;
  score: number;
  student: {
    username: string;
  };
};

type LeaderboardData = LeaderboardEntry[];

type SyllabusEntry = {
  class: number;
  topics: string[];
};


const Quiz = () => {
  const [topic, setTopic] = useState<string>('');
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [form , setForm] = useState<boolean>(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({})
  const [evaluated, setEvaluated] = useState<boolean>(false);
  const [result, setResult] = useState<QuizResult | null>(null)
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [username, setUsername] = useState<string>('');
  const [classLevel , setClassLevel] = useState<number>(0)
  const [mode, setMode] = useState<boolean>(false)
  const [timer, setTimer] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [showLeaderBoard, setShowLeaderBoard]= useState<boolean>(true)
  const [leaderBoardData, setLeaderBoardData] = useState<LeaderboardData>([])
  const [syllabus, setSyllabus] = useState<SyllabusEntry[]>([]) 
  const [letEvaluate , setLetEvaluate]= useState<boolean>(false)
  const [guidelines, setGuidelines] = useState<boolean>(true)
  const [quotaAvailability, setQuotaAvailability] = useState<boolean>(false)
  const [count, setCount]= useState<number>(0)
  const router = useRouter();  

 useEffect(() => {
    if (typeof window === "undefined") return;
    const token = localStorage.getItem('accessToken');
    if (!token) {
      alert('NOPE! LOGIN FIRST');
      window.location.href = '/login';
      return;
    }
    const fetchData = async () => {
      try {
        const backendGet =  process.env.NEXT_PUBLIC_QUIZ_STUDENTS_GET;
        const response = await axios.get(`${backendGet}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data: User = response.data;
        setUsername(data.username);
        setClassLevel(data.class)

      } catch (error) {
        console.error('Error fetching dashboard data', error);
      }
    };

    fetchData();
  }, []);
    
   useEffect(() => {
    const loadSyllabus = async () => {
      try {
        const res = await fetch("/syllabus.json");
        const data: SyllabusEntry[] = await res.json();
        setSyllabus(data);

        const topics = data.find((s) => s.class === classLevel)?.topics || [];
        if (topics.length > 0) {
        }
      } catch (error) {
        console.error("Error loading syllabus", error);
      }
    };
    loadSyllabus();
  }, [classLevel]);

   const classTopics =
    syllabus.find((s) => s.class === classLevel)?.topics || [];

   


 useEffect(() => {
    const fetchLeaderBoard = async () => {
      try{
        const leaderBoardUrl = process.env.NEXT_PUBLIC_LEADERBOARD_URL;
        const response = await axios.get(`${leaderBoardUrl}`)
        const data = response.data
        setLeaderBoardData(data)
      }catch (error) {
        console.error('Error fetching dashboard data', error);
      }
    }
    fetchLeaderBoard()  
 },[])

const handleSubmit = async (event: React.FormEvent) => {
  event.preventDefault();
  const backendQuiz =  process.env.NEXT_PUBLIC_QUIZ_GENERATE;
  const token = localStorage.getItem("accessToken"); 
setLoading(true)
const response = await axios.post(
  `${backendQuiz}`,
  { topic},
  {
    headers: {
      "Authorization": `Bearer ${token}`, 
    },
  }
);
  if (response.status === 201) {
    const data = response.data;
    const cleanData= data.replace(/```json|```/g, '').trim();
    setQuestions(JSON.parse(cleanData))
    setForm(false)
    setShowLeaderBoard(false)
    setGuidelines(false)
    setQuizStarted(true);
    setLoading(false)
  }
  const duration = 36000;
 ;

  setTimer(duration)
};



  useEffect(() => {
  if (mode && quizStarted && timer > 0) {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }
}, [mode, quizStarted]);

 useEffect(() => {
    const checkMidnight = () => {
      const now = new Date();
      if (now.getHours() === 0 && now.getMinutes() === 0) {
        setCount(0);
        setQuotaAvailability(false)
      }
    };

    const timer = setInterval(checkMidnight, 60 * 1000);

    return () => clearInterval(timer);
  }, []);


const handleFinish = async (event?: React.FormEvent) => {
  event?.preventDefault();
  const backendEval = process.env.NEXT_PUBLIC_QUIZ_EVALUATE;
  const token = localStorage.getItem("accessToken");

  if (!token) {
    console.error("No access token found. Please log in.");
    return;
  }

  try {
    
    setLetEvaluate(true);

    const response = await axios.post(
      backendEval as string,
      { quiz: questions, answers },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setResult(response.data);
    setQuizStarted(false);
    setEvaluated(true);

    if (response.status === 201) {
      setLetEvaluate(false);
      setCount(prev => prev + 1 ) 
    }

  } catch (error) {
    console.error("An error occurred during quiz evaluation:", error);
    setLetEvaluate(false);
  }
};

  useEffect(() => {
  if (count >= 2) {
    setQuotaAvailability(true);
  }
}, [count]);


 
 useEffect(() => {
  if (timer === 0 && mode && quizStarted) {
    alert("Time up !");
    if (!answers){
      setForm(true);
      setShowLeaderBoard(true)
      setGuidelines(true)
      setEvaluated(false);
      setResult(null);
      setQuestions([]);
      setAnswers({});
      setCurrentIndex(0);
  
    } 
    else {
      handleFinish()
    }
  }
}, [timer, mode, quizStarted]);




  return (
    < >
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-600 to-black text-white flex flex-col items-center justify-center p-4 font-inter">
      <h2 className="text-white font-extrabold text-4xl mb-6">Hello, {username || 'Guest'}</h2>
      {form && showLeaderBoard && guidelines &&(
        <div className="flex flex-col lg:flex-row gap-20 w-full max-w-6xl justify-center items-start">
          <form onSubmit={handleSubmit} className="flex text-black flex-col gap-4 border p-8 rounded-2xl bg-black/50 backdrop-blur-md shadow-lg w-full max-w-md">
            <h2 className="text-white font-semibold text-2xl text-center">Welcome to the Quiz Section</h2>
            <label className="text-white">Choose Topic</label>
            <select  value={topic} onChange={(e) => setTopic(e.target.value)}className="p-2 rounded bg-gray-800 text-white">
            <option value="">-- Select a Topic --</option>
            {classTopics.map((t, idx) => (
            <option key={idx} value={t}>
                {t}
            </option>
            ))}
            </select>
            <button type="button" onClick={() => setMode(!mode)} className={`mt-2 px-4 py-2 rounded-lg shadow transition ${mode ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'} text-white font-bold`}>
              {mode ? 'Exam Mode Enabled' : 'Enable Exam Mode'}
            </button>
            <button type="submit" disabled={quotaAvailability} className="mt-4 px-4 py-2 bg-purple-700 rounded-lg shadow hover:bg-purple-800 transition">{loading ? 'Getting Questions' :'Bring it on'}</button>
            <button type="button" className="mt-2 px-4 py-2 border text-white rounded-lg hover:bg-white hover:text-black transition" onClick={() => router.push('/')}>Home</button>
          </form>
          
          <div className="lex text-black flex-col gap-4 border p-8 rounded-2xl bg-black/50 backdrop-blur-md shadow-lg w-full max-w-md">
            <h2 className="text-white font-semibold text-2xl text-center">LeaderBoard</h2>
            {leaderBoardData.length > 0 ? (
              <ul className="space-y-4">
                {leaderBoardData.map((entry, index) => (
                  <li
                    key={entry.id}
                    className="flex justify-between items-center bg-slate-700 rounded-xl p-4 transition-transform transform hover:scale-105 hover:bg-slate-600 shadow-md"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-lg font-bold w-8 text-center text-indigo-300">
                        {index + 1}
                      </span>
                      <span className="text-xl font-medium">
                        {entry.student.username}
                      </span>
                    </div>
                    <span className="text-xl font-bold text-indigo-400">
                      {entry.score}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center text-slate-400 font-semibold text-xl">
               No one is at the top now, Can you be?
              </div>
            )}
          </div>
        </div>
      )}

   {quizStarted && questions.length > 0 && (
  <div className="mt-8 p-4 border rounded-lg bg-black backdrop-blur-md shadow-lg text-white max-w-2xl mx-auto">
    
    {mode ? (
      <div className="mb-4 text-red-400 font-bold text-xl">
        ⏱ Time Left: {timer} seconds
      </div>
    ) : (
      <div className="mb-4 text-green-400 font-bold text-xl">
        Quiz Started
      </div>
    )}

    {(() => {
      const currentQuestion = questions[currentIndex];
      return (
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Q{currentIndex + 1}: {currentQuestion.question}
          </h3>
          <ul className="list-none">
            {currentQuestion.options.map((option, idx) => (
              <li key={idx} className="mb-2">
                <button
                  type="button"
                  onClick={() =>
                    setAnswers({ ...answers, [currentIndex]: option })
                  }
                  className={`px-4 py-2 rounded-lg w-full text-left ${
                    answers[currentIndex] === option
                      ? "bg-purple-700"
                      : "bg-gray-700"
                  } hover:bg-purple-600 transition`}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between">
            {currentIndex < questions.length - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentIndex(currentIndex + 1)}
                disabled={!answers[currentIndex]}
                className="px-4 py-2 bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition disabled:bg-gray-500"
              >
                Next
              </button>
            ) : (
             <button
              type="button"
              onClick={handleFinish}
              disabled={!answers[currentIndex] || letEvaluate}
              className="px-4 py-2 bg-green-600 rounded-lg shadow hover:bg-green-700 transition disabled:bg-gray-500 flex items-center justify-center"
                >
              {letEvaluate ? (
                  "Evaluating..."
              ) : (
                "Finish")}
             </button>

            )}
          </div>
        </div>
      );
    })()}
  </div>
)}



      {evaluated && result && (
  <div className="mt-8 p-6 border rounded-lg bg-black text-white max-w-2xl mx-auto">
    <h2 className="text-xl font-bold mb-4">Your Results</h2>
    <p className="mb-2">Score: {result.score} / {result.total}</p>
    
    <h3 className="font-semibold">Correct Answers:</h3>
    <ul className="list-disc list-inside mb-4 text-green-400">
      {result.correct.map((qIdx) => (
        <li key={qIdx}>Q{qIdx + 1}</li>
      ))}
    </ul>

    <h3 className="font-semibold">Wrong Answers:</h3>
    <ul className="list-disc list-inside mb-4 text-red-400">
      {result.wrong.map((qIdx) => (
        <li key={qIdx}>Q{qIdx + 1}</li>
      ))}
    </ul>

    {result.feedback.length > 0 && (
      <div>
        <h3 className="font-semibold">Feedback:</h3>
        <ul className="list-disc list-inside text-yellow-400">
          {result.feedback.map((fb, idx) => (
            <li key={idx}>{fb}</li>
          ))}
        </ul>
      </div>
    )}
     <div className="mt-4 flex gap-4">

  <button 
    className="px-4 py-2 border text-white rounded-lg hover:bg-white hover:text-black transition"
    onClick={() => router.push('/')}
  >
    Home
  </button>
</div>

  </div>
)}
    </div>
    </>
  )
}

export default Quiz
