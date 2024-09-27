"use client";

import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const page = () => {
    return (
    <div className="">
      <form action="">
        <div className="p-6 max-w-4xl mx-auto bg-white border-2 shadow-md rounded-md my-10">
          <div className="grid grid-cols-2 gap-6">

           {/* Department */}
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="department"
              >
                Department
              </label>
              <select
                name="department"
                className="block p-2 border border-gray-300 rounded-md w-full"
              >
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Mechanical Engineering">
                  Mechanical Engineering
                </option>
                <option value="Electrical and Electronics Engineering">
                  Electrical and Electronics Engineering
                </option>
                <option value="Electronics and Communication Engineering">
                  Electronics and Communication Engineering
                </option>
                <option value="Industrial Engineering and Management">
                  Industrial Engineering and Management
                </option>
                <option value="Electronics and Instrumentation Engineering">
                  Electronics and Instrumentation Engineering
                </option>
                <option value="Computer Science and Engineering">
                  Computer Science and Engineering
                </option>
                <option value="Electronics and Telecommunication Engineering">
                  Electronics and Telecommunication Engineering
                </option>
                <option value="Information Science and Engineering">
                  Information Science and Engineering
                </option>
                <option value="Medical Electronics Engineering">
                  Medical Electronics Engineering
                </option>
                <option value="Aeronautical Engineering">
                  Aeronautical Engineering
                </option>
                <option value="Computer Applications (MCA)">
                  Computer Applications (MCA)
                </option>
                <option value="Business Administration (MBA)">
                  Business Administration (MBA)
                </option>
                <option value="Artificial Intelligence and Machine Learning">
                  Artificial Intelligence and Machine Learning
                </option>
                <option value="Computer Science and Business Studies">
                  Computer Science and Business Studies
                </option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Humanities and Social Science">
                  Humanities and Social Science
                </option>
              </select>
            </div>


            {/* Semester */}
            <div className="col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="prefix"
              >
                Semester
              </label>
              <select
                name="prefix"
                className="block p-2 border border-gray-300 rounded-md w-40"
              >
                <option value="1">First</option>
                <option value="2">Second</option>
                <option value="3">Third</option>
                <option value="4">Fourth</option>
                <option value="5">Fifth</option>
                <option value="6">Sixth</option>
                <option value="7">Seventh</option>
                <option value="8">Eight</option>
              </select>
            </div>
                                            
                           
          </div>
        </div>          

        <div className="flex flex-row my-10 justify-center gap-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Cancel
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;