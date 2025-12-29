import { useEffect, useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
} from "@heroui/react";

const QUERY_KEY = "queries";

export default function AdminQuery() {
  const [queries, setQueries] = useState([]);

  // filters
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  useEffect(() => {
    const storedQuery = JSON.parse(localStorage.getItem(QUERY_KEY)) || [];
    setQueries(storedQuery);
  }, []);

  const filteredQueries = useMemo(() => {
    return queries.filter((q) => {
      const matchesSearch =
        q.query?.toLowerCase().includes(search.toLowerCase()) ||
        q.detail?.toLowerCase().includes(search.toLowerCase());

      const matchesDate = dateFilter
        ? q.date === dateFilter
        : true;

      return matchesSearch && matchesDate;
    });
  }, [queries, search, dateFilter]);

  return (
    <div className="px-4 py-6 pb-24 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">All Queries</h1>

      {/* FILTERS */}
      <div className="flex flex-col sm:flex-row gap-10 mb-6 max-w-3xl">
        <div className="flex flex-col gap-2 text-sm font-semibold">
          <span>Search by Name</span>
          <Input
          label=""
          placeholder="Search by query or detail"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        </div>

        <div className="flex flex-col gap-2 text-sm font-semibold">
          <span>Filter by Date</span>
          <Input
          type="date"
          label=""
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        />
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <Table
          aria-label="Queries table"
          classNames={{
            wrapper: "shadow-none border rounded-lg min-w-[700px]",
            th: "bg-gray-100 text-gray-700",
          }}
        >
          <TableHeader>
            <TableColumn>Date</TableColumn>
            <TableColumn>Query</TableColumn>
            <TableColumn align="center">Detail</TableColumn>
          </TableHeader>

          <TableBody emptyContent={"No queries found"}>
            {filteredQueries.map((q) => (
              <TableRow key={q.id}>
                <TableCell>{q.date}</TableCell>
                <TableCell>{q.query}</TableCell>
                <TableCell className="text-center">
                  {q.detail}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
