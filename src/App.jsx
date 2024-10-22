import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {
 
  return (
    <div className='max-w-content_width mx-auto '>
      <Header></Header>
      <div className='md:grid md:grid-cols-3 gap-6 mt-8'>
        <Blogs />
        <BookMarks />
      </div>
    </div>
  )
}

export default App
