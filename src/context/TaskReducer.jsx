export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const FILTER_TASKS = 'FILTER_TASKS';

const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        tasks: [...state.tasks, action.payload],
      };
    case REMOVE_TASK:
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case FILTER_TASKS:
      return {
        tasks: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;