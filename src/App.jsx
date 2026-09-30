import { useReducer } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/tasks";
import taskReducer from "./reducer/taskReducer";
import { useImmerReducer } from "use-immer";

export default function App() {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);

  //handler
  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: tasks[tasks.length - 1].id + 1,
      text: text,
      done: false,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task,
    });
  }

  function handleDeleteTask(id) {
    dispatch({ //action object
      type: "deleted",
      id,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>

      <AddTask onAddTask={handleAddTask} />

      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
