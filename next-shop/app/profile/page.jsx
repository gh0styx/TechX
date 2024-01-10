import React from "react";

const page = () => {
  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="w-[300px] h-[300px] bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center">
        {/* Profile Photo and Name */}
        <div className="mb-6">
          <img
            src="https://placekitten.com/200/200" // Replace with the actual photo URL
            alt="Profile"
            className="w-32 h-32 rounded-full"
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl text-black font-semibold">John Doe</h2>
        </div>
      </div>

      <div className="w-[500px] h-[300px] bg-white p-8 rounded-lg shadow-md ml-10">
        {/* Other User Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Me</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Other information goes here */}
          <div className="mt-4">
            <p className="text-gray-700">
              <strong>Email:</strong> john.doe@example.com
            </p>
            <p className="text-gray-700">
              <strong>Location:</strong> City, Country
            </p>
            {/* Add more fields as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
