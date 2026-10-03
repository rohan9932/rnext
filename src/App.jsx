import { useImmerReducer } from "use-immer";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/tasks";
import taskReducer from "./reducers/taskReducer";
import TaskContextProvider, { TaskContext, TaskDispatchContext } from "./contexts/taskContext";

export default function App() {
  // const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);
  // // handlers
  // const handleAddTask = (text) => {
  //   dispatch({
  //     type: "added",
  //     text,
  //     id: getNextId(tasks),
  //   });
  // };

  // const handleChangeTask = (task) => {
  //   dispatch({
  //     type: "changed",
  //     task,
  //   });
  // };

  // const handleDeleteTask = (taskId) => {
  //   dispatch({
  //     type: "deleted",
  //     id: taskId,
  //   });
  // };

  return (
    <TaskContextProvider>
      <h1>Prague itinerary</h1>
      <AddTask />
      <TaskList />
    </TaskContextProvider>
  );
}
