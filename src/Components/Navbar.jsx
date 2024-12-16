import  { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <nav className="p-4 text-white bg-gray-800">
            <div className="container flex items-center justify-between mx-auto">
                <div className="text-lg font-bold"></div>


                <div className="flex items-center space-x-4">
                    {isLoggedIn ? (
                        <>
                            <span className="md:block hidden"><FaRegUser />
                            </span>
                            <button
                                onClick={handleLogout}
                                className="hover:bg-red-600 px-4 py-1 text-white bg-red-500 rounded"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() => setIsLoggedIn(true)}
                            className="hover:bg-blue-600 px-4 py-1 text-white bg-blue-500 rounded"
                        >
                          <Link to="/"> Login  </Link>
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;