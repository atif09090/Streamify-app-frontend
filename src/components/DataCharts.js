import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function DataCharts({ revenueData, topSongs, setSelectedFilter }) {
  const userGrowthData = [
    { month: "Jan", totalUsers: 10000, activeUsers: 8000 },
    { month: "Feb", totalUsers: 12000, activeUsers: 9500 },
    { month: "Mar", totalUsers: 15000, activeUsers: 11000 },
    { month: "Apr", totalUsers: 17500, activeUsers: 13000 },
    { month: "May", totalUsers: 20000, activeUsers: 15000 },
    { month: "Jun", totalUsers: 22500, activeUsers: 16500 },
    { month: "Jul", totalUsers: 25000, activeUsers: 18000 },
    { month: "Aug", totalUsers: 27500, activeUsers: 20000 },
    { month: "Sep", totalUsers: 30000, activeUsers: 22000 },
    { month: "Oct", totalUsers: 32500, activeUsers: 24000 },
    { month: "Nov", totalUsers: 35000, activeUsers: 26000 },
    { month: "Dec", totalUsers: 37500, activeUsers: 28000 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          📈 User Growth
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={userGrowthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="totalUsers"
              stroke="#3b82f6"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="activeUsers"
              stroke="#10b981"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          💰 Revenue Distribution
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={revenueData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#f59e0b"
              label
              onClick={(data) => setSelectedFilter(data.name)}
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          🎵 Top 5 Streamed Songs
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topSongs}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="streams" fill="#ec4899" barSize={50} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DataCharts;
