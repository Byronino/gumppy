
import logo from "../images/logo.png"
import logoGumppy from "../images/logoGumppy.png"
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";

export function Header() {
    const { isAuthenticated, logout, user } = useAuth();

    return (
        <>
            <div className=" bg-[#f87a85] flex justify  mb-4 " >
            <div className="flex justify-center items-end"><img src={logoGumppy} width="400" height="150 " /></div>
                    {isAuthenticated ? (

                        <h1 className="text-2xl mb-3 font-roboto mt-28 flex justify-end items-end">
                            <Link to={isAuthenticated ? "/tasks" : "/"}> Dr. {user.username}</Link>
                        </h1>
                    ) :

                        (<div></div>)}

                
            </div>
        </>
    )
}