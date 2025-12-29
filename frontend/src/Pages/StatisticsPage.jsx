import { Card, CardBody } from "@heroui/react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell,
} from "recharts";
import { categoryData, dailyData, monthlyData, statusData, weeklyData } from "../assets/SampleInformation";

export default function StatisticsPage() {
  const PIE_COLORS = ["#0b1f36", "#BBA782", "#9CA3AF", "#6B7280"];
  return (
    <div className="px-4 py-10 max-w-7xl mx-auto space-y-12">

      {/* HEADER */}
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-2">
          Newsletter Insights
        </h1>
        <p className="text-gray-500">
          Publishing activity & engagement overview
        </p>
      </div>

      {/* CARDS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardBody>
            <p className="text-sm text-gray-500">Total Articles</p>
            <p className="text-3xl font-semibold">53</p>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <p className="text-sm text-gray-500">Avg / Month</p>
            <p className="text-3xl font-semibold">8.8</p>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <p className="text-sm text-gray-500">Most Active Month</p>
            <p className="text-xl font-medium">June</p>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <p className="text-sm text-gray-500">Publishing Status</p>
            <p className="text-xl font-medium text-green-600">Active</p>
          </CardBody>
        </Card>
      </div>

      {/* MONTHLY BAR CHART */}
      <Card>
        <CardBody>
          <h2 className="text-lg font-semibold mb-4">
            Monthly Publishing Trend
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <XAxis dataKey="month" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="articles" fill="#0b1f36" />
            </BarChart>
          </ResponsiveContainer>
        </CardBody>
      </Card>

      {/* WEEKLY BAR CHART */}
      <Card>
        <CardBody>
          <h2 className="text-lg font-semibold mb-4">
            Weekly Publishing Overview
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyData}>
              <XAxis dataKey="week" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="articles" fill="#BBA782" />
            </BarChart>
          </ResponsiveContainer>
        </CardBody>
      </Card>

      {/* DAILY LINE CHART */}
      <Card>
        <CardBody>
          <h2 className="text-lg font-semibold mb-4">
            Articles Published Per Day
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailyData}>
              <XAxis dataKey="day" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="articles"
                stroke="#0b1f36"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardBody>
      </Card>

      {/* CATEGORY COMPARISON */}
      <Card>
        <CardBody>
          <h2 className="text-lg font-semibold mb-4">
            Articles by Category
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData}>
              <XAxis dataKey="category" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Bar dataKey="articles" fill="#4B5563" />
            </BarChart>
          </ResponsiveContainer>
        </CardBody>
      </Card>
      {/* PIE CHARTS */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* CATEGORY PIE */}
        <Card>
          <CardBody>
            <h2 className="text-lg font-semibold mb-4">
              Article Distribution by Category
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="articles"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {categoryData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={PIE_COLORS[index % PIE_COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>

        {/* STATUS PIE */}
        <Card>
          <CardBody>
            <h2 className="text-lg font-semibold mb-4">
              Publishing Status Overview
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  label
                >
                  {statusData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={PIE_COLORS[index % PIE_COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>

      </div>

    </div>
  );
}
