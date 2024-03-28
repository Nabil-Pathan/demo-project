import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    let Links = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/" },
        { name: "Service", link: "/" },
        { name: "Page", link: "/" },
        { name: "Element", link: "/" },
        { name: "Blog", link: "/" },
        { name: "Contact Us", link: "/" },

    ];


    let [open, setOpen] = useState(false);

    return (
        <div className={` md:relative ${open ? "bg-white" : "bg-lightGray"} container mx-auto   w-full py-2 bottom-2  top-0 left-0`}>
            <div className='md:flex items-center justify-between  py-4 px-10'>
                {/* logo section */}
                <div className='font-medium text-xl cursor-pointer flex items-center gap-1'>
                    <Link className='flex gap-2 md:pr-10' to="/">
                        <h1 className='text-darkBlue text-2xl font-bold'>Name</h1>
                    </Link>
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <FontAwesomeIcon className='text-xl' icon={faXmark} /> : <FontAwesomeIcon className='text-xl' icon={faBars} />
                    }
                </div>
                {/* link items */}
                <ul className={`md:flex gap-6 md:items-center md:bg-lightGray bg-white  md:pb-0 pb-12 absolute md:static  md:z-auto  left-0 w-full md:w-auto md:px-4 pl-9 transition-all duration-500 ease-in ${open ? 'top-16 shadow-lg ' : 'top-[-490px]'}`}>
                    {Links.map((link) => (
                        <li key={link.name} className='flex items-center gap-2 px-2 ' style={{ whiteSpace: 'nowrap' }}>
                            <Link to={link.link} className='text-darkBlue md:p-0 p-4 text-center flex items-center justify-center gap-2 hover:text-blue-400 duration-500'>
                                {link.name}
                            </Link>
                        </li>
                    ))}

                    

                    <div className='md:hidden flex flex-col gap-4 pl-2 '>
                        <Link to="/signup">
                            <button className='btn bg-darkBlue text-white font-semibold px-3 py-2 rounded duration-500 '>Signup</button>
                        </Link>
                    </div>

                </ul>
               
                {/* buttons */}
                <div className='md:flex  md:mr-2  hidden items-center'>
                    <Link to="/login">
                        <button className='border border-gray-800   px-8 py-2 rounded-full duration-500'>Start Free Trial</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;