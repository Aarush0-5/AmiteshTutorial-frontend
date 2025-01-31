'use client'


 const Dashboard: React.FC =() => {
    return (
        "welcome"
    )
 }

export default Dashboard

{/*import { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const [className, setClassName] = useState();
  const [scores, setScores] = useState<any[]>([]);
  const [timetable, setTimetable] = useState<any[]>([]);
  const [studyMaterial, setStudyMaterial] = useState<any[]>([]);

 {/*} useEffect(() => {
    // Fetch data from backend
    // Example API calls to fetch data for the three sections
    const fetchScores = async () => {
      const response = await axios.get('/api/scores');
      setScores(response.data);
    };

    const fetchTimetable = async () => {
      const response = await axios.get('/api/timetable');
      setTimetable(response.data);
    };

    const fetchStudyMaterial = async () => {
      const response = await axios.get('/api/study-material');
      setStudyMaterial(response.data);
    };

    fetchScores();
    fetchTimetable();
    fetchStudyMaterial();
  }, []);
   
  

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow p-4 mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div>
          <span className="text-gray-700 font-semibold">{username}</span> |
          <span className="text-gray-600 ml-2">{className}</span>
        </div>
      </header>

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <section className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Scores</h2>
          <div className="space-y-2">
            {scores.length > 0 ? (
              scores.map((score, index) => (
                <div key={index} className="p-2 bg-gray-50 rounded-lg">
                  {score.subject}: {score.marks}
                </div>
              ))
            ) : (
              <p>No scores available</p>
            )}
          </div>
        </section>

        <section className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Timetable</h2>
          <div className="space-y-2">
            {timetable.length > 0 ? (
              timetable.map((item, index) => (
                <div key={index} className="p-2 bg-gray-50 rounded-lg">
                  {item.day}: {item.subject} ({item.time})
                </div>
              ))
            ) : (
              <p>No timetable available</p>
            )}
          </div>
        </section>

        <section className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Study Material</h2>
          <div className="space-y-2">
            {studyMaterial.length > 0 ? (
              studyMaterial.map((material, index) => (
                <div key={index} className="p-2 bg-gray-50 rounded-lg">
                  <a href={material.link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                    {material.title}
                  </a>
                </div>
              ))
            ) : (
              <p>No study material available</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;*/}
