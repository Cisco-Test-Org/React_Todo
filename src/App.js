import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My to-do List</h1>
      <div>
            <form>
                <input type='text' required id='todo-item'/>
                <button>Add To List</button>
            </form>
        </div>
      <div className='list'>
            <ol>
                <li>todo item one</li>
                <li>todo item two</li>
                <li>todo item three</li>
                <li>todo item four</li>
            </ol>
        </div>
    </div>
  );
}

export default App;
