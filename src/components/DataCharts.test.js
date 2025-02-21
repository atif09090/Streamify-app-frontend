import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DataCharts from "./DataCharts";

jest.mock("recharts", () => ({
  ResponsiveContainer: ({ children }) => <div>{children}</div>,
  LineChart: ({ children }) => <div data-testid="line-chart">{children}</div>,
  CartesianGrid: () => <div data-testid="cartesian-grid" />,
  XAxis: () => <div data-testid="x-axis" />,
  YAxis: () => <div data-testid="y-axis" />,
  Tooltip: () => <div data-testid="tooltip" />,
  Legend: () => <div data-testid="legend" />,
  Line: () => <div data-testid="line" />,
  PieChart: ({ children }) => <div data-testid="pie-chart">{children}</div>,
  Pie: ({ onClick }) => (
    <div
      data-testid="pie-slice"
      onClick={() => onClick({ name: "Subscription" })}
    >
      Pie Slice
    </div>
  ),
  BarChart: ({ children }) => <div data-testid="bar-chart">{children}</div>,
  Bar: () => <div data-testid="bar" />,
}));

// 🛠 Mock Data
const mockRevenueData = [
  { name: "Subscription", value: 4000 },
  { name: "Ad Revenue", value: 3000 },
];

const mockTopSongs = [
  { name: "Song A", streams: 500 },
  { name: "Song B", streams: 700 },
];

const mockSetSelectedFilter = jest.fn();

describe("DataCharts Component", () => {
  beforeEach(() => {
    render(
      <DataCharts
        revenueData={mockRevenueData}
        topSongs={mockTopSongs}
        setSelectedFilter={mockSetSelectedFilter}
      />
    );
  });

  it("renders the User Growth chart title", () => {
    expect(screen.getByText(/User Growth/i)).toBeInTheDocument();
  });

  it("renders the Revenue Distribution chart title", () => {
    expect(screen.getByText(/Revenue Distribution/i)).toBeInTheDocument();
  });

  it("renders the Top 5 Streamed Songs chart title", () => {
    expect(screen.getByText(/Top 5 Streamed Songs/i)).toBeInTheDocument();
  });

  it("renders the charts correctly", () => {
    expect(screen.getByTestId("line-chart")).toBeInTheDocument();
    expect(screen.getByTestId("pie-chart")).toBeInTheDocument();
    expect(screen.getByTestId("bar-chart")).toBeInTheDocument();
  });

  it("handles revenue chart click events", () => {
    fireEvent.click(screen.getByTestId("pie-slice"));
    expect(mockSetSelectedFilter).toHaveBeenCalledWith("Subscription");
  });
});
