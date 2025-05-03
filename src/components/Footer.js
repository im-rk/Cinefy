import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div>
        <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link to="/" className="hover:underline">Cinefy™</Link>. All Rights Reserved.
            </span>
            </div>
        </footer>
    </div>
  )
}


