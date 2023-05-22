import './TodoItem.css'

function TodoItem(props) { //Aqui no hizimos "desestructuracion..."
    return (
      <li className='TodoItem'>
        <span className={`Icon Icon-check Icon-check--active`}>
          V
          </span>
        <p className='TodoItem-p TodoItem-p--complete'>
          {props.text} {/* Aqui se imprime el props que entre con la propiedad text */}
          </p> 
        <span className='Icon Icon-delete'>
          X
          </span>
      </li>
    );
  }
  export { TodoItem }