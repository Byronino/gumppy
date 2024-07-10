import { Link } from "react-router-dom";

export const ButtonLink = ({ to, children }) => (
  <Link to={to} className="bg-indigo-500 px-4 py-2 my-4 rounded-md">
    {children}
  </Link>
);
