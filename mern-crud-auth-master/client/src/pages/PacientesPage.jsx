import logo from "../images/logo.png"
import { useEffect } from "react";
import { usePacientes } from "../context/pacienteContext";
import { TaskCard } from "../components/tasks/TaskCard";
import { ImFileEmpty } from "react-icons/im";
import { TarjetaPaciente } from "../components/ui/TarjetaPaciente";
import React, { useState } from 'react';


export function PacientesPage() {

    const { pacientes, getPacientes } = usePacientes();
    const [search, setSearch] = useState('');
    const [filteredPacientes, setFilteredPacientes] = useState([]);

    useEffect(() => {
        getPacientes();
    }, []);

    useEffect(() => {
        setFilteredPacientes(pacientes);
    }, [pacientes]);

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearch(searchTerm);
        const filtered = pacientes.filter((paciente) => {
            return (
                paciente.nomPac.toLowerCase().includes(searchTerm) ||
                paciente.fecNacPac.toLowerCase().includes(searchTerm)
            );
        });
        setFilteredPacientes(filtered);
    };


    return (
        <>
            <div className="mb-16 color: black border rounded bg-white" style={{  minHeight: '500px',color: 'black ', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', borderColor: '#fc9099', borderWidth: '10px', padding: '0',boxShadow: '5px 5px 10px rgba(0, 0 , 0, 0.5)' }}>

            <div className="justify-center items-center p-5 " style={{ width: "50%" }}>
            <div className="px-4 py-2">
                    <input
                        type="search"
                        value={search}
                        onChange={handleSearch}
                        placeholder="Buscar por nombre"
                        style={{
                            width: "100%",
                            fontSize: 16,
                            padding: "10px 15px",
                            border: "1px solid #ccc",
                            borderRadius: 5,
                            color: "#333",
                            backgroundColor: "#f9f9f9",
                        }}
                        className="shadow-md"
                    />
                </div>

            </div>

               
               

                {filteredPacientes.length === 0 && (
                    <div className="flex justify-center items-center p-10 mt-3">
                        <div>
                            <ImFileEmpty className="text-8xl text-gray-400 m-auto my-2" />
                            <h1 className="font-bold text-xl">
                                Aun no tiene pacientes asignados
                            </h1>
                        </div>
                    </div>
                )}
                <div className="justify-center items-center p-5 " style={{ width: "100%" }}>
                    <div >
                        {filteredPacientes.map((paciente, index) => (
                            <TarjetaPaciente paciente={paciente} key={paciente._id} />
                        ))}
                    </div>
                </div>





            </div>

        </>
    )
}