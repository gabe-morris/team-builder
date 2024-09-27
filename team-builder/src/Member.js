import React from 'react'

export default function Member(props){
    const {info} = props

    if(!info) {
        <h3>Fetching Info!</h3>
    }
    return (
        <div>
            <h2>{info.username}</h2>
            <p>Email: {info.email}</p>
            <p>Role: {info.role}</p>
        </div>
        
    )
}