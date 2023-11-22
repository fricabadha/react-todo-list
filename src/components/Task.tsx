export interface TaskModel {
  text: string;
  date: Date;
  id: string;
}

interface TaskProps {
  onDelete: () => void;
  task: TaskModel;
}

const Task = (props: TaskProps) => {
  return (
    <div className="task">
      {props.task.text} - <small>{props.task.date.toLocaleString()}</small>
      <button
        className="right"
        type="button"
        onClick={() => {
          props.onDelete();
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
