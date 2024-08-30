import { useLocation } from "react-router-dom";
import logoGumppy from "../images/logoGumppy.png"
import { Caja } from "../components/ui/Caja";
import { Subtitulo } from "../components/ui/Subtitulo";
import { OfficialCard } from "../components/ui/OfficialCard";
import { Fila } from "../components/ui/Fila";
import { Textorosa } from "../components/ui/Textorosa";
import { usePeriodontograma } from "../context/periodontogramaContext";
import { useEffect, useState } from "react";
import { TarjetaPerio } from "../components/ui/TarjetaPerio";

export function ListaPerio() {
    const location = useLocation();
    const paciente = location.state;

    const { periodontograma, getPeriodontogramas } = usePeriodontograma();

    useEffect(() => {
        getPeriodontogramas(paciente._id);
    }, []);

    const periodontogramasOrdenados = periodontograma.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

    return (
        <>
            <Caja>
                <Subtitulo>EXAMENES REALIZADOS</Subtitulo>
                <div className="grid grid-cols-3 gap-6">
                    <div></div>
                    <OfficialCard>

                        <h1 className="text-xl font-bold" style={{ paddingBottom: "30px" }}>Información</h1>
                        <Fila>
                            <Textorosa>Nombre:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">{paciente.nomPac} {paciente.apellidoPac}</h1>
                        </Fila>

                        <Fila>
                            <Textorosa>RUT:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">{paciente.rutPac}</h1>
                        </Fila>
                        <Fila>
                            <Textorosa>Nacionalidad:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">{paciente.nacionalidadPac}</h1>
                        </Fila>
                        <Fila>
                            <Textorosa>Fecha de nacimiento:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto"> {new Date(paciente.fecNacPac).toLocaleDateString('es-ES', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                            })}</h1>
                        </Fila>
                        <Fila>
                            <Textorosa>Género:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">{paciente.sexo}</h1>
                        </Fila>



                    </OfficialCard>
                    <div></div>
                </div>

                <div>{periodontogramasOrdenados.length === 0 && (
                    <div className="text-black">nada q ver aqui</div>
                )}</div>
                {periodontogramasOrdenados.map((perio, index) => (
                    <TarjetaPerio periodontograma= {perio} paciente={paciente} key={index}/>
                        
                 
                ))}
            </Caja>

        </>
    )
}