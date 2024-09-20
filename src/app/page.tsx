"use client";

import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

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
        <div className="p-6 max-w-4xl mx-auto bg-white border-2 shadow-md rounded-md my-10">
          <div className="grid grid-cols-2 gap-6">
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
                className="block p-2 border border-gray-300 rounded-md w-20"
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
                name="first-name"
                pattern="^[A-Za-z][A-Za-z ]*$"
                required
                title="No numbers or special characters allowed."
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="First Name"
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="last-name"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                pattern="^[A-Za-z][A-Za-z ]*$"
                required
                title="No numbers or special characters allowed."
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Last Name"
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
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
                title="Enter a valid email address."
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Email"
              />
            </div>

            {/* Phone */}
            <div className="col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Contact No.
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                pattern="[0-9]{10}"
                required
                title="Enter a valid 10 digit phone number."
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Phone"
              />
            </div>

            {/* Aadhar */}
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="aadhar"
              >
                Aadhar
              </label>
              <input
                type="text"
                id="aadhar"
                name="aadhar"
                pattern="[0-9]{12}"
                required
                title="Enter a valid 12 digit Aadhar number."
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Aadhar"
              />
            </div>

            {/* PAN */}
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pan"
              >
                PAN
              </label>
              <input
                type="text"
                id="pan"
                name="pan"
                pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                required
                title="Enter a valid PAN number."
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="PAN"
              />
            </div>

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
                name="employee-id"
                required
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
                name="aicte-id"
                required
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
                name="vidwan-id"
                required
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Vidwan ID"
              />
            </div>
          </div>
        </div>
        <div className="p-6 max-w-4xl mx-auto bg-white border-2 shadow-md rounded-md my-10">
          <div className="grid grid-cols-3 gap-6">
            {/* DOB */}
            <div className="col-span-1">
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
            <div className="col-span-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="middle-name"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Age"
                disabled={true}
                value={new Date().getFullYear() - new Date(DOB).getFullYear()}
              />
            </div>

            {/* Gender */}
            <div className="col-span-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="prefix"
              >
                Gender
              </label>
              <select
                name="prefix"
                className="block p-2 border border-gray-300 rounded-md w-full"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* State */}
            <div className="col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="prefix"
              >
                State
              </label>
              <select
                name="prefix"
                className="block p-2 border border-gray-300 rounded-md"
              >
                <option value="Karnataka">Karnataka</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Tamil Nadu">Kerala</option>
              </select>
            </div>

            {/* Address Line 1 */}
            <div className="col-span-3">
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
                required
                value={address.line1}
                onChange={handleAddressChange}
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Address Line 1"
              />
            </div>

            {/* Address Line 2 */}
            <div className="col-span-3">
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
                required
                value={address.line2}
                onChange={handleAddressChange}
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Address Line 2"
              />
            </div>

            {/* PIN */}
            <div className="col-span-3">
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
                required
                value={address.pin}
                onChange={handleAddressChange}
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="PIN"
              />
            </div>

            {/* Same as Above Checkbox */}
            <div className="col-span-3">
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
            <div className="col-span-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="corr-line1"
              >
                Address for Correspondence Line 1
              </label>
              <input
                type="text"
                id="corr-line1"
                name="corr-line1"
                required
                className="block w-full p-2 border border-gray-300 rounded-md"
                value={sameAsAbove ? address.line1 : ""}
                disabled={sameAsAbove}
                placeholder="Correspondence Address Line 1"
              />
            </div>

            <div className="col-span-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="corr-line2"
              >
                Address for Correspondence Line 2
              </label>
              <input
                type="text"
                id="corr-line2"
                name="corr-line2"
                required
                className="block w-full p-2 border border-gray-300 rounded-md"
                value={sameAsAbove ? address.line2 : ""}
                disabled={sameAsAbove}
                placeholder="Correspondence Address Line 2"
              />
            </div>

            <div className="col-span-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="corr-pin"
              >
                Correspondence PIN
              </label>
              <input
                type="text"
                id="corr-pin"
                name="corr-pin"
                required
                className="block w-full p-2 border border-gray-300 rounded-md"
                value={sameAsAbove ? address.pin : ""}
                disabled={sameAsAbove}
                placeholder="Correspondence PIN"
              />
            </div>

            {/* Religion */}
            <div className="col-span-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="prefix"
              >
                Religion
              </label>
              <select
                name="prefix"
                className="block p-2 border border-gray-300 rounded-md w-full"
              >
                <option value="Hinduism">Hinduism</option>
                <option value="Christianity">Christianity</option>
                <option value="Islam">Islam</option>
                <option value="Buddhism">Buddhism</option>
                <option value="Baha'i">Baha'i</option>
                <option value="Confucianism">Confucianism</option>
                <option value="Jainism">Jainism</option>
                <option value="Judaism">Judaism</option>
                <option value="Shinto">Shinto</option>
                <option value="Sikhism">Sikhism</option>
                <option value="Taoism">Taoism</option>
                <option value="Zoroastrianism">Zoroastrianism</option>
              </select>
            </div>

            {/* Caste */}
            <div className="col-span-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="prefix"
              >
                Community
              </label>
              <select
                name="community"
                className="block p-2 border border-gray-300 rounded-md w-full"
              >
                <option value="Brahmins">Brahmins</option>
                <option value="Thakur">Thakur</option>
                <option value="Vaishya">Vaishya</option>
                <option value="Tyagi">Tyagi</option>
                <option value="Bhumihar">Bhumihar</option>
                <option value="Muslims">Muslims</option>
                <option value="Christians">Christians</option>
                <option value="Rajput">Rajput</option>
                <option value="Kayastha">Kayastha</option>
                <option value="Pathans">Pathans</option>
                <option value="Muslim Mughals">Muslim Mughals</option>
                <option value="Muslim Shaikh">Muslim Shaikh</option>
                <option value="Muslim Sayyad">Muslim Sayyad</option>
                <option value="Jat Sikh">Jat Sikh</option>
                <option value="Bania">Bania</option>
                <option value="Punjabi Khatri">Punjabi Khatri</option>
                <option value="Punjabi Arora">Punjabi Arora</option>
                <option value="Punjabi Sood">Punjabi Sood</option>
                <option value="Baidya">Baidya</option>
                <option value="Patidar">Patidar</option>
                <option value="Patel">Patel</option>
                <option value="Kshatriya">Kshatriya</option>
                <option value="Reddy">Reddy</option>
                <option value="Kamma">Kamma</option>
                <option value="Kapu">Kapu</option>
                <option value="Gomati Baniya">Gomati Baniya</option>
                <option value="Velamma">Velamma</option>
                <option value="Kshatriya Raju">Kshatriya Raju</option>
                <option value="Iyengar">Iyengar</option>
                <option value="Iyer">Iyer</option>
                <option value="Vellalars">Vellalars</option>
                <option value="Nair">Nair</option>
                <option value="Naidu">Naidu</option>
                <option value="Mukkulathor">Mukkulathor</option>
                <option value="Sengunthar">Sengunthar</option>
                <option value="Parkavakulam">Parkavakulam</option>
                <option value="Nagarathar Baniya">Nagarathar Baniya</option>
                <option value="Komati">Komati</option>
                <option value="Vokkaligas">Vokkaligas</option>
                <option value="Lingayats">Lingayats</option>
                <option value="Bunts">Bunts</option>
              </select>
            </div>

            {/* Category */}
            <div className="col-span-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="prefix"
              >
                Category
              </label>
              <select
                name="prefix"
                className="block p-2 border border-gray-300 rounded-md w-full"
              >
                <option value="GM">GM</option>
                <option value="SC">SC</option>
                <option value="ST">SC</option>
                <option value="OBC">OBC</option>
              </select>
            </div>
          </div>
        </div>
        <div className="p-6 max-w-4xl mx-auto bg-white border-2 shadow-md rounded-md my-10">
          <div className="grid grid-cols-2 gap-6">
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
                name="spouse-name"
                pattern="[A-Za-z]{1,}"
                required
                title="No numbers or special characters allowed."
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Spouse Name"
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
                name="dependents"
                min={0}
                max={10}
                required
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Number of Dependents"
              />
            </div>
            {/* Mother's Name */}
            <div className="col-span-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="mother-name"
              >
                Mother's Name
              </label>
              <input
                type="text"
                id="mother-name"
                pattern="[A-Za-z]{1,}"
                required
                title="No numbers or special characters allowed."
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Mother's Name"
              />
            </div>
            {/* Father's Name */}
            <div className="col-span-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="mother-name"
              >
                Father's Name
              </label>
              <input
                type="text"
                id="father-name"
                name="father-name"
                pattern="[A-Za-z]{1,}"
                required
                title="No numbers or special characters allowed."
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Mother's Name"
              />
            </div>
            {/* Mother Tongue */}
            <div className="col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="mother-name"
              >
                Mother Tongue
              </label>
              <select
                name="monther-tongue"
                className="block p-2 border border-gray-300 rounded-md w-full"
              >
                <option value="Kannada">Kannada</option>
                <option value="English">English</option>
                <option value="Tamil">Tamil</option>
                <option value="Hindi">Hindi</option>
                <option value="Malyalam">Malyalam</option>
              </select>
            </div>
            {/* Blood Group */}
            <div className="col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="blood-group"
              >
                Blood Group
              </label>
              <select
                name="prefix"
                className="block p-2 border border-gray-300 rounded-md w-full"
              >
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="O+">O+</option>
                <option value="AB+">AB+</option>
                <option value="A-">A-</option>
                <option value="B-">B-</option>
                <option value="O-">O-</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            {/* Specially Challenged */}
            <div className="col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                <input
                  type="checkbox"
                  className="mr-2"
                  id="specially-challenged"
                />
                Specially Challenged
              </label>
            </div>

            {/* Mode of Transport */}
            <div className="col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="mode-of-transport"
              >
                Mode of Transport
              </label>
              <select
                name="prefix"
                className="block p-2 border border-gray-300 rounded-md w-full"
              >
                <option value="Two Wheeler">Two Wheeler</option>
                <option value="Four Wheeler">Four Wheeler</option>
                <option value="Public Transport">Public Transport</option>
              </select>
            </div>

            {/* Bank Account Number */}
            <div className="col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="bank-account"
              >
                Bank Account Number
              </label>
              <input
                type="text"
                id="bank-account"
                name="bank-account"
                pattern="[0-9]{9,18}"
                required
                title="Enter a valid bank account number."
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Bank Account Number"
              />
            </div>

            {/* Emergency Contact No */}
            <div className="col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="emergency-contact"
              >
                Emergency Contact No.
              </label>
              <input
                type="text"
                id="emergency-contact"
                name="emergency-contact"
                pattern="[0-9]{10}"
                required
                title="Enter a valid 10 digit phone number."
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Emergency Contact No."
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
