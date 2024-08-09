import logo from "../images/logo.png"
import { useEffect } from "react";
import { usePacientes } from "../context/pacienteContext";
import { TaskCard } from "../components/tasks/TaskCard";
import { ImFileEmpty } from "react-icons/im";



export function PacientesPage() {


    const { pacientes, getPacientes } = usePacientes();

    useEffect(() => {
        getPacientes();
    }, []);

    return (
        <>
            <div className="mb-16 color: black border rounded bg-white" style={{ color: 'black ', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', borderColor: '#fc9099', borderWidth: '10px', padding: '0' }}>


                {pacientes.length === 0 && (
                    <div className="flex justify-center items-center p-10">
                        <div>
                            <ImFileEmpty className="text-8xl text-gray-400 m-auto my-2" />
                            <h1 className="font-bold text-xl">
                                Aun no tiene pacientes asignados
                            </h1>
                        </div>
                    </div>
                )}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {pacientes.map((paciente, index) => (
                        <div key={index}>
                            <h1>{paciente.nomPac}</h1>
                            <h2>{paciente.fecNacPac}</h2>
                        </div>
                    ))}
                </div>





            </div>

        </>
    )
}