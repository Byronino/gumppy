
import logo from "../images/logo.png"
import { useLocation } from 'react-router-dom';
import { ButtonLink } from "../components/ui";

export function ProbandoPacientes() {

    const location = useLocation();
    const paciente = location.state;

    return (
        <>
            <div className="mb-3 color: black border rounded bg-white" style={{   minHeight: '500px',color: 'black ', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', borderColor: '#fc9099', borderWidth: '10px', padding: '0' }}>

                <div>
                    <h1>{paciente.nomPac}</h1>
                    <h1>{paciente.emailPac}</h1>
                    <h1>{paciente.rutPac}</h1>
                    <h1>{paciente.descripcion}</h1>
                    <h1>{paciente._id}</h1>

                    <h1>sadasdads</h1>
                    <ButtonLink to={`/pacientes/${paciente._id}`}>Edit</ButtonLink>
                    <div><img src={logo} width="100" height="100" /></div>


                </div>
            </div>
        </>
    )
}