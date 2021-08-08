import React ,{useEffect,useState}from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/users';
import Card from "./cardcomponent";
import Table from './tableComponent';
import tableData from '../constantData';

const Users=()=>{
    let dataArray;
    const[ipdata,changeipdata]=useState(tableData);
    const dispatch=useDispatch();
    const users=useSelector(state=>state.users.users)
    // const data1=tableData.sort(function(a, b){
    //     if((a.assetClass  )==="Equities") { return -1; }
    //     //if((a.assetClass && b.assetClass) === "Macro"){return 1;}
    //     //if((a.assetClass && b.assetClass)=== "Credit"){return 0;}

    //     //if(a.assetClass === "Macro" && b.assetClass==="Macro") { return 1; }
    //     //return 0;
    // })
//     let arr2=JSON.parse(JSON.stringify(tableData))
//     const sortedArray=arr2.sort(function(a,b){
//         if((a.assetClass==="Equities" && b.assetClass==="Macro")
//          || b.assetClass==="Credit"
//          ){return -1}
//     })
//     let arr1=JSON.parse(JSON.stringify(sortedArray));
//     const sort2=arr1.sort(function(a,b){
//         if(a.assetClass===b.assetClass){
//         return (a.price-b.price )}
//     })
//    console.log(sort2)

    useEffect(()=>{
        // dispatch(getUsers([{
        //     id:1,
        //     name:"jas",
        // }]))
        dispatch(getUsers())
    },[])
    function clickOne(e){
        e.preventDefault();
        const sortedArray=tableData.sort(function(a,b){
            if((a.assetClass==="Equities" && b.assetClass==="Macro")
             || b.assetClass==="Credit"
             ){return -1}
        }) 
        //console.log("inside",sortedArray)
        changeipdata(sortedArray);
        //dataArray=sortedArray;
    }
    return (
    
        <>
        {console.log("render",ipdata)}
        <Table
        rowdata={ipdata}
        clickOne={clickOne}
        />
        {/* {tableData.map((row,i)=>(
            <Table 
            key={i}
            row={row}
            />
        ))} */}
       {/* <Table/>
        {users.map((user,i) =>(
             
            <Card user={user} key={i}/>
        ))
        } */}
        
        </>
    )
}

export default Users;