export function TableD({children}){
    return(
        <div className="container-flex">
        <table>
          <thead>
            
              <tr >
              {dientes.map((dientes, index) => (
                <th key={index} className="border-black border px-4 py-2">{dientes} </th>
              ))}
              </tr>
          </thead>
          <tbody>

            {pais.map((pais, index) => (
              <tr key={index}>
                <td className="border-black border px-4 py-2">{pais[0]} </td>
                <td className="border-black border px-4 py-2">{pais[1]}</td>
              </tr>

            ))}

          </tbody>
        </table>
      </div>
    )
}