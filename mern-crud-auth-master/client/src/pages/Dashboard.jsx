import { useLocation } from "react-router-dom";
import { Caja } from "../components/ui/Caja";
import { Subtitulo } from "../components/ui/Subtitulo";
import { OfficialCard } from "../components/ui/OfficialCard";
import { Fila } from "../components/ui/Fila";
import { Textorosa } from "../components/ui/Textorosa";
import { usePeriodontograma } from "../context/periodontogramaContext";
import { useEffect, useState } from "react";
import { TarjetaPerio } from "../components/ui/TarjetaPerio";
import { Label } from "../components/ui";
import { SimpleBarCharts } from "../components/ui/SimpleBarCharts";
import { WhiteWindow } from "../components/ui/WhiteWindow";
import { MovilidadChart } from "../components/ui/MovilidadChart";
import { ProfundidadChart } from "../components/ui/ProfundidadChart";
import { Mayora4Chart } from "../components/ui/Mayora4Chart";



export function Dashboard() {
    const location = useLocation();
    const paciente = location.state;
    const { periodontograma, getPeriodontogramas } = usePeriodontograma();
    const nombres1 = [
        "Movilidad de un diente en el tiempo",
        "Cambio de PS en un sitio en el tiempo",
        "Número de sitios con PS mayor a 4 mm en el tiempo (Global)",
        "Cambio de número de sitios con PS mayor a 6 mm en el tiempo",
        "Disminución o ganancia de NIC en el tiempo",
        "Cambios en el tiempo en BoP",
        "Cambios en el tiempo de supuración",
        "Cambios en el tiempo de placa",
        "Movimiento de encía (margen gingival) durante el tiempo",
        "Promedio de PS en el tiempo",
        "Promedio de nic en el tiempo",
        "Cambio de diagnostico en el tiempo",




    ]
    const selector = [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28, 48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38]
    const [indiceSeleccionado, setIndiceSeleccionado] = useState(null);

    const handleClick = (indice) => {
        setIndiceSeleccionado(indice);
    };


    const array1 = [1, 2, 3]
    const array2 = [3, 2, 1]

    useEffect(() => {
        getPeriodontogramas(paciente._id);
    }, []);

    const perio = periodontograma.sort((a, b) => {
        return new Date(a.createdAt) - new Date(b.createdAt);
    });

    const [indice1, setIndice1] = useState(0)
    const [indice2, setIndice2] = useState(0)
    const [indice3, setIndice3] = useState("0")

    const handleSelectChange = (event) => {
        const valorSeleccionado = event.target.value;
        setIndice1(valorSeleccionado);
    };
    const handleSelectChange2 = (event) => {
        const valorSeleccionado = event.target.value;
        setIndice2(valorSeleccionado);
    };
    const handleSelectChange3 = (event) => {
        const valorSeleccionado = event.target.value;
        setIndice3(valorSeleccionado);
    };
    return (
        <>
            <Caja>
                <Subtitulo>DASHBOARD:  {paciente.nomPac} {paciente.apellidoPac} </Subtitulo>


                <OfficialCard>
                    <p>Índice seleccionado: {indiceSeleccionado}</p>
                    <WhiteWindow>
                        <div className="mt-3 grid grid-cols-2 gap-6">
                            <div className="flex flex-wrap gap-2">
                                {selector.slice(0, 8).map((valor, indice) => (
                                    <button
                                        key={indice}
                                        className={`bg-[#f87a85] hover:bg-[#f95a6a] text-white font-bold py-2 px-4 rounded ${indice === indiceSeleccionado ? 'bg-cyan-500' : ''
                                            }`}
                                        onClick={() => handleClick(indice)}
                                    >
                                        {valor}
                                    </button>
                                ))}

                            </div>
                            <div className="flex flex-wrap gap-2">
                                {selector.slice(8, 16).map((valor, indice) => (
                                    <button
                                        key={indice}
                                        className={`bg-[#f87a85] hover:bg-[#f95a6a] text-white font-bold py-2 px-4 rounded ${indice + 8 === indiceSeleccionado ? 'bg-cyan-500' : ''
                                            }`}
                                        onClick={() => handleClick(indice + 8)}
                                    >
                                        {valor}
                                    </button>
                                ))}

                            </div>
                            <div className="flex flex-wrap gap-2">
                                {selector.slice(16, 24).map((valor, indice) => (
                                    <button
                                        key={indice}
                                        className={`bg-[#f87a85] hover:bg-[#f95a6a] text-white font-bold py-2 px-4 rounded ${indice + 16 === indiceSeleccionado ? 'bg-cyan-500' : ''
                                            }`}
                                        onClick={() => handleClick(indice + 16)}
                                    >
                                        {valor}
                                    </button>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {selector.slice(24, 32).map((valor, indice) => (
                                    <button
                                        key={indice}
                                        className={`bg-[#f87a85] hover:bg-[#f95a6a] text-white font-bold py-2 px-4 rounded ${indice + 24 === indiceSeleccionado ? 'bg-cyan-500' : ''
                                            }`}
                                        onClick={() => handleClick(indice + 24)}
                                    >
                                        {valor}
                                    </button>
                                ))}

                            </div>
                        </div>
                    </WhiteWindow>

                    <div className="mt-3 grid grid-cols-2 gap-6">
                        <div>
                            <Label >Parámetro </Label>
                            <select
                                className="text-xs rounded-full p-2 block my-1 mb-3 w-full font-roboto"
                                value={indice3}
                                onChange={handleSelectChange3}

                            >
                                {nombres1.map((p, index) => (
                                    <option value={index} key={index}>{nombres1[index]} </option>
                                ))}
                            </select>
                        </div>
                        <div></div>


                    </div>
                    <div className="text-center mx-auto">
                        {indice3 === "0" && perio.length > 0 && (

                            <MovilidadChart diente={indiceSeleccionado} parametro={perio}></MovilidadChart>
                        )}
                        {indice3 === "1" && (
                            <ProfundidadChart diente={indiceSeleccionado} parametro={perio}></ProfundidadChart>
                        )}
                        {indice3 === "2" && (
                            <Mayora4Chart diente={indiceSeleccionado} parametro={perio}></Mayora4Chart>
                        )}
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-6">
                        <div>
                            <Label >Exámen anterior</Label>
                            <select
                                className="text-xs rounded-full p-2 block my-1 mb-3 w-full font-roboto"
                                value={indice1}
                                onChange={handleSelectChange}

                            >
                                {perio.map((p, index) => (
                                    <option value={index} key={index}> {new Date(p.createdAt).toLocaleDateString('es-ES', {
                                        year: 'numeric',
                                        month: '2-digit',
                                        day: '2-digit',
                                    })}</option>
                                ))}
                            </select>
                            {perio.length > 0 && perio[indice1] && perio[indice1].movilidad1}
                        </div>
                        <div></div>
                        <div>
                            <Label >Exámen posterior</Label>
                            <select
                                className="text-xs rounded-full p-2 block my-1 mb-3 w-full font-roboto"
                                value={indice2}
                                onChange={handleSelectChange2}

                            >
                                {perio.map((p, index) => (
                                    <option value={index} key={index}> {new Date(p.createdAt).toLocaleDateString('es-ES', {
                                        year: 'numeric',
                                        month: '2-digit',
                                        day: '2-digit',
                                    })}</option>
                                ))}
                            </select>
                            {perio.length > 0 && perio[indice2] && perio[indice2].movilidad1}
                        </div>
                    </div>
                </OfficialCard>
            </Caja>
        </>
    )
}