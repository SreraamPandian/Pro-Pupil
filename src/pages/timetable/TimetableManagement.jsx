import React, { useState } from 'react';
import { Calendar, Clock, Plus, Filter, Search, Edit2, Trash2, Save } from 'lucide-react';

const TimetableManagement = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  const timeSlots = [
    '08:00 AM - 09:00 AM',
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '01:00 PM - 02:00 PM',
    '02:00 PM - 03:00 PM',
  ];

  const initialSchedule = {
    '08:00 AM - 09:00 AM': { subject: 'DSP', faculty: 'Dr. Ahmed', room: 'L-101' },
    '09:00 AM - 10:00 AM': { subject: 'AI', faculty: 'Dr. Fatma', room: 'L-102' },
    '10:00 AM - 11:00 AM': { subject: 'Break', isBreak: true },
    '11:00 AM - 12:00 PM': { subject: 'Cloud Comp', faculty: 'Prof. Zayed', room: 'L-201' },
  };

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-indigo-700">
            Timetable Planning Engine
          </h1>
          <p className="text-gray-500 mt-1">Design, edit and publish weekly schedules for all courses and semesters.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all font-medium shadow-sm">
            <Edit2 size={18} />
            Bulk Edit
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-medium shadow-lg shadow-blue-200">
            <Save size={18} />
            Publish Schedule
          </button>
        </div>
      </div>

      {/* Global Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white shadow-sm">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Department</label>
          <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none font-medium">
            <option>Computer Science</option>
            <option>Electronics</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Course</label>
          <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none font-medium">
            <option>B.Tech CSE</option>
            <option>B.Tech ECE</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Semester</label>
          <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none font-medium">
            <option>Semester 6</option>
            <option>Semester 4</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Academic Year</label>
          <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none font-medium">
            <option>2024 - 2025</option>
          </select>
        </div>
      </div>

      {/* Day Selector */}
      <div className="flex flex-wrap gap-2">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-6 py-2.5 rounded-xl font-medium transition-all ${
              selectedDay === day 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 translate-y-[-2px]' 
                : 'bg-white text-gray-600 border border-gray-100 hover:bg-gray-50'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Timetable Grid */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-[1fr,2fr,2fr,1fr,1.5fr] bg-gray-50 border-b border-gray-100">
          <div className="p-4 text-xs font-bold text-gray-400 uppercase">Time Slot</div>
          <div className="p-4 text-xs font-bold text-gray-400 uppercase">Subject</div>
          <div className="p-4 text-xs font-bold text-gray-400 uppercase">Faculty</div>
          <div className="p-4 text-xs font-bold text-gray-400 uppercase">Room / Lab</div>
          <div className="p-4 text-xs font-bold text-gray-400 uppercase text-right">Actions</div>
        </div>
        
        <div className="divide-y divide-gray-50">
          {timeSlots.map((slot, idx) => {
            const entry = initialSchedule[slot];
            return (
              <div key={idx} className={`grid grid-cols-[1fr,2fr,2fr,1fr,1.5fr] items-center hover:bg-gray-50/50 transition-colors ${entry?.isBreak ? 'bg-amber-50/40' : ''}`}>
                <div className="p-5 font-semibold text-gray-600 flex items-center gap-2">
                  <Clock size={16} className="text-gray-400" />
                  {slot}
                </div>
                <div className="p-5">
                  {entry ? (
                    <span className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${entry.isBreak ? 'bg-amber-100 text-amber-700' : 'bg-blue-50 text-blue-700'}`}>
                      {entry.subject}
                    </span>
                  ) : (
                    <span className="text-gray-300 italic text-sm">-- Empty --</span>
                  )}
                </div>
                <div className="p-5 text-gray-600 font-medium">
                  {entry?.faculty || (entry?.isBreak ? '-' : '--')}
                </div>
                <div className="p-5 text-gray-500">
                  {entry?.room || (entry?.isBreak ? '-' : '--')}
                </div>
                <div className="p-5 flex items-center justify-end gap-2 text-right">
                  {!entry ? (
                    <button className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all flex items-center gap-1 font-medium text-sm">
                      <Plus size={16} /> Assign
                    </button>
                  ) : (
                    <>
                      <button className="text-gray-400 hover:text-indigo-600 p-2 rounded-lg hover:bg-indigo-50 transition-all">
                        <Edit2 size={16} />
                      </button>
                      <button className="text-gray-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-all">
                        <Trash2 size={16} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimetableManagement;
