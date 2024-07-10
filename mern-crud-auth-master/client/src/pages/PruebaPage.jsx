import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../components/ui";
import { usePrueba } from "../context/pruebaContext";
import { Textarea } from "../components/ui/Textarea";
import { useForm } from "react-hook-form";
dayjs.extend(utc);

export function PruebaPage() {
  const { createPrueba } = usePrueba();
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
      console.log(data);
      data.valor = parseInt(data.valor)
      createPrueba({ ...data });
      navigate("/tasks");
    } catch (error) {
      console.log(error);
      // window.location.href = "/";
    }
  };
  /*
    useEffect(() => {
      const loadPrueba = async () => {
        if (params.id) {
          const task = await getTask(params.id);
          setValue("title", task.title);
          setValue("description", task.description);
          setValue(
            "date",
            task.date ? dayjs(task.date).utc().format("YYYY-MM-DD") : ""
          );
          setValue("completed", task.completed);
        }
      };
      loadTask();
    }, []);
  */
  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="nombre">Title</Label>
        <Input
          type="text"
          name="nombre"
          placeholder="Nombre"
          {...register("nombre")}
          autoFocus
        />
        {errors.name && (
          <p className="text-red-500 text-xs italic">Please enter a title.</p>
        )}

        <Label htmlFor="valor">Description</Label>
        <Input
          type="number"
          name="valor"
          placeholder="Valor"
          {...register("valor")}
        ></Input>

        <Button>Save</Button>
      </form>
    </Card>

  );
}
