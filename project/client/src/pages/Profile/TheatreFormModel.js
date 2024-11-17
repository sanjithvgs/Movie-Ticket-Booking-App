import React from 'react'
import { Modal, Col, Form, Row, Input, Button, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { addTheatre } from '../../apicalls/theaters';
import { useSelector } from "react-redux";

function TheatreFormModel({isModelOpen, setModel}){

  const { user } = useSelector((state) => state.user)

    const onSubmitForm = async(payload)=>{

      try{

        const response = await addTheatre({...payload, owner: user._id})
        if(response.success){
          setModel(false)
          message.success("Theatre added succesfully")
        } 
 
      }catch(err){
        console.log(err)
      }
    }

    return(
        <>

        <Modal open={isModelOpen}  closable={false}  footer={null}> 

<Form layout='vertical' style={{width: "100%"}} onFinish={onSubmitForm}>
          <Row gutter={{
            xs: 6,
            sm: 10,
            md: 12,
            lg: 16,
          }}>
            <Col span={24}>
              <Form.Item label="Theatre Name" htmlFor='name' name="name" className='d-block' rules={[{required: true, message: "Theatre name is required!"}]}>
                <Input id="name" type="text" placeholder='Enter the theatre name'></Input>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Theatre Address" htmlFor='address' name="address" className='d-block' rules={[{required: true, message: "Theatre address is required!"}]}>
                <TextArea id="address" rows="3" placeholder='Enter the theatre address'></TextArea>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Row  gutter={{
                xs: 6,
                sm: 10,
                md: 12,
                lg: 16,
              }}>
              <Col span={12}>
                  <Form.Item  label="Email" htmlFor='email' name="email" className='d-block' rules={[{required: true, message: "Email  is required!"}]}>
                        <Input id="email" type="email" placeholder='Enter the E-mail'></Input>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item  label="Phone Number" htmlFor='phone' name="phone" className='d-block' rules={[{required: true, message: "Phone number is required!"}]}>
                    <Input id="phone" type="number" placeholder='Enter the phone number'></Input>
                </Form.Item>                
              </Col>
            </Row>
            </Col>          
          </Row>          
          <Form.Item>
              <Button block type="primary" htmlType='submit' style={{fontSize: "1rem", fontWeight: "600"}}>Submit the Data</Button>
              <Button className='mt-3' block onClick={()=>setModel(false)}>Cancel</Button>
          </Form.Item>
      </Form>
      </Modal>
        </>
    )
}

export default TheatreFormModel