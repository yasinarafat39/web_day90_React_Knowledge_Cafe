import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [totalReadingTime, setTotalReadingTime] = useState(0)

  const handleBookMark = (blog) => { 
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (reading_time) => {
    setTotalReadingTime(totalReadingTime + reading_time);
  }
 
  return (
    <div className='max-w-content_width mx-auto '>
      <Header></Header>
      <div className='md:grid md:grid-cols-3 gap-6 mt-8'>
        <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead} />
        <BookMarks bookmarks={bookmarks} totalReadingTime={totalReadingTime}/>
      </div>
    </div>
  )
}

export default App
