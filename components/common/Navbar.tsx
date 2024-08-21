import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Spin City Solutions</span>
                    </a>
                    <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
                            <li>
                                <a href="/" className="block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/casino" className="block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Casino Lobby</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='h-48 md:h-16'></div>
        </>
    )
}
