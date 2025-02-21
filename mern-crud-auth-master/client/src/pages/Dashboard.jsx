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
import { Mayora6Chart } from "../components/ui/Mayora6Chart";
import { NicChart } from "../components/ui/NicChart";
import { BloodChart } from "../components/ui/BloodChart";
import { TituloChart } from "../components/ui/TituloChart";
import { PromedioPsChart } from "../components/ui/PromedioPsChart";
import { CantidadChart } from "../components/ui/CantidadChart";
import { TablaDiente } from "../components/ui/TablaDiente";
import { BsBank } from "react-icons/bs";
import { Patologia } from "../components/ui/Patologia";
import { MiniSub } from "../components/ui/MiniSub";
import { MargenChart } from "../components/ui/MargenChart";


export function Dashboard() {
    const location = useLocation();
    const paciente = location.state;
    const { periodontograma, getPeriodontogramas } = usePeriodontograma();
    //por diente
    const nombres1 = [
        "Movilidad de un diente en el tiempo",
        "Cambio de PS en un sitio en el tiempo",
        "Disminución o ganancia de NIC en el tiempo",
        "Movimiento de encía (margen gingival) durante el tiempo",







    ]
    //globales
    const nombres2 = [
        "Número de sitios con PS mayor a 4 mm en el tiempo",
        "Número de sitios con PS mayor a 6 mm en el tiempo",
        "Cambios porcentuales en el tiempo (B.o.p., Placa, C.r., R.m.a., Supuracion )",
        "Promedio de PS, MG, y NIC en el tiempo",
        "Cantidad de dientes e implantes",
    ]


    const selector = [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28, 48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38]
    const [indiceSeleccionado, setIndiceSeleccionado] = useState(0);

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
    const [indice4, setIndice4] = useState("0")

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
    const handleSelectChange4 = (event) => {
        const valorSeleccionado = event.target.value;
        setIndice4(valorSeleccionado);
    };



    // Estado para la posición del scroll
    const [scrollY, setScrollY] = useState(0);

    // Efecto para rastrear el desplazamiento de la página
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        // Agregar el listener de scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup para eliminar el listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
         {/*
            <div
                className="fixed bg-[#F87A85] text-white p-2 rounded-xl w-1/6"
                style={{
                    top: '50%', 
                    right: '0px', 
                    transform: 'translateY(-50%)', 
                    zIndex: 1000, 
                }}
            >
                
                <Patologia  paciente={paciente}></Patologia>
            </div>
            */}
            <Caja>
                <Subtitulo>DASHBOARD:  {paciente.nomPac} {paciente.apellidoPac} </Subtitulo>
                <OfficialCard>
                <Patologia  paciente={paciente}></Patologia>
                </OfficialCard>
                <OfficialCard>

                    <Subtitulo>Gráficos globales</Subtitulo>
                    <div className="mt-8 grid grid-cols-2 gap-6">
                        <div>

                            <select
                                className="text-xs rounded-full p-2 block my-1 mb-3 w-full font-roboto"
                                value={indice4}
                                onChange={handleSelectChange4}

                            >
                                {nombres2.map((p, index) => (
                                    <option value={index} key={index}>{nombres2[index]} </option>
                                ))}
                            </select>
                        </div>
                        <div></div>


                    </div>
                    <div className="text-center mx-auto">
                        {indice4 === "0" && perio.length > 0 && (
                            <Mayora4Chart diente={indiceSeleccionado} parametro={perio}></Mayora4Chart>
                        )}
                        {indice4 === "1" && perio.length > 0 && (
                            <Mayora6Chart diente={indiceSeleccionado} parametro={perio}></Mayora6Chart>
                        )}
                        {indice4 === "2" && perio.length > 0 && (
                            <BloodChart diente={indiceSeleccionado} parametro={perio}></BloodChart>
                        )}
                        {indice4 === "3" && perio.length > 0 && (
                            <PromedioPsChart diente={indiceSeleccionado} parametro={perio}></PromedioPsChart>
                        )}
                        {indice4 === "4" && perio.length > 0 && (
                            <CantidadChart diente={indiceSeleccionado} parametro={perio}></CantidadChart>
                        )}

                    </div>


                </OfficialCard>

                <OfficialCard>
                    <Subtitulo>Gráficos por pieza dental</Subtitulo>

                    <WhiteWindow>
                        <TituloChart>Seleccione un diente</TituloChart>

                        <div className="mt-3 grid grid-cols-2 gap-6 justify-start items-center">

                            <div className="flex flex-wrap gap-2">
                                {selector.slice(0, 8).map((valor, indice) => (
                                    <div key={indice}>
                                        {perio.length > 0 && perio[perio.length - 1].dientes1i[indice][1] ? (
                                            <button
                                                className={`bg-[#888888]  text-white font-bold py-2 px-4 rounded `}
                                            >
                                                {valor}
                                            </button>
                                        ) : (
                                            <button
                                                className={`bg-[#f87a85] hover:bg-[#f95a6a] text-white font-bold py-2 px-4 rounded ${indice === indiceSeleccionado ? 'bg-cyan-500' : ''}`}
                                                onClick={() => handleClick(indice)}
                                            >
                                                {valor}
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {selector.slice(8, 16).map((valor, indice) => (
                                    <div key={indice}>
                                        {perio.length > 0 && perio[perio.length - 1].dientes1d[indice][1] ? (
                                            <button
                                                className={`bg-[#888888]  text-white font-bold py-2 px-4 rounded `}
                                            >
                                                {valor}
                                            </button>
                                        ) : (
                                            <button
                                                className={`bg-[#f87a85] hover:bg-[#f95a6a] text-white font-bold py-2 px-4 rounded ${indice + 8 === indiceSeleccionado ? 'bg-cyan-500' : ''}`}
                                                onClick={() => handleClick(indice + 8)}
                                            >
                                                {valor}
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {selector.slice(16, 24).map((valor, indice) => (
                                    <div key={indice + 16}>
                                        {perio.length > 0 && perio[perio.length - 1].dientes2i[indice][1] ? (
                                            <button
                                                className={`bg-[#888888]  text-white font-bold py-2 px-4 rounded`}
                                            >
                                                {valor}
                                            </button>
                                        ) : (
                                            <button
                                                className={`bg-[#f87a85] hover:bg-[#f95a6a] text-white font-bold py-2 px-4 rounded ${indice + 16 === indiceSeleccionado ? 'bg-cyan-500' : ''}`}
                                                onClick={() => handleClick(indice + 16)}
                                            >
                                                {valor}
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {selector.slice(24, 32).map((valor, indice) => (
                                    <div key={indice + 24}>
                                        {perio.length > 0 && perio[perio.length - 1].dientes2d[indice][1] ? (
                                            <button
                                                className={`bg-[#888888]  text-white font-bold py-2 px-4 rounded`}
                                            >
                                                {valor}
                                            </button>
                                        ) : (
                                            <button
                                                className={`bg-[#f87a85] hover:bg-[#f95a6a] text-white font-bold py-2 px-4 rounded ${indice + 24 === indiceSeleccionado ? 'bg-cyan-500' : ''}`}
                                                onClick={() => handleClick(indice + 24)}
                                            >
                                                {valor}
                                            </button>
                                        )}
                                    </div>
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
                        {indice3 === "1" && perio.length > 0 && (
                            <ProfundidadChart diente={indiceSeleccionado} parametro={perio}></ProfundidadChart>
                        )}
                        {indice3 === "2" && perio.length > 0 && (
                            <NicChart diente={indiceSeleccionado} parametro={perio}></NicChart>
                        )}
                        {indice3 === "3" && perio.length > 0 && (
                            <MargenChart diente={indiceSeleccionado} parametro={perio}></MargenChart>
                        )}

                    </div>
                    {/*----------------------------------------------------------   
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
                    */}
                </OfficialCard>
                <OfficialCard>
                    <Subtitulo>Historial de dientes perdidos</Subtitulo>
                    <TablaDiente diente={indiceSeleccionado} parametro={perio}></TablaDiente>
                </OfficialCard>
            </Caja>
        </>
    )
}