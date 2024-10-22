export default function BookMarks ({bookmarks, totalReadingTime}){
    
    return ( 

        <div className=" md:cols-span-1 sticky top-0">
                    
            <div className="border border-primary bg-primary/10 rounded-lg p-[21px] mb-5">
                <h2 className="font-bold text-primary text-2xl">Spent time on read: {totalReadingTime} min</h2>
            </div>
            
            
            <div className="rounded-lg bg-secondary/5 md:cols-span-1 p-[30px] min-h-screen overflow-y-auto">
                <h3 className="font-bold text-2xl text-secondary ">Bookmarked Blogs: {bookmarks.length}</h3>
                {
                    bookmarks.map((singleBookMark, index) => <div 
                    className="bg-white p-5 my-4 rounded-lg"
                    key={index}
                    >
                        <p className="font-semibold text-lg text-secondary">{singleBookMark.title}</p>
                    </div>)
                }
            </div>
            
        </div>
        
    )
}