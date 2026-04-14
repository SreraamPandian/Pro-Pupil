import React from 'react';
import { Building2, User, UserCircle } from 'lucide-react';

const StatCard = ({ title, count, subtitle, bgColor, icon: Icon }) => {
  return (
    <div className={`p-5 rounded shadow-sm text-white flex justify-between items-center ${bgColor}`}>
      <div>
        <div className="text-4xl font-bold mb-1">{count}</div>
        <div className="text-xs uppercase font-semibold tracking-wider opacity-90">{subtitle}</div>
      </div>
      <div className="opacity-20">
        <Icon size={70} strokeWidth={1} />
      </div>
    </div>
  );
};

export default StatCard;
