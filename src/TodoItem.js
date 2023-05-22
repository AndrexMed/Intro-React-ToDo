function TodoItem(props) { //Aqui no hizimos "desestructuracion..."
    return (
      <li>
        <span>V</span>
        <p>{props.text}</p> {/* Aqui se imprime el props que entre con la propiedad text */}
        <span>X</span>
      </li>
    );
  }
  export { TodoItem }