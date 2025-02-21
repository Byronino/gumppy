import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function TarjetaPerio({ periodontograma, paciente }) {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    navigate("/ver_periodontograma", {
      state: { periodontograma, paciente },
    });
  };

  return (
    <div
      id={periodontograma._id}
      className={`mt-3 p-6 rounded-3xl shadow-lg border-4 cursor-pointer transition-all duration-300 
        ${hover ? "bg-[#963e46]" : "bg-[#f87a85] border-[#fc9099]"}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      {/* Encabezado */}
      <header className="bg-[#fc9099] rounded-2xl p-3 flex justify-between items-center shadow-md">
        <h1 className="text-lg font-semibold">Tipo de exámen: Periodontograma</h1>
        <h1 className="text-sm font-medium text-gray-100">Fecha: 
          {new Date(periodontograma.createdAt).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </h1>
      </header>

      {/* Contenido de la tarjeta */}
      <div className="grid grid-cols-3 gap-4 mt-5">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
