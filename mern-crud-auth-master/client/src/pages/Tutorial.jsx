import { Caja } from "../components/ui/Caja"
import { WhiteWindow } from "../components/ui/WhiteWindow"
import { Subtitulo } from "../components/ui/Subtitulo"
import { OfficialCard } from "../components/ui/OfficialCard"
import { useState } from "react"
import { TutoPerio } from "../components/ui/TutoPerio"
import { TutoPaciente } from "../components/ui/TutoPaciente"

export function Tutorial() {


    const selector = ["Gestor de pacientes", "Periodontograma", "Dashboard"]
    const [indiceSeleccionado, setIndiceSeleccionado] = useState(0);
    const handleClick = (indice) => {
        setIndiceSeleccionado(indice);
    };

    return (
        <Caja>

            <Subtitulo>Cómo utilizar Gumppy</Subtitulo>

            <OfficialCard>
                <div className="grid grid-cols-3 gap-2">
                    {selector.map((valor, indice) => (
                        <div key={indice} className="flex items-center justify-center">
                            <button className={`bg-[#f87a85] hover:bg-[#f95a6a] text-white font-bold py-2 px-4 rounded ${indice === indiceSeleccionado ? 'bg-cyan-500' : ''} fixed-size-button`}
                                onClick={() => handleClick(indice)}>
                                {valor}
                            </button>
                        </div>
                    ))}
                </div>
                {indiceSeleccionado ===0 && (
                    <TutoPaciente></TutoPaciente>
                )}
                {indiceSeleccionado ===1 && (
                    <TutoPerio></TutoPerio>
                )}
                
            </OfficialCard>

        </Caja>
    )
} 