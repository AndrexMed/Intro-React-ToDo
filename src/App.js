import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react'; //Importamos esto para poder usar Reac.Fragment

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

    <React.Fragment>

      {/* Creamos la estructura de los componentes de la app */}

      <TodoCounter completed={5} total={10} />  {/*completed y total son los "props que estamos enviando"*/}
      <TodoSearch />

      {/* Utilizamos el metodo map para renderizar cada item del array... */}

      {/* El "key", es una clave que React me obliga a colocar para diferenciar cada item del array, ej: id:1, id:2.... 
          en este caso lo diferenciamos con el text..y text&completed, son los props que estoy enviando...
          en este  caso le envio los items extraidos del array...*/}
          
      <TodoList>
        {defaultToDos.map(todo => (
          <TodoItem key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}
export default App;
