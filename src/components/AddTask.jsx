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
        style={{width:'300px', height:'40px', borderRadius:'10px', border:'none', padding:'5px', marginLeft:'70px'}}
      />
      <button onClick={handleAddTask} className='btn' style={{marginLeft:'5px'}}>Add</button>
    </div>
  );
};

export default AddTask;