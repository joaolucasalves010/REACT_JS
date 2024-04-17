import { useState } from 'react'


const ListRender = () => {

  const [list] = useState(['João Lucas', 'Matheus Alves', 'Pedro', 'Kaio'])

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListRender