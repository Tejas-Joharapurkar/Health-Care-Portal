import React, { useState } from 'react'
import Loging from './Loging'
import Doctors from './Doctor'


const App = () => {
  const [show, setshow] = useState(true);
  return (
    <main>

      <section>

        {show ? <Loging setshow={setshow} /> : <Doctors />}



      </section>

    </main>
  )
}
export default App