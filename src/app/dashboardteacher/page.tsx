'use client';

import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import Head from "next/head"

interface Mark {
  subject: string;
  mark: string;
}
interface Student {
  StudentName: string;
  Class: string;
  Marks: Mark[];
  StudentId: number;
  Subject?: string;
  Numbers?:  string;
}


const DashboardTeacher = () => {
  const [students, setStudents] =useState<Student[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      window.location.href = '/login';
      alert('NOPE! LOGIN FIRST');
      return;
    }
    const fetchStudents = async () => {
      try {
        const backendGetStudents = process.env.NEXT_PUBLIC_BACKEND_GET_STUDENTS;
        const response = await axios.get(`${backendGetStudents}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStudents(response.data);
      } catch (error) {
        if ( axios.isAxiosError(error) && error.response) {
          console.error('Error fetching students data:', error.response.status);
        } else {
          console.error('Error fetching students data:', error);
        }
      }
    };

    fetchStudents();
  }, []);

  const handleInputChange = (studentId: number, field: string, value: string | number) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.StudentId === studentId
          ? { ...student, [field]: value }
          : student
      )
    );
  }

  const handleSubmitMarks = async (
    event: FormEvent,
    studentId: number
  ) => {
    event.preventDefault();
    const token = localStorage.getItem('accessToken');
    const backendPostStudents = process.env.NEXT_PUBLIC_BACKEND_POST_STUDENTS;
    const student = students.find((student) => student.StudentId === studentId);
    if (student?.Subject && student.Numbers !== undefined && student.Numbers !== null) {
      try {
        const submitMarks = await axios.post(
          `${backendPostStudents}`,
          {
            subject: student.Subject,
            mark: student.Numbers,
            studentId,
          },  {
          headers: { Authorization: `Bearer ${token}` },
        }
        );

        if (submitMarks.status === 201) {
          alert('Marks uploaded successfully');
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Error posting the data:', error);
          alert('There is an error in posting the data');
        }
      }
    } else {
      alert('Please fill in all fields before submitting.');
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = '/';
  }
    
  return ( 
    <>
    <Head>
          <title>Teacher's Dashboard</title>
          <meta name="description" content="Teacher's dashboard page of amitesh tutorials: coaching/tutorials in lucknow"/>
          <meta name="keywords" content="Coaching, coaching, Tutorials, tutorials, study , amitesh tutorials, AmiteshTutorials, Amitesh tutorials, teacher's dashboard"/>
    </Head>
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen  bg-gray-500">
      <section className="bg-white  p-4 rounded-lg shadow w-full ">
        <div className='flex justify-between'>
        <h2 className="text-2xl text-center font-bold mb-4">Teacher Dashboard</h2>
        <button className='text-2xl text-center font-bold mb-4 hover:text-red-600' onClick={handleLogout}>Logout</button>
        </div>
        {students.length > 0 ? (
          students.map((student, index) => (
            <div key={index} className=" p-4 bg-gray-50 rounded-lg mb-2">
              <div className='flex justify-between'>
              <p className="font-semibold">{`Name: ${student.StudentName}`}</p>
              <p className="font-semibold">{`Class: ${student.Class}`}</p>
              </div>
              <input
                type="text"
                id="subject"
                placeholder='Subject'
                value={student.Subject || ''}
                onChange={(e) => handleInputChange(student.StudentId, 'Subject', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
              />
              <input
                type="text"
                id="mark"
                placeholder='Marks'
                value={student.Numbers ?? ""}
                onChange={(e) => handleInputChange(student.StudentId, 'Numbers', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
              />
              <button
                onClick={(e) => handleSubmitMarks(e, student.StudentId)}
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300"
              >
                Upload Marks
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-xl">No student data available.</p>
        )}
      </section>
    </div>
    </>
  );
};

export default DashboardTeacher;


