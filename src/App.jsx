import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {
 
  return (
    <div className='max-w-max_width mx-auto border border-red-500'>
      <div className=''>
        <Header></Header>
        <Blogs></Blogs>
      </div>
    </div>
  )
}

export default App
