import React,{useState} from 'react'

const AddToDo = () => {
const [input, setInput]=useState("")
const [list, setList]=useState([])
const [checked, setChecked]=useState(false)

const handleChange=(e)=>{
    setInput(e.target.value)
    console.log(input)
}

const handleAdd=(e)=>{
    e.preventDefault()
    setList([...list, {text:input, checked:checked}])
    console.log(list)
}
  return (
    <div>
        <h1>MY TO DO LIST</h1>
        <form>
            <input type="text" onChange={handleChange}/>
            <button onClick={handleAdd}>ADD</button>
        </form>
        <ul>
            {list.map((el,i)=><li className={el.checked?"complete":""}>{el.text}
                <button onClick={(e)=>{setChecked(el.checked=!el.checked) 
                    console.log(el.checked)}}>{el.checked?"UnComplete":"Complete"}</button>
            <button onClick={(e)=>{setList(list.filter((x,j)=>i!=j))}}>Delete</button>
            </li>)}
        </ul>
    </div>
  )
}

export default AddToDo