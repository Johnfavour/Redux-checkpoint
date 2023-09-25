import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tasksReducer from './redux/reducers'; 
import AddTask from './components/AddTask'; 
import ListTask from './components/ListTask';
import './App.css';

const store = createStore(tasksReducer); 

const App = () => {
  return (
    <Provider store={store}> 
      <div className='todo'>
        <h1 className='todos'>ToDo App</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;

