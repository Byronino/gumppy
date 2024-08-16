import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  //console.log(isAuthenticated, user)

  return (
    <div className="mx-6">
      {isAuthenticated ? (
        <>
          <nav className="bg-[#f87a85]  flex justify-between py-1 px-10 rounded-lg " style={{boxShadow: '5px 5px 10px rgba(0, 0 , 0, 0.5)'}}>
            <h1 className="text-2xl font-roboto my-2">
              <Link to={isAuthenticated ? "/tasks" : "/"}> Dr. {user.username}</Link>
            </h1>
            <ul className="flex gap-x-2">
              <li className="my-4">
                <ButtonLink to="/pacientes">Pacientes</ButtonLink>
              </li>
              <li className="my-4">
                <ButtonLink to="/add-paciente">Añadir paciente</ButtonLink>
              </li>
              <li className="my-4">
                <ButtonLink to="/add-task">Add Task</ButtonLink>
              </li>
              <li className="my-4">
                <ButtonLink to="/periograma">periograma</ButtonLink>
              </li>
              <li className="my-4">
                <Link to="/" onClick={() => logout()}>
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </>
      ) :
        (
          <>
            <nav className="bg-zinc-700  flex justify-between py-2 px-10 rounded-lg ">
              <h1 className="text-2xl font-bold">
                <Link to={isAuthenticated ? "/tasks" : "/"}>Task Manager</Link>
              </h1>
              <ul className="flex gap-x-2">
                <li>
                  <ButtonLink to="/login">Login</ButtonLink>
                </li>
                <li>
                  <ButtonLink to="/register">Register</ButtonLink>
                </li>
              </ul>
            </nav>
          </>)
      }


    </div>
  );
}
