import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data: User[] = await res.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <h1 className="text-left px-4 py-2 border-b-2 text-xl">Users</h1>
      <table className="w-full border-collapse border border-gray-300 rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-left">Name</th>
            <th className="px-4 py-2 border-b text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b text-left">{user.name}</td>
              <td className="px-4 py-2 border-b text-left">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
