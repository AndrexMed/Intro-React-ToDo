import './TodoSearch.css'

function TodoSearch() {
  return (
    <div className='container-search'>
      <input placeholder="Añadir Tarea, Ex: Cortar Cebolla"
        className='TodoSearch'
        onChange={(evento) => {
          console.log("Escribiste en el Search...")
          console.log(evento)
          console.log(evento.target)
          console.log(evento.target.value);
        }}>
      </input>
    </div>

  );
}
export { TodoSearch }