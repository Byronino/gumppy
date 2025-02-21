
import logo from "../images/logo.png"
import { useLocation } from 'react-router-dom';
import { ButtonLink } from "../components/ui";
import { Caja } from "../components/ui/Caja";
import { OfficialCard } from "../components/ui/OfficialCard";
import { Subtitulo } from "../components/ui/Subtitulo";
import { Fila } from "../components/ui/Fila";
import { Textorosa } from "../components/ui/Textorosa";
import { useNavigate } from 'react-router-dom';
import { ButtonTest } from "../components/ui/ButtonTest";
import { useEffect } from "react";
import { ButtonLink2 } from "../components/ui/ButtonLink2";
import { usePeriodontograma } from "../context/periodontogramaContext";
import { FaUserEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaTeeth } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaVirus } from "react-icons/fa";
import { FaHandsWash } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";



export function ProbandoPacientes() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const location = useLocation();
    const paciente = location.state;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/lista-perio', { state: paciente });
    };

    const handleClickDo = () => {
        navigate('/crear_periodontograma', { state: paciente });
    };

    const handleClickDo2 = () => {
        navigate('/dashboard', { state: paciente });
    };


    const handleMouseOver = () => {
        setHover(true);
    };

    const handleMouseOut = () => {
        setHover(false);
    };

    const { periodontograma, getPeriodontogramas } = usePeriodontograma();

    useEffect(() => {
        getPeriodontogramas(paciente._id);
    }, []);



    return (
        <>
            <Caja>
                <Subtitulo >FICHA DE PACIENTE</Subtitulo>

                <div className="grid grid-cols-2 gap-6">
                    <OfficialCard>

                        <h1 className="text-xl font-bold flex items-center gap-2" style={{ paddingBottom: "12px" }}>
                            <FaInfoCircle/>
                            Información
                        </h1>

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
                    <OfficialCard>
                        <div className="grid grid-cols-2 gap-6">
                            {periodontograma.length > 0 && (
                                <>
                                    <ButtonTest
                                        onClick={handleClick}
                                        className="flex items-center justify-center gap-2 px-4 py-2 text-lg font-medium"
                                    >
                                        <FaEye className="text-xl relative top-[1px]" />
                                        VER EXÁMENES
                                    </ButtonTest>
                                    <ButtonTest
                                        onClick={handleClickDo2}
                                        className="flex items-center justify-center gap-2 px-4 py-2 text-lg font-medium"
                                    >
                                        <FaChartBar className="text-xl relative top-[1px]" />
                                        VER DASHBOARD
                                    </ButtonTest>



                                </>
                            )}

                            <ButtonTest
                                onClick={handleClickDo}
                                className="flex items-center justify-center gap-2 px-4 py-2 text-lg font-medium"
                            >
                                <FaTeeth className="text-xl relative top-[1px]" />
                                CREAR PERIODONTOGRAMA
                            </ButtonTest>
                            <ButtonLink2 to={`/pacientes/${paciente._id}`}>
                                <FaEdit className="text-xl relative top-[1px]" />
                                EDITAR PACIENTE
                            </ButtonLink2>


                        </div>




                    </OfficialCard>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <OfficialCard>
                    <h1 className="text-xl font-bold flex items-center gap-2" style={{ paddingBottom: "12px" }}>
                            <FaHandsWash/>
                            Higiene
                        </h1>
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

                        

                        <h1 className="text-xl font-bold mt-6 flex items-center gap-2" style={{ paddingBottom: "12px" }}><FaCalendarAlt/>Hábitos</h1>
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
                        <h1 className="text-xl font-bold mt-6 flex items-center gap-2" style={{ paddingBottom: "12px" }}><FaPlusCircle />
                        Otros</h1>
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
                    <h1 className="text-xl font-bold flex items-center gap-2" style={{ paddingBottom: "12px" }}>
                            <FaVirus/>
                            Patologías
                        </h1>
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
                    {paciente.observaciones ? (
                        <h1 className="text-xs block my-1  font-roboto">{paciente.observaciones}</h1>

                    ) : (
                        <h1 className="text-xs block my-1  font-roboto">No registra</h1>

                    )}


                </OfficialCard>







            </Caja>
        </>
    )
}