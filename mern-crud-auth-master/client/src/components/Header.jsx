import logoGumppy from "../images/logoGumppy.png";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

export function Header() {
    const { isAuthenticated, user } = useAuth();

    return (
        <div className="bg-[#f87a85] flex items-center justify-between px-6 py-4 mb-4">
            {/* Logo a la izquierda */}
            <div className="flex-shrink-0">
                <img src={logoGumppy} width="200"  alt="Gumppy Logo" className="py-5"/>
            </div>

            {/* Usuario en el centro
            {isAuthenticated && (
                <div className="text-2xl font-roboto flex-grow text-center">
                    <Link to="/tasks">Dr. {user.username}</Link>
                </div>
            )}
 */}
            {/* Tutorial a la derecha */}
            <div className="text-2xl font-roboto flex-shrink-0">
                <Link to="/tutorial">Tutorial</Link>
            </div>
        </div>
    );
}

