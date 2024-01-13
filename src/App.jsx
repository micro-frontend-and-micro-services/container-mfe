
import { useState } from 'react'
import './App.css'
// import { AccountBalance } from '@mui/icons-material'
import LayoutMfe from 'layoutMfe/App'
// import {AboutMfe} from 'aboutMfe/App'
import AuthMfe from 'authMfe/App'
import FormbuilderMfe from 'formbuilderMfe/App'

function App() {
  const [name, setName] = useState("initial")

  return (
    <div style={{background:"green", color:'white',padding:'10px'}}><div>Container-mfe</div>
     <LayoutMfe value={name} update={(e)=>setName(e)}/>
     <AuthMfe />
     <FormbuilderMfe />

    
    </div>
  )
}

export default App
