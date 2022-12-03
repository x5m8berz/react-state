import {useState} from 'react'
import './App.css'

function Count() {
  const [count , setCount] = useState(0)

  const icr = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <button className='btn' onClick={icr}>
        count = {count}
      </button>
    </div>
  );
}

function App(){
  return (
    <div>
      <Count/>
      <Count/>
      <Count/>
      <Count/>
    </div>
  )
}

export default App;
