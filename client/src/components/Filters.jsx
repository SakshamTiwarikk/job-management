import React, { useState } from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { RiSpeakLine } from "react-icons/ri";
function Filters() {
  // Local state to track the two-handle slider values (salary range)
  const [salaryRange, setSalaryRange] = useState([50000, 80000]);

  return (
    <div className="bg-white shadow-[#C6BFBF40]  p-3 px-9 py-4 flex items-center justify-between  space-x-4">
      {/* Search Field */}
      <div className="flex items-center  space-x-2">
        <FiSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search By Job Title, Role"
          className="focus:outline-none bg-transparent"
        />
      </div>

      {/* Divider */}
      <span className="w-px h-6 bg-gray-200" />

      {/* Preferred Location */}
      <div className="flex items-center space-x-2">
        <FiMapPin className="text-gray-500" />
        <select className="focus:outline-none bg-transparent">
          <option>Preferred Location</option>
          <option>Remote</option>
          <option>Onsite</option>
          <option>Hybrid</option>
        </select>
      </div>

      {/* Divider */}
      <span className="w-px h-6 bg-gray-200" />

      {/* Job Type */}
      <div className="flex items-center space-x-2">
        <RiSpeakLine className="text-gray-500" />
        <select className="focus:outline-none bg-transparent">
          <option>Job type</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Contract</option>
          <option>Internship</option>
        </select>
      </div>

      {/* Divider */}
      <span className="w-px h-6 bg-gray-200" />

      {/* Salary Slider */}
      <div className="flex flex-col space-y-2">
  {/* Top Row: Label (left) and Range (right) */}
  <div className="flex items-center justify-between gap-4">
    <span className="text-gray-600">Salary Per Month</span>
    <span className="text-gray-600">
      ₹{(salaryRange[0] / 1000).toFixed(0)}k - ₹{(salaryRange[1] / 1000).toFixed(0)}k
    </span>
  </div>

  {/* Bottom Row: Slider */}
  <div className="w-60">
    <Slider
      range
      min={50000}
      max={80000}
      step={1000}
      value={salaryRange}
      onChange={(value) => setSalaryRange(value)}
      styles={{
        track: { backgroundColor: "black" },
        handle: { borderColor: "black" },
        rail: { backgroundColor: "#ccc" },
      }}
    />
  </div>
</div>

    </div>
  );
}

export default Filters;
