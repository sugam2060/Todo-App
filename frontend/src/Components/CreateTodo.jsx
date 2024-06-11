import './Createtodo.css'

export function CreateTodo(){
    return(
        <div className='createtodo'>
            <input type="text" placeholder="title" /><br></br>
            <input type="text" placeholder="description" /><br></br>
            <button>Add a todo</button>
        </div>
    )
}

