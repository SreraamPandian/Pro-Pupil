import React from 'react';
import { ChevronRight, ChevronLeft, ArrowUpDown } from 'lucide-react';

const mockData = [
  { staff: "Huned Bohari", block: "HCT 1st Floor", room: "ADA03ALB0180", course: "MEC-101", from: "09:30 AM", to: "09:45 AM", created: "14-04-2026 12:01 PM" },
  { staff: "Mutaz Ayed", block: "HCT 1st Floor", room: "ADA03ALB0180", course: "MCT-100", from: "09:50 AM", to: "10:05 AM", created: "14-04-2026 12:08 AM" },
  { staff: "Adnan Saeed", block: "Ground Floor Switch", room: "Aptitude Lab", course: "EGN-1003", from: "11:05 AM", to: "11:20 AM", created: "14-04-2026 12:01 PM" },
  { staff: "Janar Jeksen", block: "HCT 1st Floor", room: "ADA03ALB0180", course: "MCT-101", from: "11:05 AM", to: "11:20 AM", created: "14-04-2026 12:01 PM" },
  { staff: "Samantha Stephen", block: "HCT 1st Floor", room: "ADA03ALB0180", course: "MEC-101", from: "11:20 AM", to: "11:40 AM", created: "14-04-2026 12:01 PM" },
];

const TimetableTable = () => {
  return (
    <div className="bg-white rounded-sm border border-gray-200 overflow-hidden shadow-sm">
      <div className="bg-[#5a717a] text-white px-4 py-3 flex items-center justify-between">
        <h3 className="text-lg font-medium">Today's Timetable Details</h3>
      </div>
      
      <div className="p-4">
        {/* Controls */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            Show 
            <select className="border border-gray-300 rounded px-2 py-1 bg-white outline-none">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            entries
          </div>
          <div className="flex items-center gap-2 text-sm">
            {/* Search could go here */}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-100">
                <th className="px-4 py-3 font-semibold text-gray-700">
                  <div className="flex items-center gap-2">Staff <ArrowUpDown size={12} className="text-gray-300" /></div>
                </th>
                <th className="px-4 py-3 font-semibold text-gray-700">
                  <div className="flex items-center gap-2">Block <ArrowUpDown size={12} className="text-gray-300" /></div>
                </th>
                <th className="px-4 py-3 font-semibold text-gray-700">
                  <div className="flex items-center gap-2">Class Room <ArrowUpDown size={12} className="text-gray-300" /></div>
                </th>
                <th className="px-4 py-3 font-semibold text-gray-700">
                  <div className="flex items-center gap-2">Course <ArrowUpDown size={12} className="text-gray-300" /></div>
                </th>
                <th className="px-4 py-3 font-semibold text-gray-700">
                  <div className="flex items-center gap-2">From Time <ArrowUpDown size={12} className="text-gray-300" /></div>
                </th>
                <th className="px-4 py-3 font-semibold text-gray-700">
                  <div className="flex items-center gap-2">To Time <ArrowUpDown size={12} className="text-gray-300" /></div>
                </th>
                <th className="px-4 py-3 font-semibold text-gray-700">
                  <div className="flex items-center gap-2">Created At <ArrowUpDown size={12} className="text-gray-300" /></div>
                </th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((row, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-blue-600 font-medium">{row.staff}</td>
                  <td className="px-4 py-3 text-gray-600">{row.block}</td>
                  <td className="px-4 py-3 text-gray-600">{row.room}</td>
                  <td className="px-4 py-3 text-gray-600">{row.course}</td>
                  <td className="px-4 py-3 text-gray-600 font-medium">{row.from}</td>
                  <td className="px-4 py-3 text-gray-600 font-medium">{row.to}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{row.created}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-600">Showing 1 to 5 of 5 entries</div>
          <div className="flex gap-0 border border-gray-200 rounded">
            <button className="px-3 py-1 text-sm text-gray-400 border-r border-gray-200 hover:bg-gray-50">Previous</button>
            <button className="px-3 py-1 text-sm bg-propupil-blue text-white font-bold">1</button>
            <button className="px-3 py-1 text-sm text-gray-400 hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimetableTable;
