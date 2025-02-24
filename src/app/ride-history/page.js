"use client";
import React, { useState } from "react";
import Header from "../../components/Header";

const RideHistory = () => {
  const rides = [
    { id: "1082605202208091", customer: "Raj Patel", driver: "Teat", vehicle: "SUV", cost: "$569.68", status: "completed" },
    { id: "5282105202208099", customer: "User Prashant", driver: "Driver Prashant", vehicle: "SUV", cost: "$458.35", status: "completed" },
    { id: "708205202208094", customer: "Raj Patel", driver: "Teat", vehicle: "SUV", cost: "$569.68", status: "completed" },
    { id: "5164809202207098", customer: "Jfdji", driver: "Teat", vehicle: "SUV", cost: "$137.5", status: "completed" },
    { id: "6074101202207097", customer: "User Prashant", driver: "Driver Prashant", vehicle: "SUV", cost: "$458.35", status: "completed" },
    { id: "1082605202208096", customer: "Arjun Singh", driver: "Ravi Kumar", vehicle: "Sedan", cost: "$320.80", status: "completed" },
    { id: "5282105202208097", customer: "Anita Desai", driver: "Mukesh Verma", vehicle: "Hatchback", cost: "$210.40", status: "completed" },
    { id: "708205202208098", customer: "Priya Sharma", driver: "Alok Mishra", vehicle: "Sedan", cost: "$410.20", status: "completed" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const ridesPerPage = 5;

  const totalPages = Math.ceil(rides.length / ridesPerPage);
  const indexOfLastRide = currentPage * ridesPerPage;
  const indexOfFirstRide = indexOfLastRide - ridesPerPage;
  const currentRides = rides.slice(indexOfFirstRide, indexOfLastRide);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-200 to-gray-100">
      <Header />

      <div className="flex flex-1">
        {/* Sidebar (Collapsible on Mobile) */}
        <aside className="w-64 bg-gray-900 text-white min-h-screen p-4 hidden md:block">
          <nav>
            <ul>
              <li className="mb-4"><a href="#" className="block px-2 py-2 hover:bg-gray-700">Dashboard</a></li>
              <li className="mb-4"><a href="#" className="block px-2 py-2 hover:bg-gray-700">Customers</a></li>
              <li className="mb-4"><a href="#" className="block px-2 py-2 hover:bg-gray-700">Drivers</a></li>
              <li className="mb-4"><a href="#" className="block px-2 py-2 hover:bg-gray-700">Ride List</a></li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h2 className="text-xl font-semibold mb-4">All Ride List</h2>

          {/* Table Container with Scroll */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2 text-left">No</th>
                    <th className="px-4 py-2 text-left">Ride No.</th>
                    <th className="px-4 py-2 text-left">Customer</th>
                    <th className="px-4 py-2 text-left">Driver</th>
                    <th className="px-4 py-2 text-left">Vehicle</th>
                    <th className="px-4 py-2 text-left">Cost</th>
                    <th className="px-4 py-2 text-left">Status</th>
                    <th className="px-4 py-2 text-left">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {currentRides.map((ride, index) => (
                    <tr key={ride.id} className="border-t">
                      <td className="px-4 py-2">{indexOfFirstRide + index + 1}</td>
                      <td className="px-4 py-2">{ride.id}</td>
                      <td className="px-4 py-2">{ride.customer}</td>
                      <td className="px-4 py-2">{ride.driver}</td>
                      <td className="px-4 py-2">{ride.vehicle}</td>
                      <td className="px-4 py-2">{ride.cost}</td>
                      <td className="px-4 py-2">
                        <span className="bg-green-500 text-white px-2 py-1 rounded">{ride.status}</span>
                      </td>
                      <td className="px-4 py-2">
                        <button className="bg-blue-500 text-white px-2 py-1 rounded">Info</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-2 md:space-y-0">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"}`}
              >
                Previous
              </button>
              <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-300" : "bg-blue-500 text-white"}`}
              >
                Next
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RideHistory;
