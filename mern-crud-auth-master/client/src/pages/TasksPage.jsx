import { useEffect } from "react";
import { useTasks } from "../context/tasksContext";
import { TaskCard } from "../components/tasks/TaskCard";
import { ImFileEmpty } from "react-icons/im";
import { Caja } from "../components/ui/Caja";
import { OfficialCard } from "../components/ui/OfficialCard";
export function TasksPage() {
  const { tasks, getTasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <Caja>
        <OfficialCard></OfficialCard>
        <div className="color: black border rounded bg-white" style={{ color: 'black ', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', borderColor: '#fc9099', borderWidth: '10px', padding: '0' }}>
          {tasks.length === 0 && (
            <div className="flex justify-center items-center p-10">
              <div>
                <ImFileEmpty className="text-8xl text-gray-400 m-auto my-2" />
                <h1 className="font-bold text-xl">
                  No tasks yet, please add a new task
                </h1>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
            {tasks.map((task) => (
              <TaskCard task={task} key={task._id} />
            ))}
          </div>
        </div>
      </Caja>
    </>
  );
}
