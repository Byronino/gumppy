import { WhiteWindow } from "./WhiteWindow";
import datos from "../../images/datos.png"

export function TutoPerio() {
    return (

        <div className="mt-6 text-justify">
            <h1 className="text-xl font-bold p-6" style={{ paddingBottom: "12px" }}>Periodontograma modo invitado</h1>
            <div className="text-xl p-6">
                Gumppy te permite crear periodontogramas, tanto si estas logeado como no. La versión de invitados es más limitada al no cargar automáticamente los datos del paciente, asi como permitir analizar los datos a través del dashboard.

                <h1 className="text-xl font-bold mt-9" style={{ paddingBottom: "12px" }}>Periodontograma Completo</h1>
                <div className="grid grid-cols-2 gap-2 ">
                    <div>
                        Al contar previamente con los datos del paciente, no será necesario llenarlos uno por uno. Estos se dispondrán automáticamente.
                    </div>
                    <img src={datos}  />
                </div>

                <div className="grid grid-cols-2 gap-2 ">
                    <div>
                        Al contar previamente con los datos del paciente, no será necesario llenarlos uno por uno. Estos se dispondrán automáticamente.
                    </div>
                    <img src={datos}  />
                </div>


            </div>
        </div>

    )
}