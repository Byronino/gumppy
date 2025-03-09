import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

export function TarjetaPaciente({ paciente }) {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    navigate("/probando-paciente", { state: paciente });
  };

  return (
    <div
      id={paciente.rutPac}
      className={`mt-3 p-6 rounded-3xl shadow-lg border-4 cursor-pointer transition-all duration-300 
        ${hover ? "bg-[#963e46]" : "bg-[#f87a85] border-[#fc9099]"}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      {/* Encabezado */}
      <header className="bg-[#fc9099] rounded-2xl p-3 flex justify-between items-center shadow-md">
        <h1 className="text-lg font-semibold flex items-center gap-2">
          <FaUserAlt />
          {paciente.nomPac} {paciente.apellidoPac}
        </h1>

        <h1 className="text-sm font-medium text-gray-100">
          {new Date(paciente.updatedAt).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </h1>
      </header>

      {/* Contenido de la tarjeta */}
      <div className="grid grid-cols-3 gap-4 mt-5">
        <div>
          <p className="text-white font-medium">
            <b>RUT:</b> {paciente.rutPac}
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}




