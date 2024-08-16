import './App.css'
import Card from './components/card'


function App() {

  return (
    <>
      {/* <h1 className='bg-slate-400 text-slate-900 rounded-2xl p-10' >Tailwind Test</h1> */}
      
      <Card mainHeading = "SUBSCRIBE FOR NEWSLETTER" buttonTxt = "subscribe for newsletter"/>                                                                                                                                                                                                          
      <Card  mainHeading="SIGN UP" buttonTxt = "subscribe me" />
    </>
  )
}

export default App
