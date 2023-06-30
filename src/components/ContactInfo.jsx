const ContactInfo = ()=>{
    return (
        <div className="rounded-xl p-4 flex space-x-8 w-full bg-gray-100 items-center">
            <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
            <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9854 30.5549C24.2822 30.5549 31.1305 23.7066 31.1305 15.4244C31.1305 7.14216 24.2676 0.293945 15.9707 0.293945C7.6885 0.293945 0.854919 7.14216 0.854919 15.4244C0.854919 23.7066 7.70313 30.5549 15.9854 30.5549ZM15.9854 20.4874C11.8589 20.4874 8.65427 21.9653 7.10318 23.6627C5.1131 21.5117 3.89857 18.6144 3.89857 15.4244C3.89857 8.70788 9.26886 3.32296 15.9707 3.32296C22.6873 3.32296 28.0868 8.70788 28.1014 15.4244C28.1014 18.6144 26.8869 21.5117 24.8822 23.6774C23.3311 21.9653 20.1265 20.4874 15.9854 20.4874ZM15.9854 18.0876C18.8242 18.1169 21.0337 15.6878 21.0337 12.5563C21.0337 9.60049 18.8095 7.12753 15.9854 7.12753C13.1759 7.12753 10.937 9.60049 10.9516 12.5563C10.9663 15.6878 13.1612 18.073 15.9854 18.0876Z" fill="#1C1C1E"/>
            </svg>

            </div>
            <div className="font-semibold text-xl">
                <div >Nombre de contact</div>
                <div>5122</div>
            </div>
        </div>
    )
}

export default ContactInfo