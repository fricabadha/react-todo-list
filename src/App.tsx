import { useState } from "react";
import "./App.css";
import Task, { TaskModel } from "./components/Task";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [lista, setLista] = useState<TaskModel[]>([]);
  const [newTaskText, setNewTaskTest] = useState<string>("");

  return (
    <div className="container">
      <div>
        <h1 className="center">Todo List</h1>
        <hr />
        <input
          type="text"
          placeholder="add item..."
          value={newTaskText}
          onInput={(e: any) => {
            setNewTaskTest(e.target.value);
          }}
        />
        <button
          className="mt-12 a-btn"
          type="button"
          onClick={() => {
            setLista([
              ...lista,
              {
                text: newTaskText,
                date: new Date(),
                id: uuidv4(),
              },
            ]);
            setNewTaskTest("");
          }}
        >
          ADD
        </button>
      </div>

      <div className="mt-12">
        {lista.map((task) => (
          <Task
            task={task}
            key={task.id}
            onDelete={() => {
              const nuovaLista = lista.filter((t) => t.id != task.id);
              setLista(nuovaLista);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
