import React, { useEffect, useState } from 'react'
import { wrap } from 'comlink'
import './App.css'
import { CircularProgress } from '@material-ui/core'
import My from './my.worker'
const api = wrap(new My()) as {f: (n: number) => Promise<number>}

function Delayed<P, S>(props: {f: (args: P) => Promise<S>, args: P})
{
  const [state, setState] = useState(<CircularProgress />)
  useEffect(() =>
  {
    const calculate = async() =>
    {
      const result = await props.f(props.args)
      setState(<>{result}</>)
    }
    calculate()
  }, [])
  return <>{state}</>
}

function App() {
  return (
    <div className="App">
      {[1, 2, 3].map((i: number) =>
        <div>{i}: <Delayed key={i} f={api.f} args={i} /></div>)}
    </div>
  );
}

export default App;
