"use client"
import React, { useState } from 'react';

const MentorMenteeForm: React.FC = () => {
  const [facultyName, setFacultyName] = useState('');
  const [students, setStudents] = useState<string[]>(['']);
  const [studentsusn, setStudentsUSN] = useState<string[]>([' '])

  const handleStudentChange = (index: number, value: string) => {
    const newStudents = [...students];
    newStudents[index] = value;
    setStudents(newStudents);
  };

  const addStudent = () => {
    if (students.length < 20) {
      setStudents([...students, '']);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Faculty Name:", facultyName);
    console.log("Students:", students.filter(student => student));
  };

  return (
    <div className="flex flex-col items-center p-8">
      <form onSubmit={handleSubmit} className="flex justify-between w-full max-w-4xl">
        <div className="flex-1 mr-4">
          <h2 className="text-xl font-bold">Faculty</h2>
          <input 
            type="text" 
            value={facultyName} 
            onChange={(e) => setFacultyName(e.target.value)} 
            className="mt-2 p-2 border border-gray-300 rounded w-full" 
            placeholder="Enter Subject ID"
          />
        </div>
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold">Students</h2>
            <ul className="mt-2">
              {students.map((student, index) => (
                <li key={index} className="py-1">
                  <input
                    type="text"
                    value={student}
                    onChange={(e) => handleStudentChange(index, e.target.value)}
                    className="p-2 border border-gray-300 rounded w-full"
                    placeholder={`Enter Subject Title`}
                  />
                </li>
                
              ))}
            </ul>
          </div>
        </div>
      </form>
      <button 
        type="submit" 
        className="mt-6 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
      >
        Submit
      </button>
    </div>
  );
};

export default MentorMenteeForm;
