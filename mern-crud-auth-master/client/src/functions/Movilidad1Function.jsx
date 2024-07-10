export function Movilidad1Function({ children ,dientes1i}) {
  return (
    <div>
      {children.map((movilidad, index) => (
                  <th key={index} className="border-black border " style={{ padding: '2px', width: '12.5%' }} >

                    {dientes1i[index][1] ? (
                      <div></div>
                    ) :
                      (
                        <input
                          style={{ width: '80%', height: '20px', fontSize: '12px', textAlign: "center" }}
                          value={movilidad}
                          onChange={(e) => cambioMovilidad1(e, index)}
                          onFocus={(e) => e.target.value = ''}
                        />

                      )}
                  </th>
                ))}
    </div>
  );
}