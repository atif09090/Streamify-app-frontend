import { useState } from "react";
import DashboardStats from "./components/DashboardStats";
import DataCharts from "./components/DataCharts";
import DataTable from "./components/DataTable";

const mockData = {
  stats: {
    totalUsers: 15234,
    activeUsers: 8456,
    totalStreams: 456789,
    revenue: 234567,
    topArtist: "Ed Sheeran",
  },
  revenueDistribution: [
    { name: "Subscriptions", value: 75 },
    { name: "Advertisements", value: 25 },
  ],
  topSongs: [
    { name: "Shape of You", streams: 45678 },
    { name: "Blinding Lights", streams: 43567 },
    { name: "Stay", streams: 41234 },
    { name: "Heat Waves", streams: 38901 },
    { name: "Bad Habits", streams: 36789 },
  ],
  recentStreams: [
    {
      id: 1,
      songName: "Shape of You",
      artist: "Ed Sheeran",
      dateStreamed: "2024-03-21",
      streamCount: 1456,
      userId: "U123",
    },
    {
      id: 2,
      songName: "Blinding Lights",
      artist: "The Weeknd",
      dateStreamed: "2024-03-20",
      streamCount: 2389,
      userId: "U124",
    },
    {
      id: 3,
      songName: "Stay",
      artist: "Kid Laroi & Justin Bieber",
      dateStreamed: "2024-03-19",
      streamCount: 956,
      userId: "U125",
    },
    {
      id: 4,
      songName: "Anti-Hero",
      artist: "Taylor Swift",
      dateStreamed: "2024-03-21",
      streamCount: 3211,
      userId: "U126",
    },
    {
      id: 5,
      songName: "As It Was",
      artist: "Harry Styles",
      dateStreamed: "2024-03-18",
      streamCount: 1876,
      userId: "U127",
    },
    {
      id: 6,
      songName: "Unholy",
      artist: "Sam Smith",
      dateStreamed: "2024-03-17",
      streamCount: 2543,
      userId: "U128",
    },
    {
      id: 7,
      songName: "Bad Habit",
      artist: "Steve Lacy",
      dateStreamed: "2024-03-20",
      streamCount: 1234,
      userId: "U129",
    },
    {
      id: 8,
      songName: "About Damn Time",
      artist: "Lizzo",
      dateStreamed: "2024-03-16",
      streamCount: 3456,
      userId: "U130",
    },
    {
      id: 9,
      songName: "Heat Waves",
      artist: "Glass Animals",
      dateStreamed: "2024-03-19",
      streamCount: 2789,
      userId: "U131",
    },
    {
      id: 10,
      songName: "Shivers",
      artist: "Ed Sheeran",
      dateStreamed: "2024-03-21",
      streamCount: 1567,
      userId: "U132",
    },
    {
      id: 11,
      songName: "Bad Guy",
      artist: "Billie Eilish",
      dateStreamed: "2024-03-15",
      streamCount: 4321,
      userId: "U133",
    },
    {
      id: 12,
      songName: "Levitating",
      artist: "Dua Lipa",
      dateStreamed: "2024-03-18",
      streamCount: 2987,
      userId: "U134",
    },
    {
      id: 13,
      songName: "Good 4 U",
      artist: "Olivia Rodrigo",
      dateStreamed: "2024-03-17",
      streamCount: 3789,
      userId: "U135",
    },
    {
      id: 14,
      songName: "Enemy",
      artist: "Imagine Dragons",
      dateStreamed: "2024-03-16",
      streamCount: 1890,
      userId: "U136",
    },
    {
      id: 15,
      songName: "Calm Down",
      artist: "Rema & Selena Gomez",
      dateStreamed: "2024-03-20",
      streamCount: 2345,
      userId: "U137",
    },
  ],
};

function App() {
  const [selectedFilter, setSelectedFilter] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Music Streaming Dashboard
          </h1>
          <p className="text-gray-600">
            Overview of platform metrics and performance
          </p>
        </header>

        <div className="grid gap-6">
          <DashboardStats stats={mockData.stats} />

          <DataCharts
            revenueData={mockData.revenueDistribution}
            topSongs={mockData.topSongs}
            setSelectedFilter={setSelectedFilter}
          />

          <DataTable
            data={mockData.recentStreams}
            selectedFilter={selectedFilter}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
