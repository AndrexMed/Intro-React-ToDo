import React from 'react';
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}) {
  return (
    <div className='container-search'>
      <input placeholder="Buscar Tarea, Ex: Cortar Cebolla"
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