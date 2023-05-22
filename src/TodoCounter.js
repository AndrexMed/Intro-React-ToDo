//props es lo mas parecido a parametros pero no son lo mismo...

function TodoCounter({total, completed}) { //Con las llaves estamos "Destructurando"
    return (
      <h1>
        Haz completado {completed} de {total} todos
      </h1>
    );
  }
  export { TodoCounter }