import React from 'react'
import { Tabs } from 'antd'
import { useSelector } from 'react-redux'

function Profile(){
    const {user} = useSelector((state)=> state.user)

    const Tabitems = [
        {
            key : '1',
            label : 'Theatres'
        },
        {   
            key : '2',
            label : 'Bookings'
        }
    ]
    return(
        <div>
            <h2>Welcome to your Profile {user.name} !!</h2>
            <Tabs defaultActiveKey='1' items={Tabitems}/>
        </div>
    )
}

export default Profile    