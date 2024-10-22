

import { BsBookmark } from "react-icons/bs";

export default function Blog({blog}){
    console.log(blog)
    const{author_img, author_name, cover_img, hashtags, post_date, reading_time, title} = blog;
    return(
        <div className="border-b">
            <img className="max-h-[450px] w-full" src={cover_img} alt={title} />
            <div className="flex items-center justify-between mt-8 mb-4">
                <div className="flex gap-6 items-center">
                    <img className="w-[60px]" src={author_img} alt="author-avatar" />
                    <div>
                        <h3 className="text-2xl font-bold text-secondary">{author_name}</h3>
                        <p className="font-semibold text-base text-secondary/60">{post_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-secondary/60">
                    <p className="text-xl font-medium">{reading_time} min read</p>
                    <button className="font-bold text-2xl "><BsBookmark /></button>
                </div>
            </div>
            <h2 className="text-secondary text-[40px] font-bold leading-[160%]">{title}</h2>

            <p className="text-xl font-medium text-secondary/60 mt-4 mb-[21px]">
                {
                    hashtags.map((hashtag, index) => <span key={index}>{hashtag} </span>)
                }
            </p>

            <a href="" className="underline text-xl font-semibold text-primary">Mark as read</a>

            <div className="p-[1px] my-10 bg-secondary/10"></div>
        </div>
    )
}