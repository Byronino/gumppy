import { WhiteWindow } from "./WhiteWindow";
import datos from "../../images/datos.png"
import perio1 from "../../images/perio1.png"
import perio2 from "../../images/perio2.png"
import perio3 from "../../images/perio3.png"
import { OfficialCard } from "./OfficialCard";
import graficoGlobal from "../../images/graficoGlobal.png"
import graficoDiente from "../../images/graficoDiente.png"
import selector from "../../images/selectorDental.png"
import historial from "../../images/historial.png"

export function TutoDashboard() {
    return (
        <div className="mt-6 text-justify">

            <div className="text-xl p-6">
                <OfficialCard>
                    <h1 className="text-xl font-bold " style={{ paddingBottom: "12px" }}>Dashboard</h1>
                    La función de dashboard permite al profesional visualizar los datos históricos del paciente en forma centralizada y sencilla, a través de gráficos que reflejan la evolución del paciente respecto a una serie de variables estudiadas previamente. (Para acceder a esta sección es necesario previamente tener registrado como mínimo a un paciente y adjuntarle al menos un periodontograma.)
                    <br /><br />
                    Las variables a analizar se dividen en 3 tipos: Variables globales, por pieza dental, y el historial de piezas perdidas.
                </OfficialCard>
                <OfficialCard>
                    <h1 className="text-xl font-bold " style={{ paddingBottom: "12px" }}>Gráficas globales

                    </h1>
                    <div className="grid grid-cols-2 gap-10 mt-6">
                        <div>
                            Corresponden principalmente a aquellas que se analizan a nivel general de la boca del paciente, entre los que se encuentran:
                            <ul class="list-disc ml-5 mb-4">
                                <li class="mb-2 mt-2">El número de sitios con profundidad al sondaje mayor a 4 y 6 milímetros respectivamente</li>
                                <li class="mb-2">Cambios porcentuales en el tiempo de sangrado al sondaje, placa, caries radicular, restauración mal ajustada y supuración</li>
                                <li class="mb-2">Promedio general de profundidad al sondaje, margen gingival y nivel de inserción clínico</li>
                                <li class="mb-2">Cantidad de dientes e implantes </li>
                            </ul>
                            Todas estas gráficas están en función del tiempo.

                        </div>
                        <img className="mx-auto my-auto rounded-xl" src={graficoGlobal} />
                    </div>
                </OfficialCard>
                <OfficialCard>
                    <h1 className="text-xl font-bold " style={{ paddingBottom: "12px" }}>Gráficas por diente

                    </h1>
                    <div className="grid grid-cols-2 gap-10 mt-6">
                        <div>
                            Corresponde a aquellas que referencian a una única pieza dental, para lo cual se cuenta con un selector para indicar el diente que se desea analizar.


                        </div>
                        <img className="mx-auto my-auto rounded-xl" src={selector} />
                    </div>

                    <div className="grid grid-cols-2 gap-10 mt-6">
                        <div>
                            Los gráficos disponibles son:
                            <ul class="list-disc ml-5 mb-4">
                                <li class="mb-2 mt-2">Movilidad en el tiempo</li>
                                <li class="mb-2 mt-2">Cambio de profundidad al sondaje en el tiempo</li>
                                <li class="mb-2 mt-2"> Variación de nivel de inserción en el tiempo</li>
                                <li class="mb-2 mt-2"> Movimiento de encía en el tiempo</li>
                            </ul>


                        </div>
                        <img className="mx-auto my-auto rounded-xl" src={graficoDiente} />
                    </div>
                </OfficialCard>
                <OfficialCard>
                    <h1 className="text-xl font-bold " style={{ paddingBottom: "12px" }}>Historial de dientes perdidos
                    </h1>
                    <div className="grid grid-cols-2 gap-10 mt-6">
                        <div>
                        Indica qué pieza y en qué fecha se produjo la pérdida del diente (o en qué sesión se registró aquella pérdida).



                        </div>
                        <img className="mx-auto my-auto rounded-xl" src={historial} />
                    </div>
                </OfficialCard>
            </div>
        </div>
    )

}