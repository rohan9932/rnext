export default function taskReducer(draft, action) {
  //get current state, return next state
  switch (action.type) {
    case "added": {
      draft.push({
        id: tasks[tasks.length - 1].id + 1,
        text: action.text,
        done: false,
      });
      break;
    }

    case "changed": {
      const idx = draft.findIndex((t) => t.id === action.task.id);
      draft[idx] = action.task;
      break;
    }

    case "deleted": {
      return draft.filter((t) => t.id !== action.id);
    }

    default:
      throw Error("Unknown action: " + action.type);
  }
}
