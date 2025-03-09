import { useEffect } from "react";
import { useTasks } from "../context/tasksContext";
import { TaskCard } from "../components/tasks/TaskCard";
import { ImFileEmpty } from "react-icons/im";
import { Caja } from "../components/ui/Caja";
import { OfficialCard } from "../components/ui/OfficialCard";
import { Subtitulo } from "../components/ui/Subtitulo";
import { WhiteWindow } from "../components/ui/WhiteWindow";
import { Parche } from "../components/ui/Parche";
import { Actualizacion } from "../components/ui/Actualizacion";

export function TasksPage() {
  const { tasks, getTasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <Caja>
        <OfficialCard>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <Subtitulo>Notas de la actualización</Subtitulo>
              <Parche></Parche>
            </div>
            <div>
              <Subtitulo>Próximas actualizaciones</Subtitulo>
              <Actualizacion></Actualizacion>
            </div>
          </div>
        </OfficialCard>

      </Caja>
    </>
  );
}
