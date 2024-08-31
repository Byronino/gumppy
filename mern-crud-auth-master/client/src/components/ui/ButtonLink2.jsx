import { Link } from "react-router-dom";

export const ButtonLink2 = ({ to, children }) => (
  <Link 
    to={to} 
    className="bg-[#f87a85] p-5 rounded-md my-2 text-white text-center disabled:bg-indigo-300 hover:bg-[#f95a6a] hover:text-white transition duration-300"
    style={{ boxShadow: '5px 5px 10px rgba(0, 0 , 0, 0.5)' }}
  >
    {children}
  </Link>
);
