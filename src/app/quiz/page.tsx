'use client'

import React, { useState } from "react"
import axios from "axios"

type Question = {
  question: string
  options: string[]
  correct_answer: string
}

type QuizResult = {
  score: number
  feedback: string
  correctAnswers: string[]
}

const Quiz = () => {
  const [topic, setTopic] = useState<string>('');
  const [difficulty, setDifficulty] = useState<string>('');
  const [numQuestions, setNumQuestions] = useState<number>(5);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({})
  const [result, setResult] = useState<QuizResult | null>(null)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const backendQuiz = process.env.NEXT_PUBLIC_BACKEND_QUIZ;
    setLoading(true);
    setQuestions([]);
    setResult(null);

    try {
      const response = await axios.post(`${backendQuiz}`, { topic, difficulty, numQuestions });

      if (response.status === 200 || response.status === 201) {
        let questionArray: Question[] = [];

        const rawData = response.data;
        if (typeof rawData === 'string') {
          const cleanedData = rawData.replace(/``````/g, '').trim();
          if (cleanedData) {
            try {
              questionArray = JSON.parse(cleanedData);
            } catch (parseError) {
              console.error("Failed to parse questions JSON:", parseError, cleanedData);
            }
          }
        } else if (Array.isArray(rawData)) {
          questionArray = rawData;
        } else if (rawData.questions && Array.isArray(rawData.questions)) {
          questionArray = rawData.questions;
        }

        if (Array.isArray(questionArray) && questionArray.length > 0) {
          setQuestions(questionArray);
          setLoading(false);        // [!] Set loading to false before starting quiz
          setQuizStarted(true);     // [!] Now, show questions
          console.log("Questions set:", questionArray);
          alert("Let's Play The Quiz!");
        } else {
          setLoading(false);
          console.warn("No valid questions received from backend.");
        }
      }
    } catch (error) {
      setLoading(false);
      console.error("An unexpected error occurred:", error);
    }
  }

  const handleFinish = async () => {
    try {
      const backendEval = process.env.NEXT_PUBLIC_BACKEND_EVALUATE
      const response = await axios.post(`${backendEval}`, { quiz: questions, answers });
      setResult(response.data);
    } catch (error) {
      console.error("Error evaluating quiz:", error)
    }
  }

  return (
    <>
      <div className="bg-gradient-to-br from-black via-purple-600 to-black flex flex-col items-center justify-center min-h-screen text-black p-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 border p-8 rounded-lg bg-black/50 backdrop-blur-md shadow-lg w-full max-w-md">
          <h2>Welcome to the Quiz Section</h2>
          <input type="text" placeholder="Choose the topic" value={topic} onChange={(e) => setTopic(e.target.value)} />
          <input type="text" placeholder="Choose the difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} />
          <input type="number" placeholder="Number of questions" value={numQuestions} onChange={(e) => setNumQuestions(Number(e.target.value))}/>
          <button type="submit" className="mt-4 px-4 py-2 bg-purple-700 rounded-lg shadow hover:bg-purple-800 transition">Bring it on</button>
        </form>
      </div>

      {quizStarted && !loading && (
        <div className="mt-8 p-4 border rounded-lg bg-black/50 backdrop-blur-md shadow-lg text-white max-w-2xl mx-auto">
          {questions.map((q, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold mb-2">{`Q${index + 1}: ${q.question}`}</h3>
              <ul className="list-disc list-inside">
                {q.options.map((option, idx) => (
                  <li key={idx} className="mb-1">
                    <button
                      type="button"
                      onClick={() => setAnswers({ ...answers, [index]: option })}
                      className={`px-4 py-2 rounded-lg w-full text-left ${
                        answers[index] === option ? "bg-purple-700" : "bg-gray-700"
                      } hover:bg-purple-600 transition`}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <button
            type="button"
            onClick={handleFinish}
            className="mt-4 px-4 py-2 bg-green-600 rounded-lg shadow hover:bg-green-700 transition"
          >
            Finish
          </button>
        </div>
      )}

      {loading && (
        <div className="mt-8 text-white text-center">
          <p>Loading questions...</p>
        </div>
      )}

      {result && (
        <div className="mt-6 p-4 bg-black/60 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h2 className="text-xl font-bold">Your Results 🎉</h2>
          <p>Score: {result.score}</p>
          <p>Feedback: {result.feedback}</p>
          <ul>
            {result.correctAnswers?.map((ans, i) => (
              <li key={i}>Q{i+1}: {ans}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default Quiz
