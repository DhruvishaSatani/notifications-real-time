import React from 'react';
import TaskList from '../components/TaskList';

const HomePage = ({ tasks, onTaskUpdate }) => {
    return (
        <div>
            <h1>Home Page</h1>
            <TaskList tasks={tasks} onTaskUpdate={onTaskUpdate} />
        </div>
    );
};

export default HomePage;
