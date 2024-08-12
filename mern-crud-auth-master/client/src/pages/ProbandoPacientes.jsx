
import logo from "../images/logo.png"
import { useLocation } from 'react-router-dom';


export function ProbandoPacientes(){

    const location = useLocation();
    const paciente = location.state;

    return(
        <>
        <div>
              <h1>{paciente.nomPac}</h1>
              <h1>{paciente.emailPac}</h1>
              <h1>{paciente.rutPac}</h1>
              <h1>{paciente.descripcion}</h1>
              <h1>{paciente._id}</h1>

        <h1>sadasdads</h1>
        <div><img src={logo} width="100" height="100" /></div>

            
        </div>
        </>
    )
}