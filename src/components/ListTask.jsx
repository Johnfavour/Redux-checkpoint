import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/actions'; 
import Task from './Task'; 
import '../App.css'

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks); 
  const dispatch = useDispatch(); 
  const [filter, setFilter] = useState('all');

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id)); 
  };

  const handleEditTask = (id, newDescription) => {
    dispatch(editTask(id, newDescription)); 
  };

  const filteredTasks = filter === 'all' ? tasks : tasks.filter((task) => task.isDone === (filter === 'done'));

  return (
    <div>
      <div className='btns'>
        <button onClick={() => setFilter('all')} className='btn' style={{marginRight:'10px'}}>All</button>
        <button onClick={() => setFilter('done')} className='btn' style={{marginRight:'10px'}}>Done</button>
        <button onClick={() => setFilter('notDone')} className='btn'>Not Done</button>
      </div>
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          description={task.description}
          isDone={task.isDone}
          onToggleTask={handleToggleTask}
          onEditTask={handleEditTask}
        />
      ))}
    </div>
  );
};

export default ListTask;

