import ContactInfo from "../components/ContactInfo"
import BigProfil from '../assets/bigProfil.png'
import SmallProfil from "../assets/smallProfil.png"


const Profil = ()=>{
    return (
        <div className="px-12 py-2 h-full ">
            
            <div className="rounded-xl bg-gray-700 h-[85%]">
                <img src={BigProfil} alt="" className="w-full h-full"/>
                
            </div>

            <div className="flex space-x-4 relative px-12" >
                <div className="w-32 h-32 rounded-full bg-gray-400 absolute -top-8">
                    <img src={SmallProfil} alt="" className="w-full h-full rounded-full"/>
                </div>
                <div className="pl-32 pt-4">
                    <div className="text-2xl font-semibold">Jimmy Cliton</div>
                    <div>jclinton</div>
                </div>
            </div>

            <div className="pt-12 pb-16">
                
                <ContactInfo></ContactInfo>
            </div>
        </div>
    )
}

export default Profil