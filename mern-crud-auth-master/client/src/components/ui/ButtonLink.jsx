import { Link } from "react-router-dom";

export const ButtonLink = ({ to, children }) => (
  <Link to={to} className="bg-indigo-500 hover:bg-indigo-700 active:bg-indigo-900 px-4 py-2 my-4 rounded-md 
            text-white font-bold text-md transition duration-300 ease-in-out">
    {children}
  </Link>
);
