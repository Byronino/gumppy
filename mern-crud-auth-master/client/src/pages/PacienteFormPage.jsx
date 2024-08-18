
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../components/ui";
import { usePacientes } from "../context/pacienteContext";
import { Textarea } from "../components/ui/Textarea";
import { useForm } from "react-hook-form";
import { OfficialCard } from "../components/ui/OfficialCard";
import { Subtitulo } from "../components/ui/Subtitulo";
import ReactSwitch from 'react-switch';
import { Newselect } from "../components/ui/Newselect";

dayjs.extend(utc);



export function PacienteFormPage() {


    const { createPaciente, getPaciente, updatePaciente } = usePacientes();
    const navigate = useNavigate();
    const params = useParams();
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            if (params.id) {
                console.log("este es el id: " + params.id)
                updatePaciente(params.id, {

                    ...data,
                    fecNacPac: dayjs.utc(data.fecNacPac).format(),
                });
            } else {
                createPaciente({
                    ...data,
                    fecNacPac: dayjs.utc(data.fecNacPac).format(),
                });
            }

            navigate("/pacientes");
        } catch (error) {
            console.log(error);
            // window.location.href = "/";
        }
    };

    useEffect(() => {
        const loadPaciente = async () => {
            if (params.id) {
                const paciente = await getPaciente(params.id);
                setValue("nomPac", paciente.nomPac);
                setValue("apellidoPac", paciente.apellidoPac);
                setValue("rutPac", paciente.rutPac);
                setValue("nacionalidadPac", paciente.nacionalidadPac);
                setValue("fecNacPac", paciente.fecNacPac);
                setValue("comunaPac", paciente.comunaPac);
                setValue("regionPac", paciente.regionPac);
                setValue("emailPac", paciente.emailPac);
                setValue("telPac", paciente.telPac);
                setValue("nCepillados", paciente.nCepillados);
                setValue("limpiezaInterdental", paciente.limpiezaInterdental);
                setValue("colutorio", paciente.colutorio);
                setValue("tipoCepillo", paciente.tipoCepillo);

                setValue("tabaco", paciente.tabaco);
                setValue("drogas", paciente.drogas);
                setValue("alcohol", paciente.alcohol);
                setValue("medicamentos", paciente.medicamentos);
                setValue("alergia", paciente.alergia);
                setValue("embarazo", paciente.embarazo);
                setValue("lactancia", paciente.lactancia);

                setValue("cardiovascular", paciente.cardiovascular);
                setValue("pulmonar", paciente.pulmonar);
                setValue("nervioso", paciente.nervioso);
                setValue("hematologico", paciente.hematologico);
                setValue("gastrointestinal", paciente.gastrointestinal);
                setValue("genitourinario", paciente.genitourinario);
                setValue("endocrino", paciente.endocrino);
                setValue("musculoEsqueletal", paciente.musculoEsqueletal);
                setValue("sistemaInmune", paciente.sistemaInmune);
                setValue("dermatologico", paciente.dermatologico);
                setValue("otros", paciente.otros);
                setValue("observaciones", paciente.observaciones);

                
                


                setValue(
                    "fecNacPac",
                    paciente.fecNacPac ? dayjs(paciente.fecNacPac).utc().format("YYYY-MM-DD") : ""
                )
            }
        };
        loadPaciente();
    }, []);





    return (
        <>

            <div className="mb-3 color: black border rounded bg-white" style={{ color: 'black ', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', borderColor: '#fc9099', borderWidth: '10px', padding: '0', boxShadow: '5px 5px 10px rgba(0, 0 , 0, 0.5)' }}>

                <Subtitulo>Formulario Paciente</Subtitulo>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div >
                        <OfficialCard >
                            <h1 className="text-xl font-bold" style={{paddingBottom:"30px"}}>Información</h1>
                            <div className="grid grid-cols-2 gap-6">
                                <div >
                               
                                    <Label htmlFor="nomPac" id="nomPac-label">Nombre*</Label>
                                    <Input
                                        type="text"
                                        name="nomPac"
                                        placeholder="Nombre"
                                        {...register("nomPac")}
                                        autoFocus
                                    />
                                    {errors.nomPac && (
                                        <p className="text-red-500 text-xs italic">Porfavor ingrese el nombre </p>
                                    )}

                                    <Label htmlFor="apellidoPac" id="apellidoPac-label">Apellidos*</Label>
                                    <Input
                                        type="text"
                                        name="apellidoPac"
                                        placeholder="Apellidos"
                                        {...register("apellidoPac")}

                                    />
                                    {errors.apellidoPac && (
                                        <p className="text-red-500 text-xs italic">Porfavor ingrese el apellido</p>
                                    )}

                                    <Label htmlFor="rutPac" id="rutPac-label">RUT* </Label>
                                    <Input
                                        type="text"
                                        name="rutPac"
                                        placeholder="Ej: 12.345.678-9"
                                        {...register("rutPac")}

                                    />
                                    {errors.rutPac && (
                                        <p className="text-red-500 text-xs italic">Porfavor ingrese un rut correcto</p>
                                    )}

                                    <Label htmlFor="nacionalidadPac" id="nacionalidadPac-label">Nacionalidad* </Label>
                                    <Input
                                        type="text"
                                        name="nacionalidadPac"
                                        placeholder="Ej: Chilena, Argentina"
                                        {...register("nacionalidadPac")}

                                    />
                                    {errors.nacionalidadPac && (
                                        <p className="text-red-500 text-xs italic">Porfavor ingrese una nacionalidad</p>
                                    )}


                                </div>
                                <div>
                                    <Label htmlFor="fecNacPac" id="fecNacPac-label">Fecha de Nacimiento*</Label>
                                    <Input type="date" name="fecNacPac" {...register("fecNacPac")} />

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="comunaPac" id="comunaPac-label">Comuna*</Label>
                                            <Input
                                                type="text"
                                                name="comunaPac"
                                                placeholder="Comuna"
                                                {...register("comunaPac")}

                                            />
                                            {errors.telPac && (
                                                <p className="text-red-500 text-xs italic">Porfavor ingrese un telefono correcto</p>
                                            )}
                                        </div>
                                        <div>
                                            <Label htmlFor="regionPac" id="regionPac-label">Región*</Label>
                                            <Input
                                                type="text"
                                                name="regionPac"
                                                placeholder="Region"
                                                {...register("regionPac")}

                                            />
                                            {errors.telPac && (
                                                <p className="text-red-500 text-xs italic">Porfavor ingrese un telefono correcto</p>
                                            )}
                                        </div>

                                    </div>

                                    <Label htmlFor="emailPac" id="emailPac-label">Email*</Label>
                                    <Input
                                        type="text"
                                        name="emailPac"
                                        placeholder="email@dominio.extension"
                                        {...register("emailPac")}

                                    />
                                    {errors.emailPac && (
                                        <p className="text-red-500 text-xs italic">Porfavor ingrese un email correcto</p>
                                    )}



                                    <Label htmlFor="telPac" id="telPac-label">Telefono*</Label>
                                    <Input
                                        type="text"
                                        name="telPac"
                                        placeholder="+569 XXXXXXXX"
                                        {...register("telPac")}

                                    />
                                    {errors.telPac && (
                                        <p className="text-red-500 text-xs italic">Porfavor ingrese un telefono correcto</p>
                                    )}






                                </div>

                            </div>

                        </OfficialCard>

                        <OfficialCard>

                            <div className="mt-3 grid grid-cols-3 gap-6">

                                {/*primera columna*/}
                                <div>
                                    <h1 className="text-xl font-bold" style={{paddingBottom:"30px"}}>Higiene</h1>

                                    <Label htmlFor="nCepillados" id="nCepillados-label">Frecuencia cepillado</Label>
                                    <select
                                        name="nCepillados"
                                        {...register("nCepillados")}
                                    >
                                        <option value="0">0 veces al día</option>
                                        <option value="1">1 vez al día</option>
                                        <option value="2">2 veces al día</option>
                                        <option value="3">3 veces al día</option>
                                        <option value="4">Más de 3 veces al día</option>
                                    </select>

                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="limpiezaInterdental" id="limpiezaInterdental-label" style={{
                                            flexBasis: '150px',
                                            whiteSpace: 'nowrap'
                                        }}>Limpieza interdental</Label>
                                        <div style={{ width: '24px' }}>
                                            <Input
                                                type="checkbox"
                                                name="limpiezaInterdental"
                                                style={{
                                                    accentColor: '#e34453',
                                                    transform: 'scale(1.5)'
                                                }}
                                                {...register("limpiezaInterdental")}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="colutorio" id="colutorio-label" style={{
                                            flexBasis: '150px',
                                            whiteSpace: 'nowrap'
                                        }}>Uso de colutorio</Label>
                                        <div style={{ width: '24px' }}>
                                            <Input
                                                type="checkbox"
                                                name="colutorio"
                                                style={{
                                                    accentColor: '#e34453',
                                                    transform: 'scale(1.5)'
                                                }}
                                                {...register("colutorio")}
                                            />
                                        </div>
                                    </div>

                                    <Label htmlFor="tipoCepillo" id="tipoCepillo-label">Tipo de Cepillo</Label>
                                    <select
                                        name="tipoCepillo"
                                        {...register("tipoCepillo")}
                                    >
                                        <option value="0">cepillo weno</option>
                                        <option value="1">cepillo maomeno</option>
                                        <option value="2">cepillo malardo</option>
                                        <option value="3">cepillin</option>
                                        <option value="4">no uso</option>
                                    </select>

                                </div>
                                {/*segunda columna*/}
                                <div>
                                    <h1 className="text-xl font-bold" style={{paddingBottom:"30px"}}>Hábitos</h1>

                                    <Label htmlFor="tabaco" id="tabaco-label">Tabaco</Label>
                                    <select
                                        name="tabaco"
                                        {...register("tabaco")}
                                    >
                                        <option value="0">no fuma</option>
                                        <option value="1">fuma maomeno</option>
                                        <option value="2">fumamalardo</option>
                                        <option value="3">cepillin</option>
                                        <option value="4">no c</option>
                                    </select>

                                    <Label htmlFor="drogas" id="drogas-label">Tabaco</Label>
                                    <select
                                        name="drogas"
                                        {...register("drogas")}
                                    >
                                        <option value="0">no le hace</option>
                                        <option value="1">marihuana</option>
                                        <option value="2">cocaina</option>
                                        <option value="3">krokodile</option>
                                        <option value="4">fentanilo</option>
                                    </select>
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="alcohol" id="alcohol-label" style={{
                                            flexBasis: '150px',
                                            whiteSpace: 'nowrap'
                                        }}>Alcohol</Label>
                                        <div style={{ width: '24px' }}>
                                            <Input
                                                type="checkbox"
                                                name="alcohol"
                                                style={{
                                                    accentColor: '#e34453',
                                                    transform: 'scale(1.5)'
                                                }}
                                                {...register("alcohol")}
                                            />
                                        </div>
                                    </div>


                                </div>

                                {/*tercera columna*/}
                                <div>
                                    <h1 className="text-xl font-bold" style={{paddingBottom:"30px"}}>Otros</h1>

                                    <Label htmlFor="medicamentos" id="medicamentos-label">Medicamentos </Label>
                                    <Input
                                        type="text"
                                        name="medicamentos"
                                        placeholder="medicamentos"
                                        {...register("medicamentos")}

                                    />
                                    {errors.medicamentos && (
                                        <p className="text-red-500 text-xs italic">Porfavor ingrese una nacionalidad</p>
                                    )}

                                    <Label htmlFor="alergia" id="alergia-label">Alergias </Label>
                                    <Input
                                        type="text"
                                        name="alergia"
                                        placeholder="alergia"
                                        {...register("alergia")}

                                    />
                                    {errors.alergia && (
                                        <p className="text-red-500 text-xs italic">Porfavor ingrese una nacionalidad</p>
                                    )}

                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="embarazo" id="embarazo-label" style={{
                                            flexBasis: '150px',
                                            whiteSpace: 'nowrap'
                                        }}>Embarazo</Label>
                                        <div style={{ width: '24px' }}>
                                            <Input
                                                type="checkbox"
                                                name="embarazo"
                                                style={{
                                                    accentColor: '#e34453',
                                                    transform: 'scale(1.5)'
                                                }}
                                                {...register("embarazo")}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="lactancia" id="lactancia-label" style={{
                                            flexBasis: '150px',
                                            whiteSpace: 'nowrap'
                                        }}>Lactancia</Label>
                                        <div style={{ width: '24px' }}>
                                            <Input
                                                type="checkbox"
                                                name="lactancia"
                                                style={{
                                                    accentColor: '#e34453',
                                                    transform: 'scale(1.5)'
                                                }}
                                                {...register("lactancia")}
                                            />
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </OfficialCard>

                        <OfficialCard>
                            <h1 className="text-xl font-bold" style={{paddingBottom:"30px"}}>Patologías</h1>

                            <div className="mt-3 grid grid-cols-3 gap-3">
                                <div>
                                    <Label htmlFor="cardiovascular" id="cardiovascular-label">Cardiovascular</Label>
                                    <select
                                        name="cardiovascular"
                                        {...register("cardiovascular")}
                                    >
                                        <option value="0">no le hace</option>
                                        <option value="1">marihuana</option>
                                        <option value="2">cocaina</option>
                                        <option value="3">krokodile</option>
                                        <option value="4">fentanilo</option>
                                    </select>

                                    <Label htmlFor="pulmonar" id="pulmonar-label">Pulmonar</Label>
                                    <select
                                        name="pulmonar"
                                        {...register("pulmonar")}
                                    >
                                        <option value="0">no le hace</option>
                                        <option value="1">marihuana</option>
                                        <option value="2">cocaina</option>
                                        <option value="3">krokodile</option>
                                        <option value="4">fentanilo</option>
                                    </select>

                                    <Label htmlFor="nervioso" id="nervioso-label">Nervioso</Label>
                                    <select
                                        name="nervioso"
                                        {...register("nervioso")}
                                    >
                                        <option value="0">no le hace</option>
                                        <option value="1">marihuana</option>
                                        <option value="2">cocaina</option>
                                        <option value="3">krokodile</option>
                                        <option value="4">fentanilo</option>
                                    </select>

                                    <Label htmlFor="hematologico" id="hematologico-label">Hematológico</Label>
                                    <select
                                        name="hematologico"
                                        {...register("hematologico")}
                                    >
                                        <option value="0">no le hace</option>
                                        <option value="1">marihuana</option>
                                        <option value="2">cocaina</option>
                                        <option value="3">krokodile</option>
                                        <option value="4">fentanilo</option>
                                    </select>



                                </div>
                                <div>
                                    <Label htmlFor="gastrointestinal" id="gastrointestinal-label">Gastrointestinal</Label>
                                    <select
                                        name="gastrointestinal"
                                        {...register("gastrointestinal")}
                                    >
                                        <option value="0">no le hace</option>
                                        <option value="1">marihuana</option>
                                        <option value="2">cocaina</option>
                                        <option value="3">krokodile</option>
                                        <option value="4">fentanilo</option>
                                    </select>

                                    <Label htmlFor="genitourinario" id="genitourinario-label">Genitourinario</Label>
                                    <select
                                        name="genitourinario"
                                        {...register("genitourinario")}
                                    >
                                        <option value="0">no le hace</option>
                                        <option value="1">marihuana</option>
                                        <option value="2">cocaina</option>
                                        <option value="3">krokodile</option>
                                        <option value="4">fentanilo</option>
                                    </select>

                                    <Label htmlFor="endocrino" id="endocrino-label">Endocrino</Label>
                                    <select
                                        name="endocrino"
                                        {...register("endocrino")}
                                    >
                                        <option value="0">no le hace</option>
                                        <option value="1">marihuana</option>
                                        <option value="2">cocaina</option>
                                        <option value="3">krokodile</option>
                                        <option value="4">fentanilo</option>
                                    </select>

                                    <Label htmlFor="musculoEsqueletal" id="musculoEsqueletal-label">Musculo Esqueletal</Label>
                                    <select
                                        name="musculoEsqueletal"
                                        {...register("musculoEsqueletal")}
                                    >
                                        <option value="0">no le hace</option>
                                        <option value="1">marihuana</option>
                                        <option value="2">cocaina</option>
                                        <option value="3">krokodile</option>
                                        <option value="4">fentanilo</option>
                                    </select>





                                </div>
                                <div>
                                    <Label htmlFor="sistemaInmune" id="sistemaInmune-label">Sistema Inmune</Label>
                                    <select
                                        name="sistemaInmune"
                                        {...register("sistemaInmune")}
                                    >
                                        <option value="0">no le hace</option>
                                        <option value="1">marihuana</option>
                                        <option value="2">cocaina</option>
                                        <option value="3">krokodile</option>
                                        <option value="4">fentanilo</option>
                                    </select>

                                    <Label htmlFor="dermatologico" id="dermatologico-label">Dermatológico</Label>
                                    <select
                                        name="dermatologico"
                                        {...register("dermatologico")}
                                    >
                                        <option value="0">no le hace</option>
                                        <option value="1">marihuana</option>
                                        <option value="2">cocaina</option>
                                        <option value="3">krokodile</option>
                                        <option value="4">fentanilo</option>
                                    </select>

                                    <Label htmlFor="otros" id="otros-label">Otros</Label>
                                    <Textarea
                                        name="otros"
                                        id="otros"
                                        rows="4"
                                        placeholder="otros"
                                        {...register("otros")}
                                    ></Textarea>

                                </div>
                            </div>

                        </OfficialCard>


                        <OfficialCard>
                            <h1 className="text-xl font-bold" style={{paddingBottom:"30px"}}>Observaciones / Intervenciones Quirúrgicas / Alertas Médicas</h1>
                            <Label htmlFor="observaciones" id="observaciones-label"></Label>
                            <Textarea
                                name="observaciones"
                                id="observaciones"
                                rows="10"
                                placeholder="observaciones"
                                {...register("observaciones")}
                            ></Textarea>
                        </OfficialCard>


                    </div>
                    <Button>Guardar</Button>
                </form>


            </div>

        </>
    )
}