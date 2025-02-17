import React from "react";
import { useForm } from "react-hook-form";
import { FiMapPin } from "react-icons/fi";
// Optional: If you want to send data to your API
// import api from "../services/api";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { BiSortAlt2 } from "react-icons/bi";

function JobCreate({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Example submit handler
  const onSubmit = async (data) => {
    try {
      // await api.post("/jobs", data);
      alert("Job created successfully!");
      if (onClose) onClose();
    } catch (error) {
      console.error("Error creating job:", error);
    }
  };

  return (
    // Overlay
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal container */}
      <div className="bg-white rounded-md shadow-lg w-full max-w-3xl p-6 relative">
        {/* Title */}
        <h2 className="text-center text-xl font-semibold mb-6">
          Create Job Opening
        </h2>

        {/* Close (X) button, optional */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Grid: 2 columns for the first rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Job Title */}
            <div>
              <label className="block font-medium mb-1">Job Title</label>
              <input
                {...register("jobTitle", { required: "Job title is required" })}
                placeholder="e.g. Full Stack Developer"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {errors.jobTitle && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.jobTitle.message}
                </p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label className="block font-medium mb-1">Company Name</label>
              <input
                {...register("companyName", {
                  required: "Company name is required",
                })}
                placeholder="Amazon, Microsoft, Swiggy"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {errors.companyName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.companyName.message}
                </p>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="block font-medium mb-1">Location</label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-2 focus-within:ring-1 focus-within:ring-blue-500">
                {/* Location Icon */}
                <FiMapPin className="text-gray-400 mr-2" />

                {/* Dropdown */}
                <select
                  {...register("location", {
                    required: "Location is required",
                  })}
                  className="bg-transparent w-full focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a State/UT
                  </option>
                  {/* Indian States */}
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>

                  {/* Union Territories */}
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Dadra and Nagar Haveli and Daman and Diu">
                    Dadra & Nagar Haveli and Daman & Diu
                  </option>
                  <option value="Delhi">Delhi</option>
                  <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                  <option value="Ladakh">Ladakh</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                </select>
              </div>

              {/* Error Message */}
              {errors.location && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.location.message}
                </p>
              )}
            </div>

            {/* Job Type */}
            <div>
              <label className="block font-medium mb-1 mt-2 md:mt-0">
                Job Type
              </label>

              <select
                {...register("jobType", { required: "Job type is required" })}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Select</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
              {errors.jobType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.jobType.message}
                </p>
              )}
            </div>

            {/* Salary Range (with up/down arrow) */}
            <div>
  <label className="block font-medium mb-1 mt-2 md:mt-0">Salary Range</label>
  {/* Two columns: one for min, one for max */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
    {/* Min Salary Field */}
    <div className="flex items-center border border-gray-300 rounded px-3 py-2 focus-within:ring-1 focus-within:ring-blue-500">
      <BiSortAlt2 className="text-gray-400 mr-2" />
      <input
        type="number"
        {...register("salaryMin", {
          required: "Minimum salary is required",
          min: {
            value: 100000,
            message: "Minimum salary must be at least ₹1,00,000",
          },          
        })}
        placeholder="₹1,00,000"
        className="bg-transparent w-full focus:outline-none"
      />
    </div>

    {/* Max Salary Field */}
    <div className="flex items-center border border-gray-300 rounded px-3 py-2 focus-within:ring-1 focus-within:ring-blue-500">
      <BiSortAlt2 className="text-gray-400 mr-2" />
      <input
        type="number"
        {...register("salaryMax", {
          required: "Maximum salary is required",
        })}
        placeholder="₹6,00,000"
        className="bg-transparent w-full focus:outline-none"
      />
    </div>
  </div>

  {/* Error handling for either field */}
  {(errors.salaryMin || errors.salaryMax) && (
    <p className="text-red-500 text-sm mt-1">
      {errors.salaryMin?.message || errors.salaryMax?.message}
    </p>
  )}
</div>

            {/* Application Deadline */}
            <div>
              <label className="block font-medium mb-1 mt-2 md:mt-0">
                Application Deadline
              </label>
              <input
                type="date"
                {...register("applicationDeadline")}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Job Description (full width) */}
          <div className="mt-4">
            <label className="block font-medium mb-1">Job Description</label>
            <textarea
              {...register("jobDescription")}
              placeholder="Please share a description to let the candidate know more about the job role"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              rows={3}
            />
          </div>

          {/* Bottom Buttons */}
          <div className="flex items-center justify-between mt-6">
            {/* Save Draft (type="button") */}
            <button
              type="button"
              onClick={onClose}
              className=" flex items-center space-x-1 gap-1 border border-gray-300 text-gray-700 px-3 py-2 rounded hover:bg-gray-100"
            >
              Save Draft
              <MdKeyboardDoubleArrowDown className="text-base"/>
            </button>

            {/* Publish (submits the form) */}
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobCreate;
