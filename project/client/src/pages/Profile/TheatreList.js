import React from 'react'
import { Button } from 'antd'
import TheatreFormModel from './TheatreFormModel'

function TheatreList() {
    return(
        <div>
            
            <div className='d-flex justify-content-end'>
                <Button type='primary'>Add Theatre</Button>
                <TheatreFormModel/>
            </div>


        </div>
    )
}

export default TheatreList