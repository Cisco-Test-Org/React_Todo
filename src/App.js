import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>My to-do List</h1>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
