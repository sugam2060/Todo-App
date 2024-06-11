import './Createtodo.css'

export function CreateTodo(){
    return(
        <div className='createtodo'>
            <input type="text" placeholder="title" /><br></br>
            <input type="text" placeholder="description" /><br></br>
            <button onClick={()=>{
                fetch('http://localhost:3000/todos',{
                    method: 'POST',
                    headers: "application/json",
                    body : JSON.stringify({
                        title:"sugam pudasain",
                        description:"i am a software engineer"
                    })
                }).then(async (res)=>{
                    const jsondata = await res.json();
                    console.log(jsondata);
                })
            }}>Add a todo</button>
        </div>
    )
}

