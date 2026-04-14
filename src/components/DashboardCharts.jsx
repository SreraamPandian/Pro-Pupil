import React from 'react';
import { 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, PieChart, Pie, Cell, Legend
} from 'recharts';

const data = [
  { name: 'Jan', students: 400, attendance: 240 },
  { name: 'Feb', students: 300, attendance: 139 },
  { name: 'Mar', students: 200, attendance: 980 },
  { name: 'Apr', students: 278, attendance: 390 },
  { name: 'May', students: 189, attendance: 480 },
  { name: 'Jun', students: 239, attendance: 380 },
  { name: 'Jul', students: 349, attendance: 430 },
];

const genderData = [
  { name: 'Male', value: 215 },
  { name: 'Female', value: 185 },
];

const COLORS = ['#3b82f6', '#ec4899'];

const DashboardCharts = ({ type }) => {
  if (type === 'area') {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
              <stop offset="50%" stopColor="#3b82f6" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: '700'}} dy={10} />
          <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: '700'}} dx={-10} />
          <Tooltip 
            contentStyle={{backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(8px)', borderRadius: '16px', border: '1px solid #f1f5f9', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)'}}
            itemStyle={{fontWeight: '900', color: '#1e293b', fontSize: '12px'}}
            cursor={{ stroke: '#cbd5e1', strokeWidth: 1 }}
          />
          <Area type="monotone" dataKey="students" stroke="#3b82f6" strokeWidth={4} fillOpacity={1} fill="url(#colorStudents)" animationDuration={2000} />
        </AreaChart>
      </ResponsiveContainer>
    );
  }

  if (type === 'pie') {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={genderData}
            innerRadius={80}
            outerRadius={110}
            paddingAngle={8}
            dataKey="value"
            stroke="none"
          >
            {genderData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
             contentStyle={{backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(8px)', borderRadius: '12px', border: '1px solid #f1f5f9'}}
             itemStyle={{fontWeight: '900', fontSize: '12px'}}
          />
          <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{fontWeight: '800', fontSize: '11px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px'}} />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  return null;
};

export default DashboardCharts;
