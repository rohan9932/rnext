import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import taskReducer from "../reducers/taskReducer";
import { initialTasks } from "../data/tasks";

export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);

export default function TaskContextProvider({ children }) {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}

export function useTaskDispatch() {
  return useContext(TaskDispatchContext);
}
