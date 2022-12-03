import {useState} from 'react'

function Count() {
    const [count , setCount] = useState(0)
  
    const addOne = () => {
      setCount(count + 1)
    }
  
return (
    <div className="App">
        <button className='btn' onClick={addOne}>
        count = {count}
        </button>
      </div>
    );
}

export default Count