import './TodoCounter.css' //Importando archivo css

//props es lo mas parecido a parametros pero no son lo mismo...

function TodoCounter({total, completed}) { //Con las llaves estamos "Destructurando"
    return (
      //Forma de insertar estilos en linea
      // <h1 style={{
      //   fontSize: '24px',
      //   textAlign: 'center',
      //   margin: '0',
      //   padding: '48px'
      // }}>
      //   Haz completado {completed} de {total} ToDos
      // </h1>

       <h1 className='TodoCounter'>
        Haz completado <span>{completed}</span> de <span>{total} </span>ToDos
      </h1>
    );
  }
  export { TodoCounter }