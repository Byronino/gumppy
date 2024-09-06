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

                <header className="rounded-3xl p-1 mb-2 flex flex-auto justify-between" style={{ background: "#fc9099", display: "flex", }}>
                    <h1 className="text-xl font-roboto mx-3">{paciente.nomPac} {paciente.apellidoPac}</h1>
                    <h1 className="text-xl font-roboto mx-3">{new Date(paciente.updatedAt).toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                    })}</h1>

                </header>

                <div className="grid grid-cols-3 mt-7 mx-6">
                    <div>

                        <p><b>RUT: </b>{paciente.rutPac}</p>


                    </div>

                    <div>



                    </div>





                </div>



            </div>

        </>
    )


}