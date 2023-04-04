
import { useState } from 'react'
import './App.css'
import SideCart from './components/SIdeCart/SideCart'
import Cards from './components/navbar/Cards/Cards'
import Navbar from './components/navbar/Navbar'

function App() {
  const [readTime, setreadTime] = useState("")
const totalReadTime =(time) => {
  const previousReadTime =JSON.parse(localStorage.getItem('readTime'))
  if (previousReadTime){
    const sum = previousReadTime + time
    localStorage.setItem('readTime',sum)
    setreadTime(sum)
  }
  else{
    localStorage.setItem('readTime',time)
    setreadTime(time)
  }
}
const [bookMark, setBookMark]= useState("")
const setTittleBookmark = (title) => {
let previousBookmark = JSON.parse(localStorage.getItem('bookMark'))

if(previousBookmark){
const newBookmark= localStorage.setItem('bookMark',JSON.stringify([title,...previousBookmark]))
setBookMark(newBookmark)
}
else{
  localStorage.setItem('bookMark',JSON.stringify([title]))
}

}
return (
    <div className="App">
     <div>
     <Navbar></Navbar>
     </div>
     <div className='grid grid-cols-1 lg:grid-cols-12 '>
      <div className='lg:col-span-8'>
      <Cards totalReadTime={totalReadTime} setTittleBookmark={setTittleBookmark}></Cards>
      </div>
      <div className='lg:col-span-4'>
        <SideCart bookmarkTittle={bookMark} readTime={readTime}></SideCart>
      </div>
     </div>
    </div>
  )
}

export default App
