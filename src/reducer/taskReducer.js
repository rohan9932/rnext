export default function taskReducer(tasks, action) {
  //get current state, return next state
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: tasks[tasks.length - 1].id + 1,
          text: action.text,
          done: false,
        },
      ];
    }

    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }

    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }

    default:
      throw Error("Unknown action: " + action.type);
  }
}
