import React from 'react';
import AddTodo from '../containers/AddTodo';
import RemoveTodo from '../containers/RemoveTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Header from './Header';
import Context from './context';



const App = () => {
    return(
  <Context.Provider value={{RemoveTodo}}>
  <div>
    <Header />
    <AddTodo />
    <RemoveTodo />
    <VisibleTodoList />
  </div>
  </Context.Provider>
)
};

export default App;