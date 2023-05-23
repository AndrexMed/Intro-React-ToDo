import React from 'react'; //Importamos esto para poder usar Reac.Fragment
//Borramos lo que no se esta utilizando...
import { TodoCounter } from './Components/ToDoCounter/TodoCounter';
import { TodoSearch } from './Components/ToDoSearch/TodoSearch';
import { TodoList } from './Components/ToDoList/TodoList';
import { TodoItem } from './Components/ToDoItem/TodoItem';
import { CreateTodoButton } from './Components/CreateTodoButton/CreateTodoButton';


//Creamos un array con datos de ejemplos para renderizarlos con map...
const defaultToDos = [
  { text: 'Terminar curso React', completed: true },
  { text: 'Lavar cocina', completed: false },
  { text: 'Estudiar', completed: false },
  { text: 'Hacer ejercicio', completed: false },
  { text: 'Usar estados derivados', completed: true },

]

function App() { //El codigo dentro de este componente es lenguaje JSX, forma de escribir html&JS

  const [todos, setTodos] = React.useState(defaultToDos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedToDos = todos.filter(items => !!items.completed).length
  const totalToDos = todos.length; 

  console.log("Los usuarios buscan toDos de: " + searchValue)

  return (
    <>

      <TodoCounter
        completed={completedToDos}
        total={totalToDos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      {/* Utilizamos el metodo map para renderizar cada item del array... */}

      {/* El "key", es una clave que React me obliga a colocar para diferenciar cada item del array, ej: id:1, id:2.... 
          en este caso lo diferenciamos con el text..y text&completed, son los props que estoy enviando...
          en este  caso le envio los items extraidos del array...*/}

      <TodoList>
        {defaultToDos.map((todo, index) => (
          <TodoItem key={index}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}
export default App;
