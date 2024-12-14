import React, { useState } from 'react'
import { Button } from 'antd'
import TheatreFormModel from './TheatreFormModel'


    //const getData = ()=>{

        //try{
            // dispatch(showLoading());
            // const response = await getAllTheatres({ owner: user._id });
            // if(response.success){
            //     const allTheatres = response.data;
            // }
        //}
    //}

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