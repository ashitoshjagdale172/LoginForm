import React, { useState } from 'react'

const LoginList = ({setFormData}) => {

    const [users, setUsers] = useState([])


    const handleEdit = (index) => {
        setFormData(users[index]);
      };

    const handleDelete = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
      };
    return (
        <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Mobile</th>
            <th className="px-4 py-2 border">Gender</th>
            <th className="px-4 py-2 border">DOB</th>
            <th className="px-4 py-2 border">Address</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="text-center">
              <td className="px-4 py-2 border">{user.name}</td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border">{user.mobile}</td>
              <td className="px-4 py-2 border">{user.gender}</td>
              <td className="px-4 py-2 border">{user.dob}</td>
              <td className="px-4 py-2 border">{user.address}</td>
              <td className="px-4 py-2 border space-x-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="px-2 py-1 text-white bg-green-500 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="px-2 py-1 text-white bg-red-500 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}

export default LoginList
