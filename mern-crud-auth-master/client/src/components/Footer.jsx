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
  
        <div className="rounded-md " style={{ boxShadow: '5px 5px 10px rgba(0, 0 , 0, 0.5)'}}
          
        >
          
          <div ><img className="rounded-md" src={futer} width="100%" height="20%" /></div>
        </div>
      </div>
    )
  }