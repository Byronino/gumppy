import { WhiteWindow } from "./WhiteWindow";
import { OfficialCard } from "./OfficialCard";
import place from "../../images/place.png"
import anadir from "../../images/anadir.png"
import formulario from "../../images/formulario.png"
import ficha from "../../images/ficha.png"
import opcion from "../../images/opcion.png"


export function TutoPaciente() {
    return (
        <div className="mt-6 text-justify">

            <div className="text-xl p-6">
                <OfficialCard>
                    <h1 className="text-xl font-bold " style={{ paddingBottom: "12px" }}>Guia paso a paso

                    </h1>
                    <div className="grid grid-cols-2 gap-10 mt-6">
                        <div>
                        GUMPPY permite gestionar y almacenar los datos de los pacientes, con el objetivo de facilitar los análisis de los periodontogramas. 

                        </div>
                        <img className="mx-auto my-auto rounded-xl" src={place} />
                    </div>
                </OfficialCard>
                <OfficialCard>
                    <h1 className="text-xl font-bold " style={{ paddingBottom: "12px" }}>Añadir pacientes
                    </h1>
                    <div className="grid grid-cols-2 gap-10 mt-6">
                        <div>
                        En primer lugar se deben añadir los pacientes a la plataforma, para ello clickear en la barra de tareas la opcion de añadir paciente. 

                        </div>
                        <img className="mx-auto my-auto rounded-xl" src={anadir} />
                    </div>
                    <div className="grid grid-cols-2 gap-10 mt-6">
                        <div>
                        Luego se deben registrar los datos del paciente respectivo. <br /><br />
                        La información correspondiente a la primera tarjeta es obligatoria.<br /><br />
                        La segunda tarjeta incluye datos referentes a los hábitos del paciente. <br /><br />
                        La tercera tarjeta incluye información sobre las patologías presentes en el paciente, las cuales son importantes a la hora de analizar la evolución del mismo. <br /><br />
                        Finalmente se incluye una sección para agregar comentarios extra y el boton para guardar.


                        </div>
                        <img className="mx-auto my-auto rounded-xl" src={formulario} />
                    </div>
                </OfficialCard>
                <OfficialCard>
                    <h1 className="text-xl font-bold " style={{ paddingBottom: "12px" }}>Gestión del paciente

                    </h1>
                    <div className="grid grid-cols-2 gap-10 mt-6">
                        <div>
                        Luego de crear el perfil del paciente se podrá acceder a su ficha, en la cual se podrán visualizar los datos previamente ingresados. <br /><br />
                        Además se cuenta con la opción de modificar los datos del paciente y añadir periodontogramas. (Para mayor informacion visitar el apartado de periodontograma). <br /><br />
                        Una vez que el paciente cuente con al menos un periodontograma asociado, se desbloquearán dos nuevas opciones. 


                        </div>
                        <img className="mx-auto my-auto rounded-xl" src={ficha} />
                    </div>
                    <div className="grid grid-cols-2 gap-10 mt-6">
                        <div>
                        La opción de ver exámenes despliega una lista con todos los periodontogramas asociados al paciente respectivo en orden cronológico.<br /><br />
                        Por otra parte la opción de dashboard despliega una serie de gráficas creadas a partir de los datos extraidos de los periodontogramas del paciente. (Para mayor informacion visitar el apartado de dashboard). 


                        </div>
                        <img className="mx-auto my-auto rounded-xl" src={opcion} />
                    </div>
                </OfficialCard>
            </div>
        </div>
    )

}