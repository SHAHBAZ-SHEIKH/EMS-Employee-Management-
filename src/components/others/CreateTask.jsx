
import React, { useState, useContext, useEffect } from 'react';
import { authProvider } from '../../context/AuthContext';

const CreateTask = () => {
    const [userData, setUserData] = useContext(authProvider); // Using context
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [taskCategory, setTaskCategory] = useState('');

    // Load context data from localStorage if available
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("employees"));
        if (storedData) {
            setUserData(storedData); // Set context data on mount
        }
    }, [setUserData]);

    const submitHandler = (e) => {
        e.preventDefault();

        const newTask = { 
            taskTitle, 
            taskDescription, 
            taskDate, 
            taskCategory, 
            active: false, 
            newTask: true, 
            completed: false, 
            failed: false 
        };

        // Update user data with new task
        const updatedData = userData.map((item) => {
            console.log("item",item)
            if (item.firstName === assignTo) {
                return {
                    ...item,
                    tasks: [...item.tasks, newTask], // Add task to tasks array
                    tasksCount: {
                        ...item.tasksCount,
                        newTask: item.tasksCount.newTask + 1, // Increment task count
                    },
                };
            }
            return item;
        });

        // Update context and localStorage
        setUserData(updatedData);
        localStorage.setItem("employees", JSON.stringify(updatedData)); // Persist data

        // Clear the form fields
        setAssignTo('');
        setTaskTitle('');
        setTaskDescription('');
        setTaskDate('');
        setTaskCategory('');
    };

    return (
        <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
            <form onSubmit={submitHandler} className="flex flex-wrap w-full items-start justify-between">
                <div className="w-1/2">
                    <div>
                        <h3 className="text-gray-300 mb-0.5">Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className="text-sm py-1 px-2 bg-transparent w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4"
                            type="text"
                            placeholder="Make a Youtube video"
                        />
                    </div>

                    <div>
                        <h3 className="text-gray-300 mb-0.5">Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className="text-sm py-1 px-2 bg-transparent w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4"
                            type="date"
                        />
                    </div>
                    <div>
                        <h3 className="text-gray-300 mb-0.5">Assign To</h3>
                        <input
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            className="text-sm py-1 px-2 bg-transparent w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4"
                            type="text"
                            placeholder="Employee Name"
                        />
                    </div>
                    <div>
                        <h3 className="text-gray-300 mb-0.5">Category</h3>
                        <input
                            value={taskCategory}
                            onChange={(e) => setTaskCategory(e.target.value)}
                            className="text-sm py-1 px-2 bg-transparent w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4"
                            type="text"
                            placeholder="Task Category"
                        />
                    </div>
                </div>

                <div className="w-2/5 flex flex-col items-start">
                    <h3 className="text-gray-300 mb-0.5">Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className="w-full h-44 text-sm py-2 px-4 rounded outline-none border-[1px] border-gray-400 bg-transparent"
                        cols="30"
                        rows="10"
                    ></textarea>
                    <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
