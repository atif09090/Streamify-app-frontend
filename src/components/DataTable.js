import { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

function DataTable({ data, selectedFilter }) {
  const [sortConfig, setSortConfig] = useState({ key: 'dateStreamed', direction: 'desc' });
  const [filters, setFilters] = useState({
    artist: '',
    songName: ''
  });

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;
    
    const key = sortConfig.key;
    let aValue = a[key];
    let bValue = b[key];

    // Only sort by date or stream count as per requirements
    if (key === 'streamCount') {
      aValue = Number(aValue);
      bValue = Number(bValue);
    }
    else if (key === 'dateStreamed') {
      aValue = new Date(aValue);
      bValue = new Date(bValue);
    }

    if (aValue < bValue) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const filteredData = sortedData.filter(item => {
    const matchesArtist = item.artist.toLowerCase().includes(filters.artist.toLowerCase());
    const matchesSong = item.songName.toLowerCase().includes(filters.songName.toLowerCase());
    return matchesArtist && matchesSong;
  });

  const requestSort = (key) => {
    // Only allow sorting for date and stream count
    if (key !== 'dateStreamed' && key !== 'streamCount') return;
    
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const columns = [
    { key: 'number', label: '#', sortable: false },
    { key: 'songName', label: 'Song Name', sortable: false },
    { key: 'artist', label: 'Artist', sortable: false },
    { key: 'dateStreamed', label: 'Date Streamed', sortable: true },
    { key: 'streamCount', label: 'Stream Count', sortable: true },
    { key: 'userId', label: 'User ID', sortable: false }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          📊 Recent Streams
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Artist</label>
            <input
              type="text"
              placeholder="Enter artist name..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
              value={filters.artist}
              onChange={(e) => setFilters(prev => ({ ...prev, artist: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Song</label>
            <input
              type="text"
              placeholder="Enter song name..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
              value={filters.songName}
              onChange={(e) => setFilters(prev => ({ ...prev, songName: e.target.value }))}
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                      column.sortable ? 'cursor-pointer hover:text-blue-600' : ''
                    } transition-all`}
                    onClick={() => column.sortable && requestSort(column.key)}
                  >
                    <div className="flex items-center space-x-1">
                      <span>{column.label}</span>
                      {column.sortable && (
                        <span className="inline-flex">
                          {sortConfig.key === column.key ? (
                            sortConfig.direction === "asc" ? (
                              <ChevronUpIcon className="w-4 h-4 text-blue-600" />
                            ) : (
                              <ChevronDownIcon className="w-4 h-4 text-blue-600" />
                            )
                          ) : (
                            <ChevronDownIcon className="w-4 h-4 text-blue-400" />
                          )}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-all">
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.songName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.artist}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.dateStreamed}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.streamCount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.userId}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredData.length === 0 && (
            <div className="text-center py-4 text-gray-500">
              No results found for the current filters
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DataTable; 