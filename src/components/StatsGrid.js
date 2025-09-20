import React from 'react';
import DashboardCard from './DashboardCard';
import { CashIcon, UserGroupIcon, ShoppingCartIcon, CheckCircleIcon } from '@heroicons/react/outline';

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <DashboardCard
        title="Total Revenue"
        value="$21,500"
        icon={<CashIcon className="w-8 h-8" />}
        color="bg-blue-50"
        textColor="text-blue-700"
      />
      <DashboardCard
        title="Orders Today"
        value="384"
        icon={<ShoppingCartIcon className="w-8 h-8" />}
        color="bg-green-50"
        textColor="text-green-700"
      />
      <DashboardCard
        title="Active Users"
        value="1,202"
        icon={<UserGroupIcon className="w-8 h-8" />}
        color="bg-yellow-50"
        textColor="text-yellow-700"
      />
      <DashboardCard
        title="Success Rate"
        value="98.6%"
        icon={<CheckCircleIcon className="w-8 h-8" />}
        color="bg-purple-50"
        textColor="text-purple-700"
      />
    </div>
  );
};

export default StatsGrid;
