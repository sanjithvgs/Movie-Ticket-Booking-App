import React from 'react'
import { Tabs } from 'antd'
import { useSelector } from 'react-redux'
import TheatreList from './TheatreList';
import Bookings from './Bookings';

function Profile(){
    const {user} = useSelector((state)=> state.user)

    const Tabitems = [
        {
            key : '1',
            label : 'Theatres',
            children : <TheatreList/>
        },
        {   
            key : '2',
            label : 'Bookings',
            children : <Bookings/>
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