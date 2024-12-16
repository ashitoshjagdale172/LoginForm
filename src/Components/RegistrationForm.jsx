import  { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "",
    dob: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Invalid email format";
    if (!formData.mobile) errors.mobile = "Mobile number is required";
    else if (!/^\d{10}$/.test(formData.mobile)) errors.mobile = "Mobile number must be 10 digits";
    if (!formData.gender) errors.gender = "Gender is required";
    if (!formData.dob) errors.dob = "Date of birth is required";
    if (!formData.address) errors.address = "Address is required";
    if (!formData.password) errors.password = "Password is required";
    else if (formData.password.length < 6) errors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) errors.confirmPassword = "Passwords do not match";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {

      // const response = await axios.post("https://api/register", formData);
      // alert("Registration successful: " + response.data.message);
      console.log(formData)

      const response = await axios.post("http://localhost:3000/User", formData);
      alert("Registration successful: " + response.data.message);

    } catch (error) {
      console.error("Error during registration", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-6 text-2xl font-bold">Registration Form</h2>

        {/** Name **/}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="focus:outline-none focus:ring focus:ring-blue-300 w-full px-3 py-2 border rounded"
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        {/** Email **/}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="focus:outline-none focus:ring focus:ring-blue-300 w-full px-3 py-2 border rounded"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>

        {/** Mobile **/}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Mobile</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="focus:outline-none focus:ring focus:ring-blue-300 w-full px-3 py-2 border rounded"
          />
          {errors.mobile && <p className="text-sm text-red-500">{errors.mobile}</p>}
        </div>

        {/** Gender **/}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Gender</label>
          <div className="flex space-x-4">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
                className="mr-2"
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
                className="mr-2"
              />
              Female
            </label>
          </div>
          {errors.gender && <p className="text-sm text-red-500">{errors.gender}</p>}
        </div>

        {/** Date of Birth **/}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="focus:outline-none focus:ring focus:ring-blue-300 w-full px-3 py-2 border rounded"
          />
          {errors.dob && <p className="text-sm text-red-500">{errors.dob}</p>}
        </div>

        {/** Address **/}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="focus:outline-none focus:ring focus:ring-blue-300 w-full px-3 py-2 border rounded"
          />
          {errors.address && <p className="text-sm text-red-500">{errors.address}</p>}
        </div>

        {/** Password **/}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="focus:outline-none focus:ring focus:ring-blue-300 w-full px-3 py-2 border rounded"
          />
          {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
        </div>

        {/** Confirm Password **/}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="focus:outline-none focus:ring focus:ring-blue-300 w-full px-3 py-2 border rounded"
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-500">{errors.confirmPassword}</p>
          )}
        </div>

        {/** Submit Button **/}
        <button
          type="submit"
          className="hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 w-full py-2 text-white bg-blue-500 rounded"
        >
         <Link to="/"> Register  </Link>
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
