import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import DueDateSelector from '../DueDateSelector/DueDateSelector';
import TaskPrioritySelector from '../TaskPrioritySelector/TaskPrioritySelector';
import TaskReminder from '../TaskReminder/TaskReminder';
import AttachmentsForm from '../AttachmentsForm/AttachmentsForm';


const TaskAddForm = ({ onTaskAdd }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    // Initialize Firebase Firestore
    const firebaseConfig = {
        apiKey: "AIzaSyC0eOCtGD6vN4bNlBNOQc1rQxQyJ9ZTzI0",
        authDomain: "taskio-c5af5.firebaseapp.com",
        projectId: "taskio-c5af5",
        storageBucket: "taskio-c5af5.appspot.com",
        messagingSenderId: "158755857708",
        appId: "1:158755857708:web:ec973ba9d8113e1808f889",
        measurementId: "G-YXV8BLJX96"
      };

      firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new task object
    const newTask = {
        name: taskName,
        description: taskDescription,
        // Add additional properties as needed
      };
  
      try {
        // Save the new task in the Firestore collection
        await firestore.collection('tasks').add(newTask);
  
        // Call the onTaskAdd function passed from the parent component
        onTaskAdd(newTask);
  
        // Reset form fields
        setTaskName('');
        setTaskDescription('');
      } catch (error) {
        console.error('Error adding task:', error);
      }
    };

    return (
        <div className="modal-body">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="taskNameInput" className="col-form-label">
            Enter task name:
          </label>
          <input
            type="text"
            className="form-control"
            id="taskNameInput"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="taskDescriptionInput" className="col-form-label">
            Enter a task description:
          </label>
          <textarea
            className="form-control"
            id="taskDescriptionInput"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </div>
        <DueDateSelector />
        <TaskPrioritySelector />
        <TaskReminder />
        <AttachmentsForm />
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskAddForm;

