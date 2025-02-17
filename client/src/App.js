import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import JobList from "./components/JobList";
import JobCreate from "./pages/JobCreate.jsx";

function App() {
  // State to control whether the modal is visible
  const [showModal, setShowModal] = useState(false);

  // Handler to open the modal
  const handleOpenModal = () => setShowModal(true);
  // Handler to close the modal
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Pass a prop to Navbar so it can open the modal */}
      <Navbar onCreateJob={handleOpenModal} />

      <div className="container mx-auto px-4 py-6">
        <Filters />

        {/* Spacing between filters and the card grid */}
        <div className="mt-6">
          <JobList />
        </div>
      </div>

      {/* Conditionally render the modal */}
      {showModal && (
        <JobCreate onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
