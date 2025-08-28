'use client'

import React, { useState, useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

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
}

const Quiz = () => {
  const [topic, setTopic] = useState<string>('');
  const [difficulty, setDifficulty] = useState<string>('');
  const [numQuestions, setNumQuestions] = useState<number>(5);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [form , setForm] = useState<boolean>(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({})
  const [evaluated, setEvaluated] = useState<boolean>(false);
  const [result, setResult] = useState<QuizResult | null>(null)
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [username, setUsername] = useState<string>('');
  const [mode, setMode] = useState<boolean>(false)
  const [timer, setTimer] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter();  

  useEffect(() => {
    if (typeof window === "undefined") return;
    const token = localStorage.getItem('accessToken');
    if (!token) {
      window.location.href = '/login';
      alert('NOPE! LOGIN FIRST');
      return;
    }
    const fetchData = async () => {
      try {
        const backendGet =  process.env.NEXT_PUBLIC_QUIZ_GET_STUDENTS;
        const response = await axios.get(`${backendGet}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data: User = response.data;
        setUsername(data.username);
      } catch (error) {
        console.error('Error fetching dashboard data', error);
      }
    };

    fetchData();
  }, []);


const handleSubmit = async (event: React.FormEvent) => {
  event.preventDefault();
  const backendQuiz =  process.env.NEXT_PUBLIC_BACKEND_QUIZ;
  const response = await axios.post(`${backendQuiz}`, { topic, difficulty, numQuestions });
  setLoading(true)
  if (response.status === 201) {
    const data = response.data;
    const cleanData= data.replace(/```json|```/g, '').trim();
    setQuestions(JSON.parse(cleanData))
    setForm(false)
    setQuizStarted(true);
    setLoading(false)
  }
  let duration = 0;
  if (numQuestions == 5) duration = 300;
  else if (numQuestions == 10) duration = 600;
  else if (numQuestions == 15) duration = 900;
  else if (numQuestions == 20) duration = 1200;
  else if (numQuestions == 25) duration = 1500;
  else if (numQuestions == 30) duration = 1800;

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




  const handleFinish = async (event?: React.FormEvent) => {
    event?.preventDefault();
    const backendEval = process.env.NEXT_PUBLIC_BACKEND_EVALUATE;
    const response = await axios.post(`${backendEval}`, { quiz: questions, answers });
    if (response.status === 201) {
      const data2 = response.data;
      const cleandata2 = data2.replace(/```json|```/g, '').trim();
      setResult(JSON.parse(cleandata2));
      setQuizStarted(false);
      setEvaluated(true);
      }
    }
 
 useEffect(() => {
  if (timer === 0 && mode && quizStarted) {
    alert("Time up !");
    if (!answers){
      setForm(true);
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
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-600 to-black text-white flex flex-col items-center justify-center p-4">
      <h2 className="text-white font-extrabold text-4xl mb-6">Hello, {username || 'Guest'}</h2>
      { form && (
        <form onSubmit={handleSubmit} className="flex text-black flex-col gap-4 border p-8 rounded-lg bg-black/50 backdrop-blur-md shadow-lg w-full max-w-md">
          <h2 className="text-white font-semibold text-2xl text-center">Welcome to the Quiz Section</h2>
          <input className="p-2 rounded bg-gray-800 text-white" type="text" placeholder="Choose the topic" value={topic} onChange={(e) => setTopic(e.target.value)} />
          <label className="text-white">Difficulty</label>
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}className="p-2 rounded bg-gray-800 text-white">
            <option value="easy">Beginner</option>
            <option value="medium">Moderate</option>
            <option value="hard">Advanced</option>
          </select>
          <label className="text-white">Number Of Questions</label>
           <select value={numQuestions} onChange={(e) => setNumQuestions(Number(e.target.value))}className="p-2 rounded bg-gray-800 text-white">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
          </select>
           <button type="button" onClick={() => setMode(!mode)} className={`mt-2 px-4 py-2 rounded-lg shadow transition ${mode ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'} text-white font-bold`}>
            {mode ? 'Exam Mode Enabled' : 'Enable Exam Mode'}
          </button>
          <button type="submit" className="mt-4 px-4 py-2 bg-purple-700 rounded-lg shadow hover:bg-purple-800 transition">{loading? 'Getting Questions': 'Bring it on'}</button>
          <button type="button" className="mt-2 px-4 py-2 border text-white rounded-lg hover:bg-white hover:text-black transition"onClick={() => router.push('/')}>Home</button>
        </form> 
      )
      }



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
                disabled={!answers[currentIndex]}
                className="px-4 py-2 bg-green-600 rounded-lg shadow hover:bg-green-700 transition disabled:bg-gray-500"
              >
                Finish
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
    className="px-4 py-2 bg-purple-700 rounded-lg shadow hover:bg-purple-800 transition"
    onClick={() => {
      setForm(true);
      setEvaluated(false);
      setResult(null);
      setQuestions([]);
      setAnswers({});
      setCurrentIndex(0);
    }}
  >
    Try Again
  </button>

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
