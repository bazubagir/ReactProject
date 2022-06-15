import React from "react";
import Nav from "../component/navbar";
import Tiger from "../assets/images/timg.jpg";
import Adimg from "../assets/images/adimg.jpg";
import Giraffe from "../assets/images/giimag.jpg";
import other from "../assets/images/oimg.jpg";
import "../views/Home.css";
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import Footer from "../component/footer";
import HomeLayout from "../component/HomeLayout";

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: 'rgb(138, 118, 8)',
    }}
  />
);
const onSearch = (value) => console.log(value);
const Home=()=>{
    return(
      <>
      
        <div className="homecontainer">
            <HomeLayout>
            <div className="home-content">
                <h1 className="heading-title">Rwanda Booking Tour</h1>
                <div className="carousel-img">
                <Carousel autoplay>
                    <img src={Tiger} alt="tiger image"/>
                    <img src={Adimg} alt="lion image"/>
                    <img src={Giraffe} alt="giraffe image"/>
                    <img src={other} alt="other images"/> 

                </Carousel>

                
                 <Search
      placeholder="Search Here"
      enterButton="Search" 
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    /></div>
                <h2 className="top-tour"> Top-tour</h2>
                <hr className="align"></hr>
   
            </div>
            </HomeLayout>
        </div>
        </>
    )
};

export default Home;