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

export function Dashboard() {
    const location = useLocation();
    const paciente = location.state;
    const { periodontograma, getPeriodontogramas } = usePeriodontograma();
    const nombres1 = ["Movilidad", "Implante", "Furca", "B.O.P.", "Placa", "M.G.", "P.S.", "N.I.C.", "C.R.", "R.M.A", "Sup."]

    const array1 = [1, 2, 3]
    const array2 = [3, 2, 1]

    useEffect(() => {
        getPeriodontogramas(paciente._id);
    }, []);

    const perio = periodontograma.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
    });

    const [indice1, setIndice1] = useState(0)
    const [indice2, setIndice2] = useState(0)
    const [indice3, setIndice3] = useState(0)

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
                <Subtitulo>DASHBOARD:  {paciente.nomPac} {paciente.apellidoPac}</Subtitulo>


                <OfficialCard>

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
                        {indice3 === "0" && (
                            <WhiteWindow>
                                <SimpleBarCharts array1={array1} array2={array2} ></SimpleBarCharts>
                            </WhiteWindow>
                        )}
                        {indice3 === "1" && (
                            <WhiteWindow>
                                <Subtitulo>grafico 2</Subtitulo>
                            </WhiteWindow>
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