import React from 'react';
import '../App.css';


const Table = (props) => {
   
    const TableHeader=()=>{
        return(
            <tr>
                <th  className="theader">Ticker</th>
                <th  className="theader">Price</th>
                <th  className="theader">AssetClass</th>
            </tr>
        )
    }
    return (
        <>
        <table className="tflex">
        <tbody>
            <TableHeader/>
            {props.rowdata.map((data,i)=>(
            <tr key={i} className={data.assetClass==="Macro"?"tRowWhite":data.assetClass==="Equities"?"tRowBlue":"tRowGreen"}>
                <td className="tdata">{data.ticker}</td>
                <td className={data.price>0?"tRowPriceBlue":"tRowPriceRed"}>{data.price}</td>
                <td className="tdata">{data.assetClass}</td>
            </tr>
        ))}
        </tbody>
        </table>
        </>
    )
}

export default Table;