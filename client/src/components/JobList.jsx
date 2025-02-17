import React from "react";
import a from "../assets/logo/amazon1.png";
import t from "../assets/logo/tesla1.png";
import s from "../assets/logo/swiggy1.png";
import { IoPersonAddOutline } from "react-icons/io5";
import { RiBuildingLine } from "react-icons/ri";
import { FiLayers } from "react-icons/fi";

function JobList() {
  const jobs = [
    {
      id: 1,
      logo: a,
      title: "Full Stack Developer",
      exp: "1-3 yr Exp",
      onsite: "Onsite",
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
      onsite: "Onsite",
      salary: "12 LPA",
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
      onsite: "Onsite",
      salary: "12 LPA",
      description: [
        "A user-friendly interface lets you browse stunning photos and videos",
        "Filter destinations based on interests and travel style, and create personalized...",
      ],
      time: "24h Ago",
    },
    {
      id: 4,
      logo: a,
      title: "Full Stack Developer",
      exp: "1-3 yr Exp",
      onsite: "Onsite",
      salary: "12 LPA",
      description: [
        "A user-friendly interface lets you browse stunning photos and videos",
        "Filter destinations based on interests and travel style, and create personalized...",
      ],
      time: "24h Ago",
    },
    {
      id: 5,
      logo: t,
      title: "Node Js Developer",
      exp: "1-3 yr Exp",
      onsite: "Onsite",
      salary: "12 LPA",
      description: [
        "A user-friendly interface lets you browse stunning photos and videos",
        "Filter destinations based on interests and travel style, and create personalized...",
      ],
      time: "24h Ago",
    },
    {
      id: 6,
      logo: s,
      title: "UX/UI Designer",
      exp: "1-3 yr Exp",
      onsite: "Onsite",
      salary: "12 LPA",
      description: [
        "A user-friendly interface lets you browse stunning photos and videos",
        "Filter destinations based on interests and travel style, and create personalized...",
      ],
      time: "24h Ago",
    },
    {
      id: 7,
      logo: a,
      title: "Full Stack Developer",
      exp: "1-3 yr Exp",
      onsite: "Onsite",
      salary: "12 LPA",
      description: [
        "A user-friendly interface lets you browse stunning photos and videos",
        "Filter destinations based on interests and travel style, and create personalized...",
      ],
      time: "24h Ago",
    },
    {
      id: 8,
      logo: t,
      title: "Node Js Developer",
      exp: "1-3 yr Exp",
      onsite: "Onsite",
      salary: "12 LPA",
      description: [
        "A user-friendly interface lets you browse stunning photos and videos",
        "Filter destinations based on interests and travel style, and create personalized...",
      ],
      time: "24h Ago",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {jobs.map((job) => (
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
          <h2 className="text-lg font-semibold text-gray-800">{job.title}</h2>

          {/* Info row (experience, onsite, salary) */}
          <div className="mt-1 text-sm text-gray-500 flex items-center space-x-4">
            {/* Experience */}
            <div className="flex items-center space-x-1">
              <IoPersonAddOutline className="text-base" />
              <span>{job.exp}</span>
            </div>

            {/* Onsite */}
            <div className="flex items-center space-x-1">
              <RiBuildingLine className="text-base" />
              <span>{job.onsite}</span>
            </div>

            {/* Salary */}
            <div className="flex items-center space-x-1">
              <FiLayers className="text-base" />
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
      ))}
    </div>
  );
}

export default JobList;
