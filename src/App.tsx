import Nav from './components/Nav'
import './App.css'
import Side from './components/side/Side'

function App() {


  return (
    <main className="Display">
      <Nav></Nav>
      <div className='content'>
        <Side/>
      </div>
      <div className='content'>
        <Side/>
      </div>
      <div className='content'>
        <Side/>
      </div>
      <div className='content'>
        <Side/>
      </div>
      <div className='content'>
        <Side/>
      </div>
      
    </main>
  )
}

export default App
