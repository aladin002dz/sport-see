import { useState } from 'react'


import viteLogo from '@assets/vite.svg'
import reactLogo from '@assets/react.svg'


const Graphics = () =>{


  let nbVotes = 120;
  const [count, setCount] = useState(nbVotes);



return (
  <>
    <div className="panel graphics debeug">

          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
          <h1>BB + Voyage </h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              Nombre de personne qui pense que BB est un fumier : {count}
            </button>
          </div>
      </div>
  </>

)

}
export default Graphics