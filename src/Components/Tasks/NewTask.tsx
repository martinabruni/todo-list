import AddButton from "../Buttons/AddButton";

interface NewTaskProps {
  addTask: () => boolean;
  newTask: string;
  setNewTask: (newTask: string) => void;
}

export default function NewTask(props: NewTaskProps) {
  return (
    <div className="new-task-input">
      <input
        onChange={(e) => {
          console.info("Input changed, new value:", e.target.value);
          props.setNewTask(e.target.value);
        }}
        type="text"
        placeholder="New Task"
        value={props.newTask}
      />
      <AddButton onClick={props.addTask} />
    </div>
  );
}
