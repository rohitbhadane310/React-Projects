
import React, { useState } from 'react'

function PageCom() {

  const [value , setValue] = useState("");
  return (
    <div className='App'>
        <div className='mydiv'>
            <span>Search:</span>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button>send</button>
        </div>
    </div>
  )
}

export default PageCom;