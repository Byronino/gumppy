
import logo from "../images/logo.png"
import { useLocation } from 'react-router-dom';
import { ButtonLink } from "../components/ui";
import { Caja } from "../components/ui/Caja";
import { OfficialCard } from "../components/ui/OfficialCard";
import { Subtitulo } from "../components/ui/Subtitulo";
import { Fila } from "../components/ui/Fila";
import { Textorosa } from "../components/ui/Textorosa";

export function ProbandoPacientes() {

    const location = useLocation();
    const paciente = location.state;

    return (
        <>
            <Caja>
                <Subtitulo>FICHA DE PACIENTE</Subtitulo>

                <div className="grid grid-cols-2 gap-6">
                    <OfficialCard>

                        <h1 className="text-xl font-bold" style={{ paddingBottom: "30px" }}>Información</h1>
                        <Fila>
                            <Textorosa>Nombre:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">{paciente.nomPac} {paciente.apellidoPac}</h1>
                        </Fila>

                        <Fila>
                            <Textorosa>RUT:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">{paciente.rutPac}</h1>
                        </Fila>
                        <Fila>
                            <Textorosa>Nacionalidad:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">{paciente.nacionalidadPac}</h1>
                        </Fila>
                        <Fila>
                            <Textorosa>Fecha de nacimiento:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto"> {new Date(paciente.fecNacPac).toLocaleDateString('es-ES', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                            })}</h1>
                        </Fila>
                        <Fila>
                            <Textorosa>Género:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">{paciente.sexo}</h1>
                        </Fila>
                        <Fila>
                            <Textorosa>Dirección:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">{paciente.comunaPac}, {paciente.regionPac}</h1>
                        </Fila>
                        <Fila>
                            <Textorosa>Correo electrónico:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">{paciente.emailPac}</h1>
                        </Fila>
                        <Fila>
                            <Textorosa>N° Teléfono:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">+569 {paciente.telPac}</h1>
                        </Fila>



                    </OfficialCard>
                    <OfficialCard></OfficialCard>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <OfficialCard>
                        <h1 className="text-xl font-bold" style={{ paddingBottom: "30px" }}>Higiene</h1>
                        <Fila>
                            <Textorosa>Frecuencia de cepillado:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">{paciente.nCepillados} veces al día</h1>
                        </Fila>
                        <Fila>
                            <Textorosa>Limpieza interdental:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">
                                {paciente.limpiezaInterdental ? ("si") : ("no")}
                            </h1>
                        </Fila>
                        <Fila>
                            <Textorosa>Uso de colutorio:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">
                                {paciente.colutorio ? ("si") : ("no")}
                            </h1>
                        </Fila>
                        <Fila>
                            <Textorosa>Tipo de cepillo:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">Cepillo {paciente.tipoCepillo}</h1>
                        </Fila>



                        <h1 className="text-xl font-bold mt-6" style={{ paddingBottom: "30px" }}>Hábitos</h1>
                        <Fila>
                            <Textorosa>Tábaco:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">{paciente.tabaco}</h1>
                        </Fila>
                        <Fila>
                            <Textorosa>Drogas:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">{paciente.drogas}</h1>
                        </Fila>
                        <Fila>
                            <Textorosa>Alcohol:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">
                                {paciente.alcohol ? ("si") : ("no")}
                            </h1>
                        </Fila>
                        <h1 className="text-xl mt-6 font-bold" style={{ paddingBottom: "30px" }}>Otros</h1>
                        <Fila>
                            <Textorosa>Medicamentos:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">{paciente.medicamentos}</h1>
                        </Fila>
                        <Fila>
                            <Textorosa>Alergias:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">{paciente.alergia}</h1>
                        </Fila>
                        <Fila>
                            <Textorosa>Embarazo:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">
                                {paciente.embarazo ? ("si") : ("no")}
                            </h1>
                        </Fila>
                        <Fila>
                            <Textorosa>Lactancia:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">
                                {paciente.lactancia ? ("si") : ("no")}
                            </h1>
                        </Fila>

                    </OfficialCard>
                    <OfficialCard>
                        <h1 className="text-xl font-bold" style={{ paddingBottom: "30px" }}>Patologías</h1>
                        <Fila>
                            <Textorosa>Cardiovascular:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">{paciente.cardiovascular}</h1>
                        </Fila>
                        <Fila>
                            <Textorosa>Pulmonar:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">{paciente.pulmonar}</h1>
                        </Fila>
                        <Fila>
                            <Textorosa>Hematologico:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">{paciente.hematologico}</h1>
                        </Fila>
                        <Fila>
                            <Textorosa>Gastrointestinal:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">{paciente.gastrointestinal}</h1>
                        </Fila>
                        <Fila>
                            <Textorosa>Genitourinario:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">{paciente.genitourinario}</h1>
                        </Fila>
                        <Fila>
                            <Textorosa>Endocrino:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">{paciente.endocrino}</h1>
                        </Fila>
                        <Fila>
                            <Textorosa>Musculoesqueletal:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">{paciente.musculoEsqueletal}</h1>
                        </Fila>
                        <Fila>
                            <Textorosa>Sistema Inmune:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">{paciente.sistemaInmune}</h1>
                        </Fila>
                        <Fila>
                            <Textorosa>Dermatológico:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">{paciente.dermatologico}</h1>
                        </Fila>
                        <Fila>
                            <Textorosa>Otros:</Textorosa>
                            <h1 className="text-xs block my-1  font-roboto">{paciente.otros}</h1>
                        </Fila>


                    </OfficialCard>
                </div>
                <OfficialCard>
                <h1 className="text-xl font-bold" style={{ paddingBottom: "30px" }}>Observaciones / Intervenciones Quirúrgicas / Alertas Médicas</h1>
                    {paciente.observaciones?(
                        <h1 className="text-xs block my-1  font-roboto">{paciente.observaciones}</h1>

                    ):(
                        <h1 className="text-xs block my-1  font-roboto">No registra</h1>

                    )}
                    

                </OfficialCard>



                <ButtonLink to={`/pacientes/${paciente._id}`}>Edit</ButtonLink>
                <div><img src={logo} width="100" height="100" /></div>



            </Caja>
        </>
    )
}