
import './App.css'
import SideCart from './components/SIdeCart/SideCart'
import Cards from './components/navbar/Cards/Cards'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <div className="App">
     <div>
     <Navbar></Navbar>
     </div>
     <div className='grid grid-cols-1 lg:grid-cols-12 '>
      <div className='lg:col-span-8'>
      <Cards></Cards>
      </div>
      <div className='lg:col-span-4'>
        <SideCart></SideCart>
      </div>
     </div>
    </div>
  )
}

export default App
