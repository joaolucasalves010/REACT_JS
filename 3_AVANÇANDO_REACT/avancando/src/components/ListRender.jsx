import { useState } from 'react'


const ListRender = () => {

  const [list] = useState(['João Lucas', 'Matheus Alves', 'Pedro', 'Kaio'])

  const [users, setUsers] = useState([
    {id: 1, name: "João Lucas", age: 15},
    {id: 2, name: "Pedro", age: 17},
    {id: 3, name: 'Matheus Alves', age: 17}
  ])


  // Previous state
  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4)
    
    setUsers((prevUser) => prevUser.filter((user) => randomNumber !== user.id))
  }

  return (
    <div>
      {/* 4 - render sem key */}
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {/* 5 - render com key */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>
      {/* 6 - Previous state */}
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender