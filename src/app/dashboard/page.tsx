'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Head from "next/head"

interface User {
  username: string;
  class: number;
  marks: Mark[];
  role: 'STUDENT' | 'TEACHER';
}

interface Mark {
  id: number;
  subject: string;
  mark: string;
  studentId: number;
}

const Dashboard: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [className, setClassName] = useState<number>();
  const [marks, setMarks] = useState<Mark[]>([]);
  const [role, setRole] = useState<'STUDENT' | 'TEACHER'>();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      window.location.href = '/login';
      alert('NOPE! LOGIN FIRST');
      return;
    }
    const fetchData = async () => {
      try {
        const backendGet =  process.env.NEXT_PUBLIC_BACKEND_GET;
        const response = await axios.get(`${backendGet}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data: User = response.data;
        setUsername(data.username);
        setRole(data.role);
        setClassName(data.class);
        setMarks(data.marks);  
      } catch (error) {
        console.error('Error fetching dashboard data', error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.href = '/';
  };

  const timetable = (className: number | undefined) => {
    if (className === undefined) {
      return null;
    }

    if (className === 5 || className === 2 || className === 1 || className === 4 || className === 3) {
      return (
        <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">
          4-5 pm Everyday
        </div>
      );
    } else if (className === 6) {
      return (
        <>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">4-5 Pm , Everyday</div>
        </>
      );
    } else if (className === 7) {
      return (
        <>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Time - 5 to 6 Pm everyday</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Monday - Maths</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Tuesday - Sci/SST/Eng</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Wednesday - Maths</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Thursday - Sci/SST/Eng</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Friday - Maths</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Saturday - Sci/SST/Eng</div>
        </>
      );
    } else if (className === 8) {
      return (
        <>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Time - 5 to 6 Pm everyday</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Monday - Sci/SST/Eng</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Tuesday - Maths</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Wednesday - Sci/SST/Eng</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Thursday - Maths</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Friday - Sci/SST/Eng</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Saturday - Maths</div>
        </>
      );
    }
     else if (className === 9) {
      return (
        <>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Time- 6-7 Pm everyday</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Monday -Sci/SST</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Tuesday -Maths</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Wednesday -Sci/SST</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Thursday -Maths</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Friday -Sci/SST</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Saturday -Maths</div>
        </>
      );
    }
     else if (className === 10) {
      return (
        <>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Time -7 to 8 Pm everyday</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Monday - Maths</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Tuesday - Sci/SST</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Wednesday - Maths</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Thursday - Sci/SST</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Friday - Maths</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Saturday - Sci/SST</div>
        </>
      );
    }
     else if (className === 12) {
      return (
        <>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Time- 6 to 7 Pm everyday</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Monday - Physics</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Tuesday - Chemistry</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Wednesday - Physics</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Thursday - Chemistry</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Friday - Physics</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Saturday - Chemistry</div>
        </>
      );
    }
    return null;
  };

  return (
    <>
    <Head>
          <title>Student Dashboard</title>
          <meta name="description" content="Students dashboard of amitesh tutorials: coaching/tutorials in lucknow"/>
          <meta name="keywords" content="Coaching, coaching, Tutorials, tutorials, study , amitesh tutorials, AmiteshTutorials, Amitesh tutorials, dashboard, student dashboard"/>
    </Head>
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow p-4 mb-6 flex flex-col justify-between items-center md:items-start">
        <div className="w-full flex justify-between items-center mb-4 md:mb-0">
          <div>
            <span className="text-2xl text-gray-700 font-semibold">{username}</span>
            {role === 'STUDENT' && <span className="text-2xl text-gray-600 ml-2">{className}</span>}
          </div>
          
          <button onClick={handleLogout} className="text-2xl p-3 border-black border-solid lg:bg-red-600 font-semibold text-black lg:hover:text-white"> 
            LogOut
          </button>
        </div>
      </header>

      <main>
        {role === 'STUDENT' && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <section className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-3xl text-center font-bold mb-4">Marks</h2>
              <div className="space-y-2">
                {marks.length > 0 ? (
                  marks.map((mark, index) => (
                    <div key={index} className="p-2 bg-gray-50 text-xl text-center rounded-lg">
                      {mark.subject}: {mark.mark}
                    </div>
                  ))
                ) : (
                  <p className="text-center text-xl">Well, No marks at the moment!</p>
                )}
              </div>
            </section>

            <section className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-3xl text-center font-bold mb-4">TimeTable</h2>
              <div>{timetable(className)}</div>
            </section>
          </div>
        )}
      </main>
    </div>
    </>
  );
};

export default Dashboard;
