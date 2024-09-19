import React from 'react';

const TaskItem = ({ task, onTaskUpdate }) => {
    const handleStatusChange = () => {
        onTaskUpdate(task.id, { ...task, status: 'completed' });
    };

    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={handleStatusChange}>Complete Task</button>
        </div>
    );
};

export default TaskItem;
