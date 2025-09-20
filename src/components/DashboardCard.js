import React from 'react';

const DashboardCard = ({ title, value, icon, color = "bg-white", textColor = "text-gray-800" }) => {
  return (
    <div className={`rounded-xl p-5 shadow-md flex items-center gap-4 ${color}`}>
      <div className={`text-3xl ${textColor}`}>
        {icon}
      </div>
      <div>
        <div className={`text-sm font-medium text-gray-500`}>{title}</div>
        <div className={`text-xl font-bold ${textColor}`}>{value}</div>
      </div>
    </div>
  );
};

export default DashboardCard;
