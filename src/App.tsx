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
import SidebarMock from './utils/Sidebar.mock'
import SideBar from '@/components/ui-elements/SideBar'
import Index from './components/ui-elements'
import { useState } from 'react'
function App() {
  const [isActive, SetIsActive] = useState(0)
  const taille = SidebarMock.length
  
  // navigating forward through panel
  function next(){
      SetIsActive((isActive) => (isActive + 1)%taille)
  }
  // navigating backward through panel
  function preview(){
      SetIsActive((isActive) => (isActive + (taille-1))%taille)
  }
  return (
    <main className=' flex w-screen h-screen'>
      <SideBar isActive={isActive} next={next} preview={preview}/>     {/* calling side bar component*/}
     <Index active={isActive}/> 
    </main>
  )
}

export default App