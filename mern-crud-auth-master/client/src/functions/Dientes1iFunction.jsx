export function Dientes1iFunction(arreglo,funcion) {
    return (
        
        <tr>
            <th style={{ padding: '2px', width: '12.5%' }}></th>

            {arreglo.map((item, index) => (

                <th key={index} className="border-black border rounded " style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
                    <DienteLock onClick={() => { funcion(index) }}>{item[0]}</DienteLock>
                </th>
            ))}
        </tr>
    )
}