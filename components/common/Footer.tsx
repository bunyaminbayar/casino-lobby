import React from 'react'

export default function Footer() {
    return (
        <footer className="shadow bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm sm:text-center text-gray-400">© 2024 All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Link</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Link</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Link</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Link</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
