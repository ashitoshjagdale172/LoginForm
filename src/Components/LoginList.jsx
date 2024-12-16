import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const LoginList = () => {
  const [users, setUsers] = useState([]);
  
  // Fetch users from json-server on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/User");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold">User Registration List</h2>

        {/** Table for displaying users **/}
        <table className="w-full border border-collapse border-gray-200 table-auto">
          <thead>
            <tr className="text-white bg-blue-500">
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Mobile</th>
              <th className="px-4 py-2 border">Gender</th>
              <th className="px-4 py-2 border">Date of Birth</th>
              <th className="px-4 py-2 border">Address</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border">{user.name}</td>
                <td className="px-4 py-2 border">{user.email}</td>
                <td className="px-4 py-2 border">{user.mobile}</td>
                <td className="px-4 py-2 border">{user.gender}</td>
                <td className="px-4 py-2 border">{user.dob}</td>
                <td className="px-4 py-2 border">{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default LoginList;
