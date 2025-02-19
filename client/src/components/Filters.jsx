import React, { useState } from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { RiSpeakLine } from "react-icons/ri";

/**
 * props:
 *   onFilterChange: (filters) => void
 *   knownTitles: string[] - an array of possible job titles for suggestions
 */
function Filters({ onFilterChange, knownTitles }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]); // for job title suggestions
  const [preferredLocation, setPreferredLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [lpaRange, setLpaRange] = useState([5, 15]); // LPA slider

  // Called when user clicks "Apply Filters"
  const applyFilters = () => {
    const filters = {
      jobTitle: searchTerm,
      location: preferredLocation,
      jobType: jobType,
      minLpa: lpaRange[0],
      maxLpa: lpaRange[1],
    };
  
    if (onFilterChange) {
      onFilterChange(filters);
    }
  
    // Hide suggestions and clear the input
    setSuggestions([]);
    setSearchTerm("");
  };
  

  // Handle user typing in the search field
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Generate suggestions (case-insensitive partial match)
    if (!value) {
      setSuggestions([]);
      return;
    }
    const lowerValue = value.toLowerCase();
    const matched = knownTitles.filter((title) =>
      title.toLowerCase().includes(lowerValue)
    );
    setSuggestions(matched.slice(0, 5)); // limit to top 5 suggestions
  };

  // Called when user clicks a suggestion
  const selectSuggestion = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="bg-white shadow p-3 px-9 py-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 relative">
      {/* Search Field */}
      <div className="flex flex-col relative">
        <div className="flex items-center space-x-2">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search By Job Title, Role"
            className="focus:outline-none bg-transparent"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {/* Suggestions Dropdown */}
        {suggestions.length > 0 && (
          <div className="absolute top-10 left-6 bg-white border border-gray-200 rounded shadow-md w-52 z-10">
            {suggestions.map((sugg) => (
              <div
                key={sugg}
                onClick={() => selectSuggestion(sugg)}
                className="px-3 py-1 cursor-pointer hover:bg-gray-100"
              >
                {sugg}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Preferred Location */}
      <div className="flex items-center space-x-2">
        <FiMapPin className="text-gray-500" />
        <select
          className="focus:outline-none bg-transparent"
          value={preferredLocation}
          onChange={(e) => setPreferredLocation(e.target.value)}
        >
          <option value="">Preferred Location</option>
          <option value="Remote">Remote</option>
          <option value="Onsite">Onsite</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      {/* Job Type */}
      <div className="flex items-center space-x-2">
        <RiSpeakLine className="text-gray-500" />
        <select
          className="focus:outline-none bg-transparent"
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
        >
          <option value="">Job type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>
      </div>

      {/* LPA Slider */}
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between gap-4">
          <span className="text-gray-600">Salary (LPA)</span>
          <span className="text-gray-600">
            {lpaRange[0]} LPA - {lpaRange[1]} LPA
          </span>
        </div>
        <div className="w-60">
          <Slider
            range
            min={5}
            max={20}
            step={1}
            value={lpaRange}
            onChange={(value) => setLpaRange(value)}
            trackStyle={{ backgroundColor: "black" }}
            handleStyle={{ borderColor: "black" }}
            railStyle={{ backgroundColor: "#ccc" }}
          />
        </div>
      </div>

      {/* Apply Filters Button */}
      <div>
        <button
          onClick={applyFilters}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}

export default Filters;
