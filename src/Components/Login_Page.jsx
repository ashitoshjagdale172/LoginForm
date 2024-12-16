import { useState } from "react";
import axios from "axios"; // Import Axios
import { Typography, Button } from "@material-tailwind/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false); // Loading state

  const validateInputs = () => {
    const newErrors = {};
    if (!email.includes("@")) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateInputs()) {
      try {
        setLoading(true);
        const response = await axios.post("http://localhost:3000/User", {
          email,
          password,
        });
        console.log("Login successful:", response.data);
        // Redirect or handle successful login
      } catch (error) {
        console.error("Login failed:", error.response?.data || error.message);
        setErrors((prevErrors) => ({
          ...prevErrors,
          general: "Invalid email or password. Please try again.",
        }));
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="prose prose-lg w-full max-w-md bg-white p-8 rounded shadow-md">
        <Typography
          variant="h3"
          color="blue-gray"
          className="text-center mb-6 font-bold"
        >
          Login
        </Typography>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Section */}
          <div className="space-y-2">
            <Typography variant="h6" color="blue-gray">
              Email
            </Typography>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded text-gray-800`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <Typography variant="small" color="red">
                {errors.email}
              </Typography>
            )}
          </div>
          {/* Password Section */}
          <div className="space-y-2">
            <Typography variant="h6" color="blue-gray">
              Password
            </Typography>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded text-gray-800`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-4 flex items-center justify-center w-8 h-8 text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <Typography variant="small" color="red">
                {errors.password}
              </Typography>
            )}
          </div>
          {/* General Error */}
          {errors.general && (
            <Typography variant="small" color="red" className="text-center">
              {errors.general}
            </Typography>
          )}
          {/* Submit Button */}
          <Button
            type="submit"
            variant="gradient"
            color="blue"
            fullWidth
            className="py-2 bg-blue-600"
            disabled={loading} // Disable during loading
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
        {/* Register Link */}
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="mt-6 text-center"
        >
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-blue-500 font-semibold hover:underline"
          >
            Register
          </a>
        </Typography>
      </div>
    </div>
  );
}

export default LoginPage;
