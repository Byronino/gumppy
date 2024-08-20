
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
import { Caja } from "../components/ui/Caja";

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
                setValue("sexo", paciente.sexo);
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

            <Caja>
                {(params.id ? (<Subtitulo>ACTUALIZAR PACIENTE</Subtitulo>
                ) : (<Subtitulo>FORMULARIO PACIENTE</Subtitulo>
                ))}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div >
                        <OfficialCard >
                            <h1 className="text-xl font-bold" style={{ paddingBottom: "30px" }}>Información</h1>
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

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="fecNacPac" id="fecNacPac-label">Fecha de Nacimiento*</Label>
                                            <Input type="date" name="fecNacPac" {...register("fecNacPac")} />
                                        </div>
                                        <div>
                                            <Label htmlFor="nCepillados" id="nCepillados-label">Sexo</Label>
                                            <select
                                                className="text-xs rounded-full p-2 block my-1 mb-3 w-full font-roboto"

                                                name="sexo"
                                                {...register("sexo")}
                                            >
                                                <option value="0">- -</option>
                                                <option value="Masculino">Masculino</option>
                                                <option value="Femenino">Femenino</option>
                                                <option value="Otro">Otro</option>
                                            </select>
                                        </div>
                                    </div>
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
                                    <h1 className="text-xl font-bold" style={{ paddingBottom: "30px" }}>Higiene</h1>

                                    <Label htmlFor="nCepillados" id="nCepillados-label">Frecuencia cepillado</Label>
                                    <select
                                        className="text-xs rounded-full p-2 block my-1 mb-3 w-full font-roboto"

                                        name="nCepillados"
                                        {...register("nCepillados")}
                                    >
                                        <option value="0">0 veces al día</option>
                                        <option value="1">1 vez al día</option>
                                        <option value="2">2 veces al día</option>
                                        <option value="3">3 veces al día</option>
                                        <option value="Más de 3">Más de 3 veces al día</option>
                                    </select>

                                    <div className="flex items-center mb-3 ">
                                        <input
                                            type="checkbox"
                                            name="limpiezaInterdental"
                                            style={{
                                                accentColor: '#e34453',
                                                transform: 'scale(1.5)',
                                            }}
                                            {...register("limpiezaInterdental")}
                                            className="mr-2"
                                        />
                                        <Label htmlFor="limpiezaInterdental" id="limpiezaInterdental-label" className="flex-1">Limpieza interdental</Label>
                                    </div>

                                    <div className="flex items-center mb-3 ">
                                        <input
                                            type="checkbox"
                                            name="colutorio"
                                            style={{
                                                accentColor: '#e34453',
                                                transform: 'scale(1.5)',
                                            }}
                                            {...register("colutorio")}
                                            className="mr-2"
                                        />
                                        <Label htmlFor="colutorio" id="colutorio-label" className="flex-1">Uso de colutorio</Label>
                                    </div>





                                    <Label htmlFor="tipoCepillo" id="tipoCepillo-label">Tipo de Cepillo</Label>
                                    <select
                                        name="tipoCepillo"
                                        className="text-xs rounded-full p-2 block my-1 mb-3 w-full font-roboto"

                                        {...register("tipoCepillo")}
                                    >
                                        <option value="Suave">Suave</option>
                                        <option value="Medio">Medio</option>
                                        <option value="Duro">Duro</option>

                                    </select>

                                </div>
                                {/*segunda columna*/}
                                <div>
                                    <h1 className="text-xl font-bold" style={{ paddingBottom: "30px" }}>Hábitos</h1>

                                    <Label htmlFor="tabaco" id="tabaco-label">Tabaco</Label>
                                    <select
                                        name="tabaco"
                                        className="text-xs rounded-full p-2 block my-1 mb-3 w-full font-roboto"

                                        {...register("tabaco")}
                                    >
                                        <option value="No consume">No consume</option>
                                        <option value="Fumador liviano">Fumador liviano 1-10 cigs./día</option>
                                        <option value="Fumador moderado">Fumador moderado 10-19 cigs./día</option>
                                        <option value="Fumador pesado">Fumador pesado mayor a 20 cigs./día</option>
                                        <option value="Exfumador">Exfumador mayor a 10 años</option>

                                    </select>

                                    <Label htmlFor="drogas" id="drogas-label">Drogas</Label>
                                    <select
                                        name="drogas"
                                        className="text-xs rounded-full p-2 block my-1 mb-3 w-full font-roboto"

                                        {...register("drogas")}
                                    >
                                        <option value="No consume">No consume</option>
                                        <option value="Marihuana">Marihuana</option>
                                        <option value="Cocaína">Cocaína</option>
                                        <option value="Otros">Otros</option>

                                    </select>
                                    <div className="flex items-center mb-3 ">
                                        <input
                                            type="checkbox"
                                            name="alcohol"
                                            style={{
                                                accentColor: '#e34453',
                                                transform: 'scale(1.5)',
                                            }}
                                            {...register("alcohol")}
                                            className="mr-2"
                                        />
                                        <Label htmlFor="alcohol" id="alcohol-label" className="flex-1">Alcohol</Label>
                                    </div>


                                </div>

                                {/*tercera columna*/}
                                <div>
                                    <h1 className="text-xl font-bold" style={{ paddingBottom: "30px" }}>Otros</h1>

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

                                    <div className="flex items-center mb-3 ">
                                        <input
                                            type="checkbox"
                                            name="embarazo"
                                            style={{
                                                accentColor: '#e34453',
                                                transform: 'scale(1.5)',
                                            }}
                                            {...register("embarazo")}
                                            className="mr-2"
                                        />
                                        <Label htmlFor="embarazo" id="embarazo-label" className="flex-1">Embarazo</Label>
                                    </div>

                                    <div className="flex items-center mb-3 ">
                                        <input
                                            type="checkbox"
                                            name="lactancia"
                                            style={{
                                                accentColor: '#e34453',
                                                transform: 'scale(1.5)',
                                            }}
                                            {...register("lactancia")}
                                            className="mr-2"
                                        />
                                        <Label htmlFor="lactancia" id="lactancia-label" className="flex-1">Lactancia</Label>
                                    </div>



                                </div>
                            </div>
                        </OfficialCard>

                        <OfficialCard>
                            <h1 className="text-xl font-bold" style={{ paddingBottom: "30px" }}>Patologías</h1>

                            <div className="mt-3 grid grid-cols-3 gap-3">
                                <div>
                                    <Label htmlFor="cardiovascular" id="cardiovascular-label">Cardiovascular</Label>
                                    <select
                                        name="cardiovascular"
                                        className="text-xs rounded-full p-2 block my-1 mb-3 w-full font-roboto"

                                        {...register("cardiovascular")}
                                    >
                                        <option value="- -">- -</option>
                                        <option value="Hipertensión">Hipertensión</option>
                                        <option value="Cardiopatía Isquémica">Cardiopatía Isquémica</option>
                                        <option value="Otro">Otro</option>


                                    </select>

                                    <Label htmlFor="pulmonar" id="pulmonar-label">Pulmonar</Label>
                                    <select
                                        name="pulmonar"
                                        className="text-xs rounded-full p-2 block my-1 mb-3 w-full font-roboto"

                                        {...register("pulmonar")}
                                    >
                                        <option value="- -">- -</option>
                                        <option value="EPOC">EPOC</option>
                                        <option value="Asma">Asma</option>
                                        <option value="Otro">Otro</option>

                                    </select>

                                    <Label htmlFor="nervioso" id="nervioso-label">Nervioso</Label>
                                    <select
                                        name="nervioso"
                                        className="text-xs rounded-full p-2 block my-1 mb-3 w-full font-roboto"

                                        {...register("nervioso")}
                                    >
                                        <option value="- -">- -</option>
                                        <option value="Epilepsia">Epilepsia</option>
                                        <option value="Otro">Otro</option>

                                    </select>

                                    <Label htmlFor="hematologico" id="hematologico-label">Hematológico</Label>
                                    <select
                                        name="hematologico"
                                        className="text-xs rounded-full p-2 block my-1 mb-3 w-full font-roboto"

                                        {...register("hematologico")}
                                    >
                                        <option value="- -">- -</option>
                                        <option value="Discrasias Sanguíneas">Discrasias Sanguíneas</option>
                                        <option value="Otros">Otros</option>

                                    </select>



                                </div>
                                <div>
                                    <Label htmlFor="gastrointestinal" id="gastrointestinal-label">Gastrointestinal</Label>
                                    <select
                                        name="gastrointestinal"
                                        className="text-xs rounded-full p-2 block my-1 mb-3 w-full font-roboto"

                                        {...register("gastrointestinal")}
                                    >
                                        <option value="- -">- -</option>
                                        <option value="Ulcera Péptica">Ulcera Péptica</option>
                                        <option value="Gastritis Crónica">Gastritis Crónica</option>
                                        <option value="Cirugía Bariátrica">Cirugía Bariátrica</option>
                                    </select>

                                    <Label htmlFor="genitourinario" id="genitourinario-label">Genitourinario</Label>
                                    <select
                                        name="genitourinario"
                                        className="text-xs rounded-full p-2 block my-1 mb-3 w-full font-roboto"

                                        {...register("genitourinario")}
                                    >
                                        <option value="- -">- -</option>
                                        <option value="Insuficiencia Renal Crónica">Insuficiencia Renal Crónica</option>
                                        <option value="Otro">Otro</option>

                                    </select>

                                    <Label htmlFor="endocrino" id="endocrino-label">Endocrino</Label>
                                    <select
                                        name="endocrino"
                                        className="text-xs rounded-full p-2 block my-1 mb-3 w-full font-roboto"

                                        {...register("endocrino")}
                                    >
                                        <option value="- -">- -</option>
                                        <option value="Hipertiroidismo">Hipertiroidismo</option>
                                        <option value="Hipotiroidismo">Hipotiroidismo</option>
                                        <option value="Diabetes I">Diabetes I</option>
                                        <option value="Diabetes II">Diabetes II</option>
                                        <option value="Otro">Otro</option>

                                    </select>

                                    <Label htmlFor="musculoEsqueletal" id="musculoEsqueletal-label">Musculo Esqueletal</Label>
                                    <select
                                        name="musculoEsqueletal"
                                        className="text-xs rounded-full p-2 block my-1 mb-3 w-full font-roboto"

                                        {...register("musculoEsqueletal")}
                                    >
                                        <option value="- -">- -</option>
                                        <option value="Artritis Reumatoide">Artritis Reumatoide</option>
                                        <option value="Artrosis">Artrosis</option>
                                        <option value="Otro">Otro</option>

                                    </select>





                                </div>
                                <div>
                                    <Label htmlFor="sistemaInmune" id="sistemaInmune-label">Sistema Inmune</Label>
                                    <select
                                        name="sistemaInmune"
                                        className="text-xs rounded-full p-2 block my-1 mb-3 w-full font-roboto"

                                        {...register("sistemaInmune")}
                                    >
                                        <option value="- -">- -</option>
                                        <option value="Inmunodeficiencia">Inmunodeficiencia</option>
                                        <option value="Alergias">Alergias</option>
                                        <option value="S. Sjögren">S. Sjögren</option>
                                        <option value="Lupus">Lupus</option>
                                        <option value="Otro">Otro</option>
                                    </select>

                                    <Label htmlFor="dermatologico" id="dermatologico-label">Dermatológico</Label>
                                    <select
                                        name="dermatologico"
                                        className="text-xs rounded-full p-2 block my-1 mb-3 w-full font-roboto"

                                        {...register("dermatologico")}
                                    >
                                        <option value="- -">- -</option>
                                        <option value="Dermatitis de contacto">Dermatitis de contacto</option>
                                        <option value="Otro">Otro</option>

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
                            <h1 className="text-xl font-bold" style={{ paddingBottom: "30px" }}>Observaciones / Intervenciones Quirúrgicas / Alertas Médicas</h1>
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
                    <div className="flex justify-center">
                        <Button>Guardar</Button>

                    </div>
                </form>
            </Caja>
        </>
    )
}