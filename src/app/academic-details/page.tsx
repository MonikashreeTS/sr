"use client";

import React, { useState } from "react";

interface Qualification {
  qualification: string;
  specialization: string;
  dateOfCompletion: string;
}

const page = () => {
  const [qualifications, setQualifications] = useState<Qualification[]>([
    { qualification: "", specialization: "", dateOfCompletion: "" },
  ]);

  const handleAddQualification = () => {
    setQualifications([
      ...qualifications,
      { qualification: "", specialization: "", dateOfCompletion: "" },
    ]);
  };

  const handleDeleteQualification = (index: number) => {
    const newQualifications = qualifications.filter((_, i) => i !== index);
    setQualifications(newQualifications);
  };

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    const newQualifications = [...qualifications];
    newQualifications[index] = {
      ...newQualifications[index],
      [name]: value,
    };
    setQualifications(newQualifications);
  };

  return (
    <div>
      <form action="">
        <div className="p-6 max-w-4xl mx-auto bg-white border-2 shadow-md rounded-md my-10">
          <div className="grid gap-6">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-700">
                Qualifications
              </h2>

              {qualifications.map((qual, index) => (
                <div
                  className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white rounded-md shadow-sm relative"
                  key={index}
                >
                  {/* Delete Button */}
                  <button
                    type="button"
                    onClick={() => handleDeleteQualification(index)}
                    className="absolute size-8 top-0 right-0 hover:bg-red-500 hover:text-white text-black p-1 rounded-full focus:outline-none"
                    title="Delete Qualification"
                  >
                    ✕
                  </button>

                  {/* Qualification */}
                  <div className="col-span-1">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor={`qualification-${index}`}
                    >
                      Qualification
                    </label>
                    <select
                      id={`qualification-${index}`}
                      name="qualification"
                      value={qual.qualification}
                      onChange={(e) => handleChange(index, e)}
                      className="block p-2 border border-gray-300 rounded-md w-full focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">Select Qualification</option>
                      <option value="none">None</option>
                      <option value="10th">10th</option>
                      <option value="puc">PUC</option>
                      <option value="10+12">10+12</option>
                      <option value="degree">Degree</option>
                      <option value="diploma">Diploma</option>
                      <option value="doctorate">Doctorate</option>
                      <option value="post-graduate">Post Graduate</option>
                      <option value="graduate">Graduate</option>
                      <option value="post-doctorate">Post Doctorate</option>
                    </select>
                  </div>

                  {/* Specialization */}
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor={`specialization-${index}`}
                    >
                      Specialization
                    </label>
                    <input
                      type="text"
                      id={`specialization-${index}`}
                      name="specialization"
                      value={qual.specialization}
                      onChange={(e) => handleChange(index, e)}
                      pattern="[A-Za-z\s]{1,}"
                      required
                      title="No numbers or special characters allowed."
                      className="block w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Specialization"
                    />
                  </div>

                  {/* Date of Completion */}
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor={`dateOfCompletion-${index}`}
                    >
                      Date of Completion
                    </label>
                    <input
                      type="date"
                      id={`dateOfCompletion-${index}`}
                      name="dateOfCompletion"
                      value={qual.dateOfCompletion}
                      onChange={(e) => handleChange(index, e)}
                      className="block w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
              ))}

              {/* Add Qualification Button */}
              <button
                type="button"
                onClick={handleAddQualification}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Add Qualification
              </button>
            </div>

            {/* Experience Section */}
            <p className="text-gray-700 text-md font-bold">
              Years of Experience
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Years of Experience */}

              {/* Research */}
              <div className="col-span-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="research"
                >
                  Research
                </label>
                <input
                  type="number"
                  id="research"
                  name="research"
                  min={0}
                  max={20}
                  required
                  className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Research"
                />
              </div>

              {/* Industry */}
              <div className="col-span-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="industry"
                >
                  Industry
                </label>
                <input
                  type="number"
                  id="industry"
                  name="industry"
                  min={0}
                  max={20}
                  required
                  className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Industry"
                />
              </div>

              {/* Teaching */}
              <div className="col-span-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="teaching"
                >
                  Teaching
                </label>
                <input
                  type="number"
                  id="teaching"
                  name="teaching"
                  min={0}
                  max={20}
                  required
                  className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Teaching"
                />
              </div>
            </div>

            {/* Program and Designation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Program */}
              <div className="col-span-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="program"
                >
                  Program
                </label>
                <input
                  type="text"
                  id="program"
                  name="program"
                  required
                  pattern="[A-Za-z\s]{1,}"
                  title="No numbers or special characters allowed."
                  className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Program"
                />
              </div>

              {/* Designation */}
              <div className="col-span-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="designation"
                >
                  Designation
                </label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  required
                  pattern="[A-Za-z\s]{1,}"
                  title="No numbers or special characters allowed."
                  className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Designation"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 max-w-4xl mx-auto bg-white border-2 shadow-md rounded-md my-10">
          <div className="grid grid-cols-3 gap-6">
            {/* Subjects Expertised */}
            <div className="col-span-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="designation"
              >
                Subjects Expertised
              </label>
              <input
                type="text"
                id="subjects-expertised"
                name="subjects-expertised"
                required
                pattern="[A-Za-z]{1,}"
                title="No numbers or special characters allowed."
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Subjects Expertised"
              />
            </div>

            {/* Area of Specialization */}
            <div className="col-span-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="designation"
              >
                Area of Specialization
              </label>
              <input
                type="text"
                id="area-of-specialization"
                name="area-of-specialization"
                required
                pattern="[A-Za-z]{1,}"
                title="No numbers or special characters allowed."
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Area of Specialization"
              />
            </div>

            {/* Workshop Details */}
            <div className="col-span-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="designation"
              >
                Workshop Details
              </label>
              <input
                type="text"
                id="workshop-details"
                name="workshop-details"
                required
                pattern="[A-Za-z]{1,}"
                title="No numbers or special characters allowed."
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Workshop Details"
              />
            </div>

            {/* Invited Speaker */}
            <div className="col-span-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="designation"
              >
                Invited Speaker
              </label>
              <input
                type="text"
                id="invited-speaker"
                name="invited-speaker"
                required
                pattern="[A-Za-z]{1,}"
                title="No numbers or special characters allowed."
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Invited Speaker"
              />
            </div>
          </div>
        </div>

        <div className="p-6 max-w-4xl mx-auto bg-white border-2 shadow-md rounded-md my-10">
          <div className="grid grid-cols-3 gap-6">
            {/* Co-Curricular Activities */}
            <div className="col-span-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="designation"
              >
                Co-Curricular Activities
              </label>
              <input
                type="text"
                id="co-curricular-activities"
                name="co-curricular-activities"
                required
                pattern="[A-Za-z]{1,}"
                title="No numbers or special characters allowed."
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Co-Curricular Activities"
              />
            </div>

            {/* Extra-Curricular Activities */}
            <div className="col-span-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="designation"
              >
                Extra-Curricular Activities
              </label>
              <input
                type="text"
                id="extra-curricular-activities"
                name="extra-curricular-activities"
                required
                pattern="[A-Za-z]{1,}"
                title="No numbers or special characters allowed."
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Extra-Curricular Activities"
              />
            </div>

            {/* Other Responsibilities */}
            <div className="col-span-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="designation"
              >
                Other Responsibilities
              </label>
              <input
                type="text"
                id="other-responsibilities"
                name="other-responsibilities"
                required
                pattern="[A-Za-z]{1,}"
                title="No numbers or special characters allowed."
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Other Responsibilities"
              />
            </div>

            {/* Student Projects */}
            <div className="col-span-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="designation"
              >
                Student Projects
              </label>
              <input
                type="text"
                id="student-projects"
                name="student-projects"
                required
                pattern="[A-Za-z]{1,}"
                title="No numbers or special characters allowed."
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Student Projects"
              />
            </div>

            {/* Achievements */}
            {/* Recognitions */}
            <div className="col-span-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="designation"
              >
                Recognitions
              </label>
              <input
                type="text"
                id="recognitions"
                name="recognitions"
                required
                pattern="[A-Za-z]{1,}"
                title="No numbers or special characters allowed."
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Recognitions"
              />
            </div>

            {/* Awards */}
            <div className="col-span-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="designation"
              >
                Awards
              </label>
              <input
                type="text"
                id="awards"
                name="awards"
                required
                pattern="[A-Za-z]{1,}"
                title="No numbers or special characters allowed."
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Awards"
              />
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
