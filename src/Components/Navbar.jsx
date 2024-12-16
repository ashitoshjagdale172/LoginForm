import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-lg font-bold"></div>


                <div className="flex items-center space-x-4">
                    {isLoggedIn ? (
                        <>
                            <span className="hidden md:block"><FaRegUser />
                            </span>
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() => setIsLoggedIn(true)}
                            className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
                        >
                            Login
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;