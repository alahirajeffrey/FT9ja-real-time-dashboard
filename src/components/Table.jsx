const Table = ({ list, colNames}) => {
    return ( 
        <div>
            {list.length > 0 && (
                <table className="table" cellSpacing='0'>
                    <thead>
                        <tr>
                            {colNames.map((headerItem, index)=>{
                                <th key={index} >
                                    {headerItem.toUpperCase()}
                                </th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(list).map((obj, index)=>{
                            <tr key={index}>
                                {Object.values(obj).map((value, index2)=>{
                                    <td key={index2}>(value)</td>
                                })}
                            </tr>
                        })}
                    </tbody>
                </table>
            )}
        </div>
     )
}

export default Table;