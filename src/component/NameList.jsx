import {useState} from 'react'

function NameList() {
  const [list, setList] = useState(['han','rocky','halim'])
  const [name, setName] = useState('')

  const onAddName = () => {
    setList([...list, name])
    setName('')
  }
  
  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} 
        />
      <button onClick={onAddName}>
        Add name
      </button>
    </div>
    
  )
}

export default NameList