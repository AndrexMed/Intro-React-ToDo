import './CreateTodoButton.css'

function CreateTodoButton() {
    return (
        <button className='botonAñadirTarea'
            onClick={(evento) => {
                console.log("Hello")
                console.log(evento)
                console.log(evento.target)
            }}>
            +
        </button>
    );
}
export { CreateTodoButton }