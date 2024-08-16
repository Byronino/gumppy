
import logo from "../images/logo.png"
import logoGumppy from "../images/logoGumppy.png"

export function Header() {
    return (
        <div className="rounded-lg b bg-[#f87a85] p-2 flex justify text-justify-center my-4 mx-6" style={{boxShadow: '5px 5px 10px rgba(0, 0 , 0, 0.5)'}}>
            <div><img src={logoGumppy} width="300" height="150" /></div>

        </div>
    )
}