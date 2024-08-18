import futer from "../images/futer.png"
export function Footer() {
    return (
      <div
        style={{
          position: 'relative',
        }}
      >
        {/* Contenido de la página */}
        {/* ... */}
  
        <div className="rounded-md mt-300 bg-[#F87A85]"   >
          
          <div ><img className="rounded-md" src={futer} width="100%" height="20%" /></div>
        </div>
      </div>
    )
  }