"use client"
import { addTask } from '@/services/taskService';
import React, { useState } from 'react';

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userID: ""
  });

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask( (prevState) =>({ ...prevState, [name]: value }  ));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

       try {
       const result = addTask(task) ;
        console.log(result)
       }catch(err){
        console.log("error is" + err)
       }
    // Here you can perform any action you need with the submitted task data
    console.log("Submitted task:", task);
    // To clear the form automatically after submission
    setTask({  title: "",  content: "",  status: "",  userID: ""});  };

  return (
    <div className="grid grid-cols-12 justify-center">
      <div className="col-span-4 col-start-5 p-5 shadow-sm">
        <img src="https://media.istockphoto.com/id/1303877287/vector/paper-checklist-and-pencil-flat-pictogram.jpg?s=612x612&w=0&k=20&c=NoqPzn94VH2Pm7epxF8P5rCcScMEAiGQ8Hv_b2ZwRjY=" className="h-60" 
        alt="image loading...." ></img>
        <h1 className="text-3xl text-center">Add your task here</h1>
     
        <form onSubmit={handleSubmit}>
          {/* task title */}
          <div className="mt-4">
            <label htmlFor="task_title" className="block text-sm font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              id="task_title"
              name="title"
              value={task.title}
              onChange={handleChange}
              placeholder="Enter task title"
            />
          </div>
          {/* task CONTENT */}
          <div className="mt-4">
            <label htmlFor="task_content" className="block text-sm font-medium mb-2">
              Content
            </label>
            <textarea
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              id="task_content"
              rows={5}
              name="content"
              value={task.content}
              onChange={handleChange}
              placeholder="Enter task content"
            />
          </div>

          {/* task status */}
          <div className="mt-4">
            <label htmlFor="task_status" className="block text-sm font-medium mb-2">
              Status
            </label>
            <select
              id="task_status"
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              name="status"
              value={task.status}
              onChange={handleChange}
            >
              <option value="none" disabled>
                ---Select Status---
              </option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* button actions */}
          <div className="mt-4 flex justify-center">
            <button type="submit" className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800">
              Add Task
            </button>
            <button type="button" className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800 ms-3"
              onClick={() => setTask({ title: "", content: "", status: "", userID: "" })}>
              Clear
            </button>
          </div>
          {JSON.stringify(task)}
        </form>
      </div>
    </div>
  );
};

export default AddTask;
