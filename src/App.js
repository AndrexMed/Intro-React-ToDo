import React from 'react'; //Importamos esto para poder usar Reac.Fragment
//Borramos lo que no se esta utilizando...
import { TodoCounter } from './Components/ToDoCounter/TodoCounter';
import { TodoSearch } from './Components/ToDoSearch/TodoSearch';
import { TodoList } from './Components/ToDoList/TodoList';
import { TodoItem } from './Components/ToDoItem/TodoItem';
import { CreateTodoButton } from './Components/CreateTodoButton/CreateTodoButton';


//Creamos un array con datos de ejemplos para renderizarlos con map...
const defaultToDos = [
  { text: 'Terminar curso React', completed: false },
  { text: 'Lavar cocina', completed: false },
  { text: 'Estudiar', completed: false },
  { text: 'Hacer ejercicio', completed: false },


]

function App() { //El codigo dentro de este componente es lenguaje JSX, forma de escribir html&JS
  return (
    //Reemplazamos el div para cambiarlo por el Fragment, "etiqueta invisible"
    // React Fragment es un componente especial en React que se utiliza como un contenedor liviano para envolver múltiples elementos JSX sin agregar nodos adicionales al DOM. 

    <> //Abreviacion de Reac.Fragment

      {/* Creamos la estructura de los componentes de la app */}

      <TodoCounter completed={5} total={10} />  {/*completed y total son los "props que estamos enviando"*/}
      <TodoSearch />

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
