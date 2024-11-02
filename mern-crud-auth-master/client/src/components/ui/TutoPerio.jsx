import { WhiteWindow } from "./WhiteWindow";
import datos from "../../images/datos.png"
import perio1 from "../../images/perio1.png"
import perio2 from "../../images/perio2.png"
import perio3 from "../../images/perio3.png"
import { OfficialCard } from "./OfficialCard";

export function TutoPerio() {
    return (

        <div className="mt-6 text-justify">

            <div className="text-xl p-6">
                <OfficialCard>
                    <h1 className="text-xl font-bold " style={{ paddingBottom: "12px" }}>Periodontograma modo invitado</h1>
                    Gumppy te permite crear periodontogramas, tanto si estas logeado como no. La versión de invitados es más limitada al no cargar automáticamente los datos del paciente, asi como permitir analizar los datos a través del dashboard.

                    
                    <div className="grid grid-cols-2 gap-10 mt-6">
                        <div>
                        <h1 className="text-xl font-bold mt-9" style={{ paddingBottom: "12px" }}>Periodontograma Completo</h1>
                            Al contar previamente con los datos del paciente, no será necesario llenarlos uno por uno. Estos se dispondrán automáticamente.
                        </div>
                        <img className="mx-auto my-auto rounded-xl" src={datos} />
                    </div>
                </OfficialCard>
                <OfficialCard>
                    <div className="grid grid-cols-2 gap-10 mt-5">
                        <div className="mt-3">
                            Al hacer clic en el número de cualquier diente desaparecerán todos sus valores y su imagen se tachará en el gráfico.  <br /><br />
                            <b>Movilidad: </b> Ingresa manualmente un valor para indicar el indice de movimiento del diente.  Siendo grado 0 el considerado fisiológico, y el grado 3 el más severo. <br /><br />
                            <b>Implante: </b> Indica la utilización de un material aloplástico dentro del hueso maxilar, se debe clickear en caso de que la pieza dental haya sido reemplazada. Cambiando el color del indicador a verde.
                            <br /><br />
                            <b>Furca:  </b>Al hacer click el valor aumentará en una unidad, indicando el grado de la furca, 1, 2 o 3 respectivamente.   <br /><br />




                        </div>
                        <img className=" mx-auto my-auto rounded-xl w-96" src={perio1} />
                    </div>
                </OfficialCard>
                <OfficialCard>
                    <div className="grid grid-cols-2 gap-10 ">
                        <div>
                            <b>Análisis por sectores:  </b>
                            Estos datos serán registrados en seis áreas por diente (tres áreas vestibulares y tres orales, respectivamente).
                            <br /><br />
                            <div className="ml-10">
                                <ul class="list-disc ml-5">
                                    <li class="mb-2">
                                        <b>Bleeding on probing:  </b> Por su traducción, sangrado al sondaje. Indica la existencia o ausencia de sangrado a la hora de realizar el sondaje.</li>
                                    <li class="mb-2">
                                        <b>Placa: </b>

                                    </li>
                                    <li class="mb-2">
                                        <b>Caries Radicular:</b>
                                    </li>
                                    <li class="mb-2">
                                        <b>Restauración mal ajustada:</b>
                                    </li>
                                    <li class="mb-2">
                                        <b>Supuración:</b>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <img className="mx-auto my-auto rounded-xl w-96 " src={perio2} />
                    </div>
                </OfficialCard>
                <OfficialCard>
                    <div className="grid grid-cols-2 gap-10 ">
                        <div>
                        <div className="ml-10">
                                <ul class="list-disc ml-5">
                                    <li class="mb-2">
                                        <b>Margen gingival:  </b> Corresponde a la distancia en milímetros que existe entre la encía y el límite amelocementario. Su valor es positivo si se encuentra coronal al LAC, y negativo si se encuentra apical al LAC. 
                                        </li>
                                    <li class="mb-2">
                                        <b>Profundidad al sondaje: </b>Corresponde a la distancia que existe entre el margen gingival  hasta la base del surco o saco periodontal.

                                    </li>
                                    <li class="mb-2">
                                        <b>Nivel de inserción clínica (NIC):
                                        </b> Corresponde a la diferencia entre la profundidad al sondaje y el margen gingival. Este valor se calcula automáticamente.

                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <img className="mx-auto my-auto rounded-xl " src={perio3} />
                    </div>
                </OfficialCard>

            </div>
        </div>

    )
}