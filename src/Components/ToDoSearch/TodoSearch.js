import './TodoSearch.css'

function TodoSearch() {
  return (
    <div className='container-search'>
      <input placeholder="Añadir Tarea, Ex: Cortar Cebolla"
        className='TodoSearch'>
      </input>
    </div>

  );
}
export { TodoSearch }