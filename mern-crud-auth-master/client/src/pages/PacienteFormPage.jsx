
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../components/ui";
import { usePacientes } from "../context/pacienteContext";
import { Textarea } from "../components/ui/Textarea";
import { useForm } from "react-hook-form";
import { OfficialCard } from "../components/ui/OfficialCard";

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
                setValue("emailPac", paciente.emailPac);
                setValue("telPac", paciente.telPac);
                setValue("rutPac", paciente.rutPac);
                setValue("razaPac", paciente.razaPac);
                setValue("descripcion", paciente.descripcion);
                setValue("alergia", paciente.alergia);
                setValue("tabaco", paciente.tabaco);
                setValue("alcohol", paciente.alcohol);
                setValue("drogas", paciente.drogas);
                setValue("nCepillados", paciente.nCepillados);
                setValue("cedaDental", paciente.cedaDental);
                setValue("cepilloInterdental", paciente.cepilloInterdental);
                setValue("clorhexidina", paciente.clorhexidina);


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

            <div className="mb-16 color: black border rounded bg-white" style={{ color: 'black ', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', borderColor: '#fc9099', borderWidth: '10px', padding: '0', boxShadow: '5px 5px 10px rgba(0, 0 , 0, 0.5)' }}>


                <div className="bg-slate-100 text-black max-w-md w-full p-10 rounded-md mt-3 mb-1" style={{ minWidth: "80%", boxShadow: '5px 5px 10px rgba(0, 0 , 0, 0.5)' }}>

                    <h1 className="text-3xl font-bold font-myriad mt-3">Formulario paciente</h1>


                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 gap-2">
                        <OfficialCard>

                            <Label htmlFor="nomPac" id="nomPac-label">Nombre completo</Label>
                            <Input
                                type="text"
                                name="nomPac"
                                placeholder="Nombre del paciente"
                                {...register("nomPac")}
                                autoFocus
                            />
                            {errors.nomPac && (
                                <p className="text-red-500 text-xs italic">Porfavor ingrese el nombre completo</p>
                            )}

                            <Label htmlFor="rutPac" id="rutPac-label">Rut </Label>
                            <Input
                                type="text"
                                name="rutPac"
                                placeholder="XXXXXXXX-X"
                                {...register("rutPac")}

                            />
                            {errors.rutPac && (
                                <p className="text-red-500 text-xs italic">Porfavor ingrese un rut correcto</p>
                            )}

                            <Label htmlFor="emailPac" id="emailPac-label">Email </Label>
                            <Input
                                type="text"
                                name="emailPac"
                                placeholder="ejemplo@dominio.extension"
                                {...register("emailPac")}

                            />
                            {errors.emailPac && (
                                <p className="text-red-500 text-xs italic">Porfavor ingrese un email correcto</p>
                            )}

                            <Label htmlFor="telPac" id="telPac-label">Telefono </Label>
                            <Input
                                type="text"
                                name="telPac"
                                placeholder="+569 XXXXXXXX"
                                {...register("telPac")}

                            />
                            {errors.telPac && (
                                <p className="text-red-500 text-xs italic">Porfavor ingrese un telefono correcto</p>
                            )}

                            <Label htmlFor="razaPac" id="razaPac-label">Etnia</Label>
                            <Input
                                type="text"
                                name="razaPac"
                                placeholder="Etnia"
                                {...register("razaPac")}

                            />
                            {errors.razaPac && (
                                <p className="text-red-500 text-xs italic">Porfavor ingrese una raza correcta</p>
                            )}



                            <Label htmlFor="fecNacPac" id="fecNacPac-label">Fecha de Nacimiento</Label>
                            <Input type="date" name="fecNacPac" {...register("fecNacPac")} />

                            <Label htmlFor="description" id="description-label">Descripcion</Label>
                            <Textarea
                                name="descripcion"
                                id="descripcion"
                                rows="3"
                                placeholder="Descripcion"
                                {...register("descripcion")}
                            ></Textarea>


                            


                        </OfficialCard>
                        <Card>
                            <h1 className="text-xl underline">Hábitos del paciente</h1>
                            <div className="mt-3 grid grid-cols-2 gap-4">
                                <Label htmlFor="alergia" id="alergia-label">¿Posee alergias?</Label>
                                <Input

                                    type="checkbox"
                                    name="alergia"
                                    {...register("alergia")}

                                />
                                <Label htmlFor="tabaco" id="tabaco-label">¿Consume tabaco?</Label>
                                <Input
                                    type="checkbox"
                                    name="tabaco"

                                    {...register("tabaco")}
                                />

                                <Label htmlFor="alcohol" id="alcohol-label">¿Consume alcohol?</Label>
                                <Input
                                    type="checkbox"
                                    name="alcohol"

                                    {...register("alcohol")}
                                />

                                <Label htmlFor="drogas" id="drogas-label">¿Consume algun tipo de droga?</Label>
                                <Input
                                    type="checkbox"
                                    name="drogas"

                                    {...register("drogas")}
                                />


                            </div>
                            <h1 className="text-xl underline mt-3">Higiene del paciente</h1>

                            <div className="mt-3 grid grid-cols-2 gap-4">
                                <Label htmlFor="cedaDental" id="cedaDental-label">¿Utiliza ceda dental?</Label>
                                <Input
                                    type="checkbox"
                                    name="cedaDental"

                                    {...register("cedaDental")}
                                />

                                <Label htmlFor="cepilloInterdental" id="cepilloInterdental-label">¿Utiliza cepillo interdental?</Label>
                                <Input
                                    type="checkbox"
                                    name="cepilloInterdental"

                                    {...register("cepilloInterdental")}
                                />


                                <Label htmlFor="clorhexidina" id="clorhexidina-label">¿Utiliza clorhexidina?</Label>
                                <Input
                                    type="checkbox"
                                    name="clorhexidina"

                                    {...register("clorhexidina")}
                                />
                                <Label htmlFor="nCepillados" id="nCepillados-label">¿Cuántas veces se cepilla al día?</Label>
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

                            </div>
                        </Card>


                    </div>
                    <Button>Guardar</Button>
                </form>

            </div>

        </>
    )
}