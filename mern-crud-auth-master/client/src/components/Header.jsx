
import logo from "../images/logo.png"

export function Header() {
    return (
        <div className="rounded-lg b bg-[#f87a85] p-8 flex justify text-justify-center my-4 mx-6">
            <div><img src={logo} width="100" height="100" /></div>

            <h1 className='font-bold m-2 text-4xl'>GUMPPY</h1>
        </div>
    )
}