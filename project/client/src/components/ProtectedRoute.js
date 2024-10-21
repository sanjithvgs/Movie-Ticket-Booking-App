import React, { useEffect } from 'react';
import { showLoading, hideLoading } from '../redux/loadersSilce'
import { getCurrentUser } from '../apicalls/users';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser} from '../redux/userSilce';
import { Layout, Menu, message } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { HomeOutlined, UserAddOutlined, UserOutlined, LogoutOutlined} from '@ant-design/icons';

function ProtectedRoute({children}){

    const { user } = useSelector((state)=> state.user);

    // console.log(user)  // => this will display the detail of current use who logged in now.

    // Validate the user 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const navItems = [
        {
            label : 'Home',
            icon : <HomeOutlined />
        },
        {
            label : `${user ? user.name.charAt(0).toUpperCase() + user.name.slice(1) : ""}`,           // charAt(0) => takes first letter of user name
            icon : <UserAddOutlined />,                                                                // slice(1)  => add remaing letter as it is         

            children : [
                {
                    label : (
                        <span onClick={()=> {user.isAdmin? navigate('/admin') : navigate('/profile')}}>
                            My Profile
                        </span>
                    ),
                    icon : <UserOutlined />
                },
                {
                    label : (<Link to="/login" onClick={()=>localStorage.removeItem('token')}> Log out </Link>),
                    icon : <LogoutOutlined />
                }
            ]
        }
    ]

    const getValidUser = async() =>{
        try{
            dispatch(showLoading());

            const response = await getCurrentUser();
            if(response.success){
                dispatch(setUser(response.data));

                if (!response.data.isAdmin){
                    message.error("Your are not authorized !!!")
                    navigate('/')
                }
            }else{
                dispatch(setUser(null));
                    message.error(response.message);
                    localStorage.removeItem('token');
                    navigate('/login');
            }

            dispatch(hideLoading());
        }catch(err){
            dispatch(hideLoading());
            dispatch(setUser(null));
            message.error(err.message);
        } 
    }

    useEffect(()=>{
        if(localStorage.getItem('token')){
            getValidUser();
        }else{
            navigate('/login')
        }
    }, [])

    return(
    user && (
        <>

        <Layout>
            <Header className='d-flex justify-content-between'
            style={{
                position : "sticky",
                top : 0,
                zIndex : 1,
                width : "100%",
                display : "flex",
                alignItems : "center",
            }}>
                <h2 className='demo-logo text-white m-0' style={{ color: "white"}}>Booky My Show</h2>
                <Menu theme="dark" mode='horizontal' items={navItems}></Menu>
            </Header>

            <div style={{ padding:24, minHeight: 380, background: "gray"}}>
                {children}
            </div>    

        </Layout>

        </>
    )
)
}

export default ProtectedRoute;

