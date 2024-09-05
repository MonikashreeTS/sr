"use client";

import React from "react";
import { useState } from "react";

const page = () => {
  const [sameAsAbove, setSameAsAbove] = useState(false);
  const [address, setAddress] = useState({
    line1: "",
    line2: "",
    pin: "",
  });
  const [DOB, setDOB] = useState(new Date().toISOString().split("T")[0]);

  const handleCheckboxChange = () => {
    setSameAsAbove(!sameAsAbove);
  };

  const handleAddressChange = (e: any) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };
  return (
    <div className="">
      <form action="">
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-md my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Prefix */}
            <div className="col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="prefix"
              >
                Name Prefix
              </label>
              <select
                name="prefix"
                className="block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Dr.">Dr.</option>
                <option value="Prof.">Prof.</option>
              </select>
            </div>

            {/* First Name */}
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="first-name"
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="First Name"
              />
            </div>

            {/* Middle Name */}
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="middle-name"
              >
                Middle Name
              </label>
              <input
                type="text"
                id="middle-name"
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Middle Name"
              />
            </div>

            {/* Last Name */}
            <div className="col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="last-name"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Last Name"
              />
            </div>

            {/* DOB */}
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="dob"
              >
                Date of Birth (DOB)
              </label>
              <input
                type="date"
                id="dob"
                value={DOB}
                onChange={(e) => setDOB(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Age */}
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="middle-name"
              >
                Age
              </label>
              <input
                type="number"
                id="Age"
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Age"
                disabled={true}
                value={new Date().getFullYear() - new Date(DOB).getFullYear()}
              />
            </div>

            {/* Email */}
            <div className="col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Mail ID
              </label>
              <input
                type="email"
                id="email"
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Email"
              />
            </div>
          </div>
        </div>
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-md my-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Employee ID */}
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="employee-id"
              >
                Employee ID
              </label>
              <input
                type="text"
                id="employee-id"
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Employee ID"
              />
            </div>

            {/* AICTE Faculty ID */}
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="aicte-id"
              >
                AICTE Faculty ID
              </label>
              <input
                type="text"
                id="aicte-id"
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="AICTE Faculty ID"
              />
            </div>

            {/* Vidwan ID */}
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="vidwan-id"
              >
                Vidwan ID
              </label>
              <input
                type="text"
                id="vidwan-id"
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Vidwan ID"
              />
            </div>

            {/* Address Line 1 */}
            <div className="col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="address-line1"
              >
                Address Line 1
              </label>
              <input
                type="text"
                id="address-line1"
                name="line1"
                value={address.line1}
                onChange={handleAddressChange}
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Address Line 1"
              />
            </div>

            {/* Address Line 2 */}
            <div className="col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="address-line2"
              >
                Address Line 2
              </label>
              <input
                type="text"
                id="address-line2"
                name="line2"
                value={address.line2}
                onChange={handleAddressChange}
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Address Line 2"
              />
            </div>

            {/* PIN */}
            <div className="col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pin"
              >
                PIN
              </label>
              <input
                type="text"
                id="pin"
                name="pin"
                value={address.pin}
                onChange={handleAddressChange}
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="PIN"
              />
            </div>

            {/* Same as Above Checkbox */}
            <div className="col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                <input
                  type="checkbox"
                  checked={sameAsAbove}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                Address for Correspondence Same as Above
              </label>
            </div>

            {/* Address for Correspondence */}
            <div className="col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="corr-line1"
              >
                Address for Correspondence Line 1
              </label>
              <input
                type="text"
                id="corr-line1"
                className="block w-full p-2 border border-gray-300 rounded-md"
                value={sameAsAbove ? address.line1 : ""}
                disabled={sameAsAbove}
                placeholder="Correspondence Address Line 1"
              />
            </div>

            <div className="col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="corr-line2"
              >
                Address for Correspondence Line 2
              </label>
              <input
                type="text"
                id="corr-line2"
                className="block w-full p-2 border border-gray-300 rounded-md"
                value={sameAsAbove ? address.line2 : ""}
                disabled={sameAsAbove}
                placeholder="Correspondence Address Line 2"
              />
            </div>

            <div className="col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="corr-pin"
              >
                Correspondence PIN
              </label>
              <input
                type="text"
                id="corr-pin"
                className="block w-full p-2 border border-gray-300 rounded-md"
                value={sameAsAbove ? address.pin : ""}
                disabled={sameAsAbove}
                placeholder="Correspondence PIN"
              />
            </div>

            {/* Name of Spouse */}
            <div className="col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="spouse-name"
              >
                Name of Spouse
              </label>
              <input
                type="text"
                id="spouse-name"
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Spouse Name"
              />
            </div>

            {/* Mother's Name */}
            <div className="col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="mother-name"
              >
                Mother's Name
              </label>
              <input
                type="text"
                id="mother-name"
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Mother's Name"
              />
            </div>

            {/* No. of Dependents */}
            <div className="col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="dependents"
              >
                No. of Dependents
              </label>
              <input
                type="number"
                id="dependents"
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Number of Dependents"
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
