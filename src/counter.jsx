import { useState } from "react"

function Counter () {
    const btnStyle = {
            fontSize:'30px',
            borderRadius:'20%',
            height:'50%',
            marginRight:'25px'
        }
    const[count,setCount] = useState(0)
    const handleAdd = () => {
        let newCount = count + 1;
        setCount(newCount)
    }
    const reset = () => {
        setCount(0)
    }
    const minus = () => {
        
     if (count <= 0){
         setCount(0)
     }
     else{
          let minusCount = count - 1;
          setCount(minusCount)
     }
    }
    return (
       <>
      <div >
         <h1 style={
        {
            fontSize:'150px'
        }
       }>{count}</h1>

       <button onClick={handleAdd} style={
        btnStyle} >+ </button>
       <button onClick={reset} style={
        btnStyle} >Reset </button>
       <button onClick={minus} style={
        btnStyle} >- </button>
      </div>
       </>
    )
}
export default Counter