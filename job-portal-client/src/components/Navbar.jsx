import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuToggler = () => {
        setMenuOpen(!isMenuOpen);
    }

    const navItems = [
        { path: '/', title: "Start a Search" },
        { path: '/my-job', title: "My Jobs" },
        { path: 'salary', title: "Salary" },
        { path: '/post-job', title: "Post Job" }
    ]
    return (
        <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <nav className='flex justify-between items-center py-6'>
                <a href="/" className='flex items-center gap-2 text-2xl text-black'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='29' height='30' viewBox='0 0 29 30'
                        fill='none'>
                        <circle cx='12.0143' cy='12.5143' r='12.0143' fill='#3575E2' fillOpacity='0.4'></circle>
                        <circle cx='16.9857' cy='17.4857' r='12.0143' fill='#3575E2' ></circle>
                    </svg>
                    <span>Job Board</span>
                </a>
                {/*navbar items-*/}
                <ul className='hidden md:flex gap-12'>
                    {
                        navItems.map(({ path, title }) => (
                            <li key={path} className='text-base , text-primary'>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) => isActive ? "active" : ""}
                                >
                                    {title}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>

                {/* signup and login buttons */}
                <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
                    <Link to="/login" className='py-2 px-5 border rounded'>LogIn</Link>
                    <Link to="/sign-up" className='py-2 px-5 border rounded bg-blue text-white'>SignUp</Link>
                </div>

                {/* for mobile applications */}
                <div className='md:hidden block'>
                    <button onClick={handleMenuToggler}>
                        {
                            isMenuOpen ?<FaXmark className='w-5 h-5 text-primary'/>:
                            <FaBarsStaggered className='w-5 h-5 text-primary' />
                        }               
                    </button>
                </div>
            </nav>

            {/* navitems for mobile application */}
            <div className={`px-3 bg-black py-5 rounded-sm ${isMenuOpen ? "":"hidden"}`}>
            <ul>
                    {
                        navItems.map(({ path, title }) => (
                            <li key={path} className='text-base , text-white first:text-white py-1'>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) => isActive ? "active" : ""}
                                >
                                    {title}
                                </NavLink>
                            </li>
                        ))
                    }
                    <Link to="/login" className='text-white py-1'>LogIn</Link>
                </ul>
            </div>
        </header>
    )
}

export default Navbar
