import { Link } from "react-router-dom";
import { TableD } from "../components/ui/TableD";
import { Red } from "../components/ui/Red";
import { useState } from "react";
import { DienteLock } from "../components/ui/DienteLock";
import { FurcaButton } from "../components/ui/FurcaButton";
import { MiniRed } from "../components/ui/MiniRed";
import { MiniBlue } from "../components/ui/MiniBlue";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import logo from "../images/logo.png"
import placeholder from "../images/placeholder.png"
import placeholder2 from "../images/placeholder2.png"
import borde from "../images/borde.png"
import { Button } from "../components/ui/Button";
import { useNavigate, useParams } from "react-router-dom";
import { usePeriodontograma } from "../context/periodontogramaContext";
import { createPeriodontograma } from "../../../src/controllers/periodontograma.controller";
import dibujo1i from "../images/dibujo1i.png"
import axios from "axios";
import { Subtitulo } from "../components/ui/Subtitulo";
import { useLocation } from "react-router-dom";
import { OfficialCard } from "../components/ui/OfficialCard";
import { Fila } from "../components/ui/Fila";
import { Textorosa } from "../components/ui/Textorosa";
import { MiniBlack } from "../components/ui/MiniBlack";
import { MiniYellow } from "../components/ui/MiniYellow";
import { MiniPurple } from "../components/ui/MiniPurple";
import { Button2 } from "../components/ui/Button2";
import { Textonegro } from "../components/ui/Textonegro";
import { Caja } from "../components/ui/Caja";
import { WhiteWindow } from "../components/ui/WhiteWindow";


