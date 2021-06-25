import React from 'react'

const UserList = ({userList}) => {
    return (
        <div>
            {userList.map((el) => (
            <ul key={el.id} className="list">
                <li style={{ listStyle: "none" }} >
         
            {el.id} -{el.name }
            <br />
           <div className="elements">
           Username:{el.username}
           <br />
            Email: {el.email}
            <br />
            Street: {el.address.street}-Suite: {el.address.suite}-City: {el.address.city}-Zipcode: {el.address.zipcode}  
            <br/>
            geoLat: {el.address.geo.lat}-geoLng: {el.address.geo.lng} </div>
            </li>
            </ul> 
    ))}

        </div>
    )
}

export default UserList