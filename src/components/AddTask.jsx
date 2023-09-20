import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions'; 

const AddTask = () => {
  const [taskDescription, setTaskDescription] = useState(''); 
  const dispatch = useDispatch(); 

  const handleAddTask = () => {
    if (taskDescription.trim() !== '') {
      dispatch(addTask(taskDescription)); 
      setTaskDescription(''); 
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Enter task description"
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default AddTask;