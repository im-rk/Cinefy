import { Link } from "react-router-dom"
import PageNotFoundImage  from "../assests/images/pagenotfound.png"
import { useEffect } from "react";
import { useTitle } from "../hooks/useTitle";
export const PageNotFound = () => {
  useTitle("Page not Found");
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl textt-gray font-bold m-10 dark:text-white">404, Oops!</p>
          <div className="max-w-lg">
            <img src={PageNotFoundImage} className="rounded" alt="404 page not found" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button className="w-64 text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium text-white hover">Back to Home</button>
          </Link>
        </div>
      </section>
    </main>
  )
}

