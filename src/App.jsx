import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tasksReducer from './redux/reducers'; 
import AddTask from './components/AddTask'; 
import ListTask from './components/ListTask';

const store = createStore(tasksReducer); 

const App = () => {
  return (
    <Provider store={store}> 
      <div>
        <h1>ToDo App</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;

