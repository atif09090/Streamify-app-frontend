import {
  UsersIcon,
  UserGroupIcon,
  PlayIcon,
  CurrencyDollarIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/outline";
import React from "react";

function DashboardStats({ stats }) {
  const statCards = [
    {
      title: "Total Users",
      value: stats.totalUsers.toLocaleString(),
      icon: UsersIcon,
      color: "bg-blue-500",
      iconBg: "bg-white",
    },
    {
      title: "Active Users",
      value: stats.activeUsers.toLocaleString(),
      icon: UserGroupIcon,
      color: "bg-green-500",
      iconBg: "bg-white",
    },
    {
      title: "Total Streams",
      value: stats.totalStreams.toLocaleString(),
      icon: PlayIcon,
      color: "bg-purple-500",
      iconBg: "bg-white",
    },
    {
      title: "Revenue",
      value: `$${stats.revenue.toLocaleString()}`,
      icon: CurrencyDollarIcon,
      color: "bg-yellow-500",
      iconBg: "bg-white",
    },
    {
      title: "Top Artist",
      value: stats.topArtist,
      icon: MusicalNoteIcon,
      color: "bg-red-500",
      iconBg: "bg-white",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {statCards.map((stat, index) => (
        <div
          key={index}
          className={`${stat.color} text-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300`}
        >
          <div className="flex items-center space-x-4">
            <div className={`p-3 ${stat.iconBg} rounded-full flex-shrink-0`}>
              <stat.icon
                className={`h-7 w-7 ${stat.color.replace("bg-", "text-")}`}
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{stat.title}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardStats;