export function Oleary() {
    const [dientes1i, setDientes1i] = useState([[18, false], [17, false], [16, false], [15, false], [14, false], [13, false], [12, false], [11, false]])
    const cambioDientes1i = (index) => {
        const newArray = [...dientes1i];
        newArray[index][1] = !newArray[index][1];
        setDientes1i(newArray);
        //const newArray2 = [...movilidad1];
        //newArray2[index] = 0;
        //setMovilidad1(newArray2);
    }
    const [dientes1d, setDientes1d] = useState([[21, false], [22, false], [23, false], [24, false], [25, false], [26, false], [27, false], [28, false]])
    const cambioDientes1d = (index) => {
        const newArray = [...dientes1d];
        newArray[index][1] = !newArray[index][1];
        setDientes1d(newArray);
        //const newArray2 = [...movilidad2];
        //newArray2[index] = 0;
        //setMovilidad2(newArray2);
    }
    const [dientes2d, setDientes2d] = useState([[31, false], [32, false], [33, false], [34, false], [35, false], [36, false], [37, false], [38, false]])
    const cambioDientes2d = (index) => {
        const newArray = [...dientes2d];
        newArray[index][1] = !newArray[index][1];
        setDientes2d(newArray);

    }
    const [dientes2i, setDientes2i] = useState([[48, false], [47, false], [46, false], [45, false], [44, false], [43, false], [42, false], [41, false]])
    const cambioDientes2i = (index) => {
        const newArray = [...dientes2i];
        newArray[index][1] = !newArray[index][1];
        setDientes2i(newArray);

    }

    const [ole1i, setOle1i] = useState([
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false]
    ]);


    const changeOle1i = (index, n) => {
        const newOle1i = [...ole1i];
        newOle1i[index] = [...newOle1i[index]]; // Copia el array interno para evitar mutaciones
        newOle1i[index][n] = !newOle1i[index][n]; // Cambia el valor específico
        setOle1i(newOle1i);
    };

    const [ole1d, setOle1d] = useState([
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false]
    ]);

    const changeOle1d = (index, n) => {
        const newOle1d = [...ole1d];
        newOle1d[index] = [...newOle1d[index]]; // Copia el array interno para evitar mutaciones
        newOle1d[index][n] = !newOle1d[index][n]; // Cambia el valor específico
        setOle1d(newOle1d);
    };
    const [ole2i, setOle2i] = useState([
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false]
    ]);

    const changeOle2i = (index, n) => {
        const newOle2i = [...ole2i];
        newOle2i[index] = [...newOle2i[index]]; // Copia el array interno para evitar mutaciones
        newOle2i[index][n] = !newOle2i[index][n]; // Cambia el valor específico
        setOle2i(newOle2i);
    };

    const [ole2d, setOle2d] = useState([
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false]
    ]);

    const changeOle2d = (index, n) => {
        const newOle2d = [...ole2d];
        newOle2d[index] = [...newOle2d[index]]; // Copia el array interno para evitar mutaciones
        newOle2d[index][n] = !newOle2d[index][n]; // Cambia el valor específico
        setOle2d(newOle2d);
    };


    const countTrueValues = () => {
        // Contar en ole1i, solo si el diente correspondiente en dientes1i está presente
        const countInOle1i = ole1i
            .map((item, index) => dientes1i[index][1] === false ? item.filter(value => value === true).length : 0)
            .reduce((acc, count) => acc + count, 0);

        // Contar en ole1d, solo si el diente correspondiente en dientes1d está presente
        const countInOle1d = ole1d
            .map((item, index) => dientes1d[index][1] === false ? item.filter(value => value === true).length : 0)
            .reduce((acc, count) => acc + count, 0);

        // Contar en ole2i, solo si el diente correspondiente en dientes2i está presente
        const countInOle2i = ole2i
            .map((item, index) => dientes2i[index][1] === false ? item.filter(value => value === true).length : 0)
            .reduce((acc, count) => acc + count, 0);

        // Contar en ole2d, solo si el diente correspondiente en dientes2d está presente
        const countInOle2d = ole2d
            .map((item, index) => dientes2d[index][1] === false ? item.filter(value => value === true).length : 0)
            .reduce((acc, count) => acc + count, 0);

        return countInOle1i + countInOle1d + countInOle2i + countInOle2d;
    };
    const sumarDientesNoPresentes = () => {
        let total = 0;

        // Recorre dientes1i y suma 4 si el diente está presente (false)
        dientes1i.forEach(diente => {
            if (!diente[1]) { // Si el valor es false, el diente está presente
                total += 4;
            }
        });

        // Recorre dientes1d y suma 4 si el diente está presente (false)
        dientes1d.forEach(diente => {
            if (!diente[1]) { // Si el valor es false, el diente está presente
                total += 4;
            }
        });

        // Recorre dientes2i y suma 4 si el diente está presente (false)
        dientes2i.forEach(diente => {
            if (!diente[1]) { // Si el valor es false, el diente está presente
                total += 4;
            }
        });

        // Recorre dientes2d y suma 4 si el diente está presente (false)
        dientes2d.forEach(diente => {
            if (!diente[1]) { // Si el valor es false, el diente está presente
                total += 4;
            }
        });

        return total;
    };

    const totalDientes = sumarDientesNoPresentes();
    const totalTrue = countTrueValues();
    const fechaHoy = new Date().toLocaleDateString();
    const dientes = totalDientes / 4
    const porcentaje = (totalTrue / totalDientes) * 100
    const iho = 100-porcentaje
    return (
        <>
            <Caja>
                <OfficialCard>
                    <Subtitulo>Indice de higiene y Placa Bacteriana de O´leary ({fechaHoy})</Subtitulo>
            
                    <WhiteWindow>

                        <OfficialCard>
                            
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-2">
                                    <Textorosa>IPB:</Textorosa>
                                    <Textonegro>{dientes} dientes: {totalTrue}/{totalDientes} * 100 = {(porcentaje).toFixed(2)}%</Textonegro>

                        

                                </div>
                                <div className="flex gap-2">
                                    <Textorosa>IHO:</Textorosa>
                                    <Textonegro>{(iho).toFixed(2)}%</Textonegro>

                        

                                </div>
                               
                            </div>
                        </OfficialCard>
                        <div className="flex flex-row" style={{ justifyContent: 'center' }}>


                            {/*PRIMERA TABLA IZQUIERDA-----------------------------------------------------------   */}
                            <div className="rounded w-1/3 my-10" style={{ boxSizing: 'border-box' }}>
                                <table style={{ tableLayout: 'fixed', width: '100%' }}>
                                    <thead>
                                        <tr>
                                            <th style={{ padding: '2px', width: '15.5%' }}></th>
                                            {dientes1i.map((diente, index) => (
                                                <th key={index} className="border-black border rounded" style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
                                                    <DienteLock onClick={() => { cambioDientes1i(index) }}>{diente}</DienteLock>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>Superior</th>
                                            {ole1i.map((ole, index) => (
                                                dientes1i[index][1] ? (
                                                    <th key={index} className="border-black border rounded">
                                                        <div></div>
                                                    </th>
                                                ) : (
                                                    <th key={index} className="border-black border rounded p-1">
                                                        <div className="grid grid-rows-3 grid-cols-3 gap-1">
                                                            <div className="col-span-3">
                                                                <MiniPurple onClick={() => changeOle1i(index, 0)}>{ole[0]}</MiniPurple>
                                                            </div>
                                                            <div className="col-span-1">
                                                                <MiniPurple onClick={() => changeOle1i(index, 1)}>{ole[1]}</MiniPurple>
                                                            </div>
                                                            <div className="col-span-2">
                                                                <MiniPurple onClick={() => changeOle1i(index, 2)} className="mx-4">{ole[2]}</MiniPurple>  {/* Añadido margen derecho */}
                                                            </div>
                                                            <div className="col-span-3">
                                                                <MiniPurple onClick={() => changeOle1i(index, 3)}>{ole[3]}</MiniPurple>
                                                            </div>
                                                        </div>
                                                    </th>


                                                )
                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="rounded w-1/3 my-10" style={{ boxSizing: 'border-box' }}>
                                <table style={{ tableLayout: 'fixed', width: '100%' }}>
                                    <thead>
                                        <tr>
                                            <th style={{ padding: '2px', width: '15.5%' }}></th>
                                            {dientes1d.map((diente, index) => (
                                                <th key={index} className="border-black border rounded" style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
                                                    <DienteLock onClick={() => { cambioDientes1d(index) }}>{diente}</DienteLock>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>
                                            {ole1d.map((ole, index) => (
                                                dientes1d[index][1] ? (
                                                    <th key={index} className="border-black border rounded">
                                                        <div></div>
                                                    </th>
                                                ) : (
                                                    <th key={index} className="border-black border rounded p-1">
                                                        <div className="grid grid-rows-3 grid-cols-3 gap-1">
                                                            <div className="col-span-3">
                                                                <MiniPurple onClick={() => changeOle1d(index, 0)}>{ole[0]}</MiniPurple>
                                                            </div>
                                                            <div className="col-span-1">
                                                                <MiniPurple onClick={() => changeOle1d(index, 1)}>{ole[1]}</MiniPurple>
                                                            </div>
                                                            <div className="col-span-2">
                                                                <MiniPurple onClick={() => changeOle1d(index, 2)} className="mx-4">{ole[2]}</MiniPurple>  {/* Añadido margen derecho */}
                                                            </div>
                                                            <div className="col-span-3">
                                                                <MiniPurple onClick={() => changeOle1d(index, 3)}>{ole[3]}</MiniPurple>
                                                            </div>
                                                        </div>
                                                    </th>


                                                )
                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>



                        </div>
                        <div className="flex flex-row" style={{ justifyContent: 'center' }}>


                            {/*segunda TABLA IZQUIERDA-----------------------------------------------------------   */}
                            <div className="rounded w-1/3 my-10" style={{ boxSizing: 'border-box' }}>
                                <table style={{ tableLayout: 'fixed', width: '100%' }}>
                                    <thead>
                                        <tr>
                                            <th style={{ padding: '2px', width: '15.5%' }}></th>
                                            {dientes2i.map((diente, index) => (
                                                <th key={index} className="border-black border rounded" style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
                                                    <DienteLock onClick={() => { cambioDientes2i(index) }}>{diente}</DienteLock>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}>Inferior</th>
                                            {ole2i.map((ole, index) => (
                                                dientes2i[index][1] ? (
                                                    <th key={index} className="border-black border rounded">
                                                        <div></div>
                                                    </th>
                                                ) : (
                                                    <th key={index} className="border-black border rounded p-1">
                                                        <div className="grid grid-rows-3 grid-cols-3 gap-1">
                                                            <div className="col-span-3">
                                                                <MiniPurple onClick={() => changeOle2i(index, 0)}>{ole[0]}</MiniPurple>
                                                            </div>
                                                            <div className="col-span-1">
                                                                <MiniPurple onClick={() => changeOle2i(index, 1)}>{ole[1]}</MiniPurple>
                                                            </div>
                                                            <div className="col-span-2">
                                                                <MiniPurple onClick={() => changeOle2i(index, 2)} className="mx-4">{ole[2]}</MiniPurple>  {/* Añadido margen derecho */}
                                                            </div>
                                                            <div className="col-span-3">
                                                                <MiniPurple onClick={() => changeOle2i(index, 3)}>{ole[3]}</MiniPurple>
                                                            </div>
                                                        </div>
                                                    </th>


                                                )
                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="rounded w-1/3 my-10" style={{ boxSizing: 'border-box' }}>
                                <table style={{ tableLayout: 'fixed', width: '100%' }}>
                                    <thead>
                                        <tr>
                                            <th style={{ padding: '2px', width: '15.5%' }}></th>
                                            {dientes2d.map((diente, index) => (
                                                <th key={index} className="border-black border rounded" style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
                                                    <DienteLock onClick={() => { cambioDientes2d(index) }}>{diente}</DienteLock>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th style={{ textAlign: 'right', padding: '2px', width: '12.5%', fontWeight: 'bold', fontSize: '1.2em' }}></th>
                                            {ole2d.map((ole, index) => (
                                                dientes2d[index][1] ? (
                                                    <th key={index} className="border-black border rounded">
                                                        <div></div>
                                                    </th>
                                                ) : (
                                                    <th key={index} className="border-black border rounded p-1">
                                                        <div className="grid grid-rows-3 grid-cols-3 gap-1">
                                                            <div className="col-span-3">
                                                                <MiniPurple onClick={() => changeOle2d(index, 0)}>{ole[0]}</MiniPurple>
                                                            </div>
                                                            <div className="col-span-1">
                                                                <MiniPurple onClick={() => changeOle2d(index, 1)}>{ole[1]}</MiniPurple>
                                                            </div>
                                                            <div className="col-span-2">
                                                                <MiniPurple onClick={() => changeOle2d(index, 2)} className="mx-4">{ole[2]}</MiniPurple>  {/* Añadido margen derecho */}
                                                            </div>
                                                            <div className="col-span-3">
                                                                <MiniPurple onClick={() => changeOle2d(index, 3)}>{ole[3]}</MiniPurple>
                                                            </div>
                                                        </div>
                                                    </th>


                                                )
                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>



                        </div>
                    </WhiteWindow>
                </OfficialCard>
            </Caja>
        </>
    )
}

