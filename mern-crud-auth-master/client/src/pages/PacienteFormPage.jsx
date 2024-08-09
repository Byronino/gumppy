
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../components/ui";
import { usePacientes } from "../context/pacienteContext";
import { Textarea } from "../components/ui/Textarea";
import { useForm } from "react-hook-form";
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
                    fecNacPac: dayjs.utc(data.date).format(),
                });
            } else {
                createPaciente({
                    ...data,
                    fecNacPac: dayjs.utc(data.date).format(),
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
                setValue(
                    "fecNacPac",
                    paciente.fecNacPac ? dayjs(paciente.fecNacPac).utc().format("DD-MM-YYYY") : ""
                )
            }
        };
        loadPaciente();
    }, []);





    return (
        <>
            <div className="mb-16 color: black border rounded bg-white" style={{ color: 'black ', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', borderColor: '#fc9099', borderWidth: '10px', padding: '0' }}>


                <Card>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Label htmlFor="nomPac">Nombre del Paciente</Label>
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

                        <Label htmlFor="rutPac">Rut del Paciente</Label>
                        <Input
                            type="text"
                            name="rutPac"
                            placeholder="XXXXXXXX-X"
                            {...register("rutPac")}
                            autoFocus
                        />
                        {errors.rutPac && (
                            <p className="text-red-500 text-xs italic">Porfavor ingrese un rut correcto</p>
                        )}

                        <Label htmlFor="emailPac">Email del Paciente</Label>
                        <Input
                            type="text"
                            name="emailPac"
                            placeholder="ejemplo@dominio.extension"
                            {...register("emailPac")}
                            autoFocus
                        />
                        {errors.emailPac && (
                            <p className="text-red-500 text-xs italic">Porfavor ingrese un email correcto</p>
                        )}

                        <Label htmlFor="telPac">Telefono del Paciente</Label>
                        <Input
                            type="text"
                            name="telPac"
                            placeholder="+569 XXXXXXXX"
                            {...register("telPac")}
                            autoFocus
                        />
                        {errors.telPac && (
                            <p className="text-red-500 text-xs italic">Porfavor ingrese un telefono correcto</p>
                        )}

                        <Label htmlFor="razaPac">Etnia del Paciente</Label>
                        <Input
                            type="text"
                            name="razaPac"
                            placeholder="Etnia"
                            {...register("razaPac")}
                            autoFocus
                        />
                        {errors.razaPac && (
                            <p className="text-red-500 text-xs italic">Porfavor ingrese una raza correcta</p>
                        )}



                        <Label htmlFor="fecNacPac">Fecha de Nacimiento</Label>
                        <Input type="date" name="fecNacPac" {...register("fecNacPac")} />

                        <Label htmlFor="description">Descripcion</Label>
                        <Textarea
                            name="descripcion"
                            id="descripcion"
                            rows="3"
                            placeholder="Descripcion"
                            {...register("descripcion")}
                        ></Textarea>
                        <Button>Save</Button>
                    </form>
                </Card>


            </div>

        </>
    )
}