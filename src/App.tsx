/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 11/09/2024 - 19:07:35
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/09/2024
    * - Author          : Hp
    * - Modification    : 
**/
import SideBar from '@/components/ui-elements/SideBar'
import FormSection from './components/ui-elements/FormSection'
import { useState } from 'react'
function App() {
  const [isActive,setIsActive] = useState(0)
  const taill =4 
  function incrementer() {
    setIsActive((isActive)=>(isActive + 1)% taill)
  }
  function disincrementer() {
    setIsActive((isActive)=>(isActive - 1)% taill)
  }
  return (
    <main className=' flex w-screen h-screen'>
      <SideBar active={isActive} incrementer={incrementer} disincrementer={disincrementer} />
      <FormSection  active={isActive}/>
    </main>
  )
}

export default App