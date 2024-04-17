import { useState } from 'react'


const ListRender = () => {

  const [list] = useState(['João Lucas', 'Matheus Alves', 'Pedro', 'Kaio'])

  const [users, setUsers] = useState([
    {id: 1, name: "João Lucas", age: 15},
    {id: 2, name: "Pedro", age: 17},
    {id: 3, name: 'Matheus Alves', age: 16}
  ])

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
    </div>
  )
}

export default ListRender