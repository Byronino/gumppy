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
          <nav className="bg-[#f87a85]  flex justify-between py-1 px-10 rounded-lg ">
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
              
              
              
              <li className="my-4 mx-5">
                <Link to="/" onClick={() => logout()}>
                  Cerrar sesión
                </Link>
              </li>
            </ul>
          </nav>
        </>
      ) :
        (
          <>
         <nav className="bg-[#f87a85]  flex justify-between py-1 px-10 rounded-lg ">
            
            <ul className="flex gap-x-2 py-2">
              <li className="my-2">
                <ButtonLink to="/free-perio">Periodontograma</ButtonLink>
              </li>
              <li className="my-2">
                <ButtonLink to="/oleary">Indice de o'leary</ButtonLink>
              </li>
                <li className="my-2">
                  <ButtonLink to="/">Iniciar Sesión</ButtonLink>
                </li>
                <li className="my-2">
                  <ButtonLink to="/register">Registrarse</ButtonLink>
                </li>
              </ul>
          </nav>
            
          </>)
      }


    </div>
  );
}
