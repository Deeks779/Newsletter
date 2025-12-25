import { useEffect, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button} from "@heroui/react";

const USERS_KEY = "users";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    setUsers(storedUsers);
  }, []);

  const makeAdmin = (email) => {
    const updatedUsers = users.map((u) =>
      u.email === email ? { ...u, role: "admin" } : u
    );

    localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  return (
    <div className="min-h-screen overflow-x-hidden m-25">
      <h1 className="text-2xl font-semibold mb-6">All Users</h1>

      <Table
        aria-label="Users table"
        classNames={{
          wrapper: "shadow-none border rounded-lg justify-center",
          th: "bg-gray-100 text-gray-700",
        }}
      >
        <TableHeader>
          <TableColumn>Email</TableColumn>
          <TableColumn>Role</TableColumn>
          <TableColumn align="center">Action</TableColumn>
        </TableHeader>

        <TableBody emptyContent={"No users found"}>
          {users.map((user) => (
            <TableRow key={user.email}>
              <TableCell>{user.email}</TableCell>

              <TableCell className="capitalize">
                {user.role || "user"}
              </TableCell>

              <TableCell className="text-center">
                {user.role !== "admin" ? (
                  <Button
                    size="sm"
                    radius="sm"
                    className="bg-[#0b1f36] text-white"
                    onPress={() => makeAdmin(user.email)}
                  >
                    Make Admin
                  </Button>
                ) : (
                  <span className="text-gray-400 text-sm">—</span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
