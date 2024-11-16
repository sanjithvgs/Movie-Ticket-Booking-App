import React, { useState } from 'react'
import { Button } from 'antd'
import TheatreFormModel from './TheatreFormModel'

function TheatreList() {

    const [isModelOpen, setModelOpen] = useState(false)

    return(
        <div>
            <div className='d-flex justify-content-end'>
                <Button onClick={()=>setModelOpen(true)} type='primary'>Add New Theatre Here</Button>

                {isModelOpen && <TheatreFormModel isModelOpen={isModelOpen} setModel={setModelOpen}/>}
                
            </div>
        </div>
    )
}

export default TheatreList