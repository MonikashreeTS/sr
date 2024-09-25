import React from "react";

const page = () => {
  return (
    <div>
      <form action="">
        <div className="p-6 max-w-4xl mx-auto bg-white border-2 shadow-md rounded-md my-10">
          <div className="grid grid-cols-3 gap-6">
            {/* ORC ID */}
            <div className="col-span-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="prefix"
              >
                ORCID
              </label>
              <input
                type="text"
                id="orc-id"
                name="orc-id"
                pattern="[0-9]{12}"
                required
                title="12 digit number"
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="ORCID"
              />
            </div>

            {/* SCOPUS ID */}
            <div className="col-span-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="first-name"
              >
                Scopus ID
              </label>
              <input
                type="text"
                id="scopus-id"
                name="scopus-id"
                pattern="[0-9]{11}"
                required
                title="12 digit number"
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Scopus ID"
              />
            </div>

            {/* Research Area */}
            <div className="col-span-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="first-name"
              >
                Research Area
              </label>
              <input
                type="text"
                id="research-area"
                name="research-area"
                pattern="^[A-Za-z][A-Za-z ]*$"
                required
                title="No numbers or special characters allowed."
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Research Area"
              />
            </div>

            {/* Research Supervisor ID */}
            <div className="col-span-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="first-name"
              >
                Research Supervisor ID
              </label>
              <input
                type="text"
                id="research-supervisor-id"
                name="research-supervisor-id"
                pattern="[0-9]{11}"
                required
                title="12 digit number"
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Research Supervisor ID"
              />
            </div>

            {/* Research Scholars */}
            <div className="col-span-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="first-name"
              >
                Research Scholars
              </label>
              <input
                type="text"
                id="research-scholars"
                name="research-scholars"
                required
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Research Scholars"
              />
            </div>
          </div>
        </div>

        <div className="p-6 max-w-4xl mx-auto bg-white border-2 shadow-md rounded-md my-10">
          <div className="grid grid-cols-3 gap-6">
            {/* Books Published */}
            <div className="col-span-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="designation"
              >
                Books Published
              </label>
              <input
                type="text"
                id="books-published"
                name="books-published"
                required
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Books Published"
              />
            </div>

            {/* Book Chapters Published */}
            <div className="col-span-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="designation"
              >
                Book Chapters Published
              </label>
              <input
                type="text"
                id="book-chapters-published"
                name="book-chapters-published"
                required
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Book Chapters Published"
              />
            </div>

            {/* Journal Publications */}
            <div className="col-span-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="designation"
              >
                Journal Publications
              </label>
              <input
                type="text"
                id="journal-publications"
                name="journal-publications"
                required
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Journal Publications"
              />
            </div>

            {/* H-Index */}
            <div className="col-span-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="designation"
              >
                H-Index
              </label>
              <input
                type="text"
                id="h-index"
                name="h-index"
                required
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="H-Index"
              />
            </div>

            {/* I10 Index */}
            <div className="col-span-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="designation"
              >
                110 Index
              </label>
              <input
                type="text"
                id="i10-index"
                name="i10-index"
                required
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="i10 Index"
              />
            </div>
          </div>
        </div>

        <div className="p-6 max-w-4xl mx-auto bg-white border-2 shadow-md rounded-md my-10">
          <div className="grid grid-cols-3 gap-6">
            {/* Google Scholar ID */}
            <div className="col-span-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="designation"
              >
                Google Scholar ID
              </label>
              <input
                type="text"
                id="google-scholar-id"
                name="google-scholar-id"
                required
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Google Scholar ID"
              />
            </div>

            {/* Total Citations */}
            <div className="col-span-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="designation"
              >
                Total Citations
              </label>
              <input
                type="number"
                id="total-citations"
                name="total-citations"
                required
                min={0}
                max={100000}
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Total Citations"
              />
            </div>

            {/* Publon ID */}
            <div className="col-span-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="designation"
              >
                Publon ID
              </label>
              <input
                type="text"
                id="publon-id"
                name="publon-id"
                required
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Publon ID"
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
