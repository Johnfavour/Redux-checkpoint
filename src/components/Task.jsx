import React from 'react';

const Task = ({ id, description, isDone, onToggleTask, onEditTask }) => {
  const handleToggle = () => {
    onToggleTask(id); 
  };

  const handleEdit = () => {
    const newDescription = prompt('Edit task description:', description);
    if (newDescription) {
      onEditTask(id, newDescription);  
    }
  };

  return (
    <div>
      <input type="checkbox" checked={isDone} onChange={handleToggle} />
      <span onClick={handleEdit}>{description}</span>
    </div>
  );
};

export default Task;