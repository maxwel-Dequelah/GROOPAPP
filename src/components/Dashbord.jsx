import { useEffect, useState } from "react";
import './css/sideMenu.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min";



function ListAcccounts(){
    const[bankData, setBankData]=useState([])


    useEffect(()=>{
        fetch("/api/accounts")
                .then(response => 
                 response.json()
                )
                .then(data => {
                setBankData(data)
                  })
        }

    ,[])
    
        console.log(bankData)

    return(
    <>
        {/* the left-side Menu */}
        <div id="scroll">
    
        {/* table showing all members with their Ballances */}
        <table className=" table table-dark table-bordered">
        <tbody>
        <tr>
                <th>Number</th>
                <th>ACC NUMBER</th>
                <th>NAME</th>
                <th>ACC BALLANCE</th>
        </tr>
         {bankData.map((data,i)=>

            <tr key ={i}>
                <td>{i+1}</td>
                <td >{data.AccNumber}</td>
                <td>{data.AccountName}</td>
                <td>{data.AccountBallance}</td>
            </tr>
         )}
         </tbody>
        </table>
        </div>
    </>
)}

export default ListAcccounts;