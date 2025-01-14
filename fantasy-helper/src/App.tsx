import { useState } from 'react'
import {getLeague, getRosters} from './api/sleeperTest'
import './App.css'

function App() {
  const [id, setId] = useState('');
  const [league, setLeague] = useState(null);
  const [rosters, setRosters] = useState(null);

  const handleLeague = (id: string) => {
    getLeague(id).then((response) => setLeague(response));
  }

  const handleRosters = (id: string) => {
    getRosters(id).then((response) => setRosters(response));
  }

  return (
    <>
      <h1>Fantasy Helper</h1>
      <div className="card">
        <input id="input" type="text" onChange={(e) => setId(e.target.value)} />
        <button onClick={() => handleLeague(id)}>
          Get League
        </button>
        <button onClick={() => handleRosters(id)}>
          Get Rosters
        </button>
        <div>{league? JSON.stringify(league) : ''}</div>
        <div>{rosters? JSON.stringify(rosters) : ''}</div>
        <p>
          
        </p>
      </div>
      <p>
        Sample League ID: 1144529717383651328

      </p>
    </>
  )
}

export default App
