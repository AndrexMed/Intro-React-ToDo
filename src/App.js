import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function App() { //El codigo dentro de este componente es lenguaje JSX, forma de escribir html&JS
  return (
    <div className="App">

    {/* Creamos la estructura de los componentes de la app */}
      <TodoCounter completed={5} total={10} />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButton/>
    </div>
  );
}
export default App;
