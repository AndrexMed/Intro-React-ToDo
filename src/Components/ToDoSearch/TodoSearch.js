import React from 'react';
import './TodoSearch.css'

function TodoSearch() {

  const [searchValue, setSearchValue] = React.useState('');

  console.log("Los usuarios buscan toDos de: "+searchValue)

  return (
    <div className='container-search'>
      <input placeholder="Añadir Tarea, Ex: Cortar Cebolla"
        className='TodoSearch'
        value={searchValue}
        onChange={(evento) => {
          setSearchValue(evento.target.value);
          
        }}>
      </input>
    </div>

  );
}
export { TodoSearch }