import { ButtonLink } from "../ui"
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';



export function TarjetaPaciente({ paciente }) {


    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/probando-paciente', { state: paciente });
    };

    return (
        <>
                <div id={paciente.rutPac} className=" text-black mt-3  p-10 rounded-3xl shadow-lg" style={{ background: '#f87a85', width: "100%", color: "white", borderColor: '#fc9099', borderWidth: '10px', boxShadow: '5px 5px 10px rgba(0, 0 , 0, 0.5)', cursor: 'pointer' }}
                    onMouseOver={(e) => {
                        document.getElementById(paciente.rutPac).style.background = 'rgba(21, 62, 134, 0.5)';
                    }}
                    onMouseOut={(e) => {
                        document.getElementById(paciente.rutPac).style.background = '#f87a85';
                    }}
                    onClick={handleClick}
                    >

                    <header className="rounded-3xl p-2 mb-2 flex flex-auto" style={{ background: "#fc9099", display: "flex", }}>
                        <h1 className="text-2xl font-bold mx-3">{paciente.nomPac}</h1>
                    </header>

                    <div className="grid grid-cols-3 mt-7 mx-6">
                        <div>

                            <p><b>RUT: </b>{paciente.rutPac}</p>
                            <p> <b>Fecha de Nacimiento: </b>
                                {paciente.fecNacPac &&
                                    new Date(paciente.fecNacPac).toLocaleDateString("es-ES", {

                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                            </p>
                            <p><b>Email: </b>{paciente.emailPac}</p>
                            <p><b>Telefono: +569 </b>{paciente.telPac}</p>

                        </div>
                        {paciente.descripcion == "" ? (
                            <div></div>

                        ) : (
                            <div className="mx-20" style={{
                                overflowWrap: 'break-word',
                                flexWrap: 'wrap',
                            }}>
                                <p><b>Descripcion:  </b>{paciente.descripcion}</p>

                            </div>
                        )}

                        <div>



                        </div>





                    </div>



                </div>
          
        </>
    )


}