
import profile from "../../assets/images/profile.png"

export default function Header(){
    return (
        <div className="flex justify-between items-center pt-12 pb-8 border-b-2">
            <h1 className="font-bold text-[40px]">Knowledge Cafe</h1>
            <img className="w-[60px]" src={profile} alt=""  />
        </div>
    )
}