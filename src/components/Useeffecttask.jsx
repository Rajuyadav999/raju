import React, { useEffect, useState } from 'react'

export default function UseEffect() {

    const [views,setViews] = useState([]);

    useEffect(()=>{
        fetch('https://651fecba906e276284c3bbc5.mockapi.io/test')
        .then(res=>res.json())
        .then(resdata => setViews(resdata))
        .catch(error => console.log(error));
    },[views])


  return (
    <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>RegNo</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    views.map((items)=>{
                        return(
                            <tr>
                                <td>{items.id}</td>
                                <td>{items.Name}</td>
                                <td>{items.Email}</td>
                                <td>{items.RegNo}</td>
                                <td>{items.Phone}</td>
                                <td>
                                    <button className='btn btn-outline-danger'>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
