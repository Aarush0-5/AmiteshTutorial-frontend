'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  username: string;
  class: number;
  marks: Mark[];
  role: 'STUDENT' | 'TEACHER';
}

interface Mark {
  subject: string;
  marks: number;
}

const Dashboard: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [className, setClassName] = useState<number>();
  const [marks, setMarks] = useState<Mark[]>([]);
  const [role, setRole] = useState<'STUDENT' | 'TEACHER'>();
  const [students, setStudents]= useState<User[]>([])

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      window.location.href = '/login';
      alert('NOPE! LOGIN FIRST');
      return;
    }
    const fetchData = async () => {
      try {
        const backendGet= process.env.NEXT_PUBLIC_BACKEND_GET
        const response = await axios.get( `${backendGet}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data: User = response.data;
        setUsername(data.username);
        setRole(data.role);
        setClassName(data.class);
        setMarks(data.marks);
        
         
        if (data.role === 'TEACHER') {
          try {
            const backendGetStudents = process.env.NEXT_PUBLIC_BACKEND_GET_STUDENTS;
            const allStudents = await axios.get(`${backendGetStudents}/students`, {
              headers: { Authorization: `Bearer ${token}` },
            });
            setStudents(allStudents.data);
            console.log(allStudents.data);
          } catch (error) {
            console.error('Error fetching students data', error);
          }
        }
        
      } catch (error: any) {
        console.error('Error fetching dashboard data', error.response.status);
      }
    };

    fetchData();
  }, []);   

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = '/login';
  }
    
  const timetable = (className: number | undefined) => {
    if(className === undefined){
      return null;
    }

    if (className === 6) {
      return (
        <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">
          4-5 pm - Amitesh Sir
        </div>
      );
    } else if (className === 7) {
      return (
        <>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Monday - 6-7 pm - Aarush Sir</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Tuesday - 6-7 pm - Aarush Sir</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Wednesday - 6-7 pm - Aarush Sir</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Thursday - 5-6 pm - Amitesh Sir</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Friday - 5-6 pm - Amitesh Sir</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Saturday - 5-6 pm - Amitesh Sir</div>
        </>
      );
    } else if (className === 8) {
      return (
        <>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Monday - 5-6 pm - Amitesh Sir</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Tuesday - 5-6 pm - Amitesh Sir</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Wednesday - 5-6 pm - Amitesh Sir</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Thursday - 6-7 pm - Aarush Sir</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Friday - 6-7 pm - Aarush Sir</div>
          <div className="p-2 text-xl font-semibold text-center bg-blue-50 rounded-lg">Saturday - 6-7 pm - Aarush Sir</div>
        </>
      );
    }
    return null;
  }

   
  const groupBy = <T, K extends keyof T>(arr: T[], key: K) => {
    return arr.reduce((acc, curr) => {
      const group = curr[key] as unknown as string | number | symbol;
      if (!acc[group]) {
        acc[group] = [];
      }
      acc[group].push(curr);
      return acc;
    }, {} as Record<string | number | symbol, T[]>);
  };
  
  

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow p-4 mb-6 flex flex-col justify-between items-center md:items-start">
        <div className="w-full flex justify-between items-center mb-4 md:mb-0">
          <div>
          <span className="text-2xl text-gray-700 font-semibold">{username}</span> 
          {role === 'STUDENT' && <span className="text-2xl text-gray-600 ml-2">{className}</span>}
          </div>
          <button onClick={handleLogout} className="text-2xl p-3 border-black border-solid lg:bg-red-600 font-semibold text-black lg:hover:text-white">LogOut</button>
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
                    <div key={index} className="p-2 bg-gray-50 rounded-lg">
                      {mark.subject}: {mark.marks}
                    </div>
                  ))
                ) : (
                  <p className='text-center text-xl'>Well, No marks at the moment!</p>
                )}
              </div>
            </section>
            
            <section className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-3xl text-center font-bold mb-4">TimeTable</h2>
              <div>
                {timetable(className)}
              </div>
            </section>
            
            <section className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-3xl text-center font-bold mb-4">Study Material</h2>
              <div className="space-y-2">
                {marks.length > 0 ? (
                  marks.map((mark, index) => (
                    <div key={index} className="p-2 bg-gray-50 rounded-lg">
                      {mark.subject}: {mark.marks}
                    </div>
                  ))
                ) : (
                  <p className='text-xl text-center'>No study material at the moment</p>
                )}
              </div>
            </section>
          </div>
        )}

        {role === 'TEACHER' && (
          <section className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-3xl text-center font-bold mb-4">Classes</h2>
            {students.length > 0 ? (
              Object.entries(groupBy(students, 'class')).map(([className, classStudents], index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold">{`Class: ${className}`}</h3>
                  <div className="space-y-2">
                    {classStudents.map((student, studentIndex) => (
                      <div key={studentIndex} className="p-2 bg-white rounded-lg">
                        <p>{`Name: ${student.username}`}</p>
                        <p>{`Marks: ${student.marks.map(mark => `${mark.subject}: ${mark.marks}`).join(', ')}`}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className='text-center text-xl'>No student data available.</p>
            )}
          </section>
        )}


      </main>
    </div>
  );
};

export default Dashboard;
