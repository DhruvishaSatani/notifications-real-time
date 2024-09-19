import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Replace with your backend URL

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Listen for real-time task updates
    socket.on("task-updated", (updatedTask) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        )
      );
    });

    // Clean up the event listener
    return () => {
      socket.off("task-updated");
    };
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>{task.name}</div>
      ))}
    </div>
  );
}

export default TaskList;
