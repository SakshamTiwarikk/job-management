import React, { useState } from "react";
import Filters from "./Filters.jsx"; // Make sure path is correct
import a from "../assets/logo/amazon1.png";
import t from "../assets/logo/tesla1.png";
import s from "../assets/logo/swiggy1.png";
import { IoPersonAddOutline } from "react-icons/io5";
import { RiBuildingLine } from "react-icons/ri";
import { FiLayers } from "react-icons/fi";

function JobList() {
  // The "master" list of all jobs
  const allJobs = [
    {
      id: 1,
      logo: a,
      title: "Full Stack Developer",
      exp: "1-3 yr Exp",
      location: "Onsite",
      jobType: "Full-time",
      salary: "12 LPA",
      description: [
        "A user-friendly interface lets you browse stunning photos and videos",
        "Filter destinations based on interests and travel style, and create personalized...",
      ],
      time: "24h Ago",
    },
    {
      id: 2,
      logo: t,
      title: "Node Js Developer",
      exp: "1-3 yr Exp",
      location: "Remote",
      jobType: "Part-time",
      salary: "10 LPA",
      description: [
        "A user-friendly interface lets you browse stunning photos and videos",
        "Filter destinations based on interests and travel style, and create personalized...",
      ],
      time: "24h Ago",
    },
    {
      id: 3,
      logo: s,
      title: "UX/UI Designer",
      exp: "1-3 yr Exp",
      location: "Hybrid",
      jobType: "Internship",
      salary: "8 LPA",
      description: [
        "A user-friendly interface lets you browse stunning photos and videos",
        "Filter destinations based on interests and travel style, and create personalized...",
      ],
      time: "24h Ago",
    },
    {
      id: 3,
      logo: s,
      title: "UX/UI Designer",
      exp: "1-3 yr Exp",
      location: "Hybrid",
      jobType: "Internship",
      salary: "8 LPA",
      description: [
        "A user-friendly interface lets you browse stunning photos and videos",
        "Filter destinations based on interests and travel style, and create personalized...",
      ],
      time: "24h Ago",
    },
    {
      id: 1,
      logo: a,
      title: "Full Stack Developer",
      exp: "1-3 yr Exp",
      location: "Onsite",
      jobType: "Full-time",
      salary: "12 LPA",
      description: [
        "A user-friendly interface lets you browse stunning photos and videos",
        "Filter destinations based on interests and travel style, and create personalized...",
      ],
      time: "24h Ago",
    },
    {
      id: 2,
      logo: t,
      title: "Node Js Developer",
      exp: "1-3 yr Exp",
      location: "Remote",
      jobType: "Part-time",
      salary: "10 LPA",
      description: [
        "A user-friendly interface lets you browse stunning photos and videos",
        "Filter destinations based on interests and travel style, and create personalized...",
      ],
      time: "24h Ago",
    },
    {
      id: 3,
      logo: s,
      title: "UX/UI Designer",
      exp: "1-3 yr Exp",
      location: "Hybrid",
      jobType: "Internship",
      salary: "8 LPA",
      description: [
        "A user-friendly interface lets you browse stunning photos and videos",
        "Filter destinations based on interests and travel style, and create personalized...",
      ],
      time: "24h Ago",
    },
    {
      id: 3,
      logo: s,
      title: "UX/UI Designer",
      exp: "1-3 yr Exp",
      location: "Hybrid",
      jobType: "Internship",
      salary: "8 LPA",
      description: [
        "A user-friendly interface lets you browse stunning photos and videos",
        "Filter destinations based on interests and travel style, and create personalized...",
      ],
      time: "24h Ago",
    },
  
    // Add more if needed ...
  ];

  // We'll store the displayed jobs in state
  const [filteredJobs, setFilteredJobs] = useState(allJobs);

  // Build a unique list of known job titles for suggestions
  const knownTitles = Array.from(new Set(allJobs.map((job) => job.title)));

  // Called when user clicks "Apply Filters" in Filters
  const handleFilterChange = (filters) => {
    console.log("Received filters:", filters);
    const { jobTitle, location, jobType, minLpa, maxLpa } = filters;

    let newJobs = [...allJobs];

    // 1) Filter by jobTitle (case-insensitive substring of job.title)
    if (jobTitle) {
      const lowerSearch = jobTitle.toLowerCase();
      newJobs = newJobs.filter((job) =>
        job.title.toLowerCase().includes(lowerSearch)
      );
    }

    // 2) Filter by location (exact match)
    if (location) {
      newJobs = newJobs.filter(
        (job) => job.location.toLowerCase() === location.toLowerCase()
      );
    }

    // 3) Filter by jobType (exact match)
    if (jobType) {
      newJobs = newJobs.filter(
        (job) => job.jobType.toLowerCase() === jobType.toLowerCase()
      );
    }

    // 4) Filter by LPA range
    if (minLpa || maxLpa) {
      newJobs = newJobs.filter((job) => {
        const numericLpa = parseInt(job.salary.replace(/\D/g, ""), 10) || 0;
        if (numericLpa < minLpa) return false;
        if (numericLpa > maxLpa) return false;
        return true;
      });
    }

    setFilteredJobs(newJobs);
  };

  return (
    <div className="p-4">
      {/* Pass knownTitles to Filters for suggestions */}
      <Filters onFilterChange={handleFilterChange} knownTitles={knownTitles} />

      <div className="px-20 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="relative bg-white rounded-lg shadow p-4 flex flex-col"
            >
              {/* "24h Ago" badge */}
              <span className="absolute top-3 right-3 bg-[#B0D9FF] text-gray-600 text-xs px-2 py-1 rounded">
                {job.time}
              </span>

              {/* Logo */}
              <div className="mb-3">
                <img
                  src={job.logo}
                  alt={`${job.title} Logo`}
                  className="w-14 h-14 object-contain rounded-full"
                />
              </div>

              {/* Title */}
              <h2 className="text-lg font-semibold text-gray-800">
                {job.title}
              </h2>

              {/* Info row */}
              <div className="mt-1 text-sm text-gray-500 flex flex-col space-y-1">
                <div className="flex items-center space-x-1">
                  <IoPersonAddOutline className="text-base" />
                  <span>{job.exp}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <RiBuildingLine className="text-base" />
                  <span>{job.location}</span>
                </div>
                {/* Show job type explicitly */}
                <div className="flex items-center space-x-1">
                  <FiLayers className="text-base" />
                  <span>{job.jobType}</span>
                </div>
                {/* Salary */}
                <div className="flex items-center space-x-1">
                  <span className="font-semibold">Salary:</span>
                  <span>{job.salary}</span>
                </div>
              </div>

              {/* Description */}
              <ul className="mt-3 mb-4 flex-1 text-sm text-gray-600 space-y-1 list-disc ml-5">
                {job.description.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>

              {/* Apply Button */}
              <button className="bg-[#00AAFF] text-white px-4 py-2 rounded hover:bg-blue-600">
                Apply Now
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No jobs found for the current filters.</p>
        )}
      </div>
    </div>
  );
}

export default JobList;
