import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
        <div className="home__container">
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/Jupiter20/outbound/1500x600-unrec._CB655709942_.jpg" />
            </div>
            <div className="carousel-item" data-bs-interval="10000">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Gateway_JWELSSH/Aug/BBD/new/PC_BUNK_1500x600._CB643828341_.jpg"
              alt="img"/>
            </div>
            <div className="carousel-item">
            <img  className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/smart-home-days_1500X600_._CB659309240_.jpg"/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
        <div className="home__row">
        <Product 
            title="Think and Grow Rich (DELUXE HARDBOUND EDITION)" 
            price={500,990} 
            image="https://m.media-amazon.com/images/I/81lr6LSKvKS._AC_UY218_.jpg" 
            rating={5}/>
            <Product
            title="The Cube Club Adjustable Dumbbells (2.5kg to 24kg) for Men & Women for Fitness and Home Workout (Pair)" 
            price={17999,19999} 
            image="https://images-eu.ssl-images-amazon.com/images/I/41UbfD5KYiL._SY300_SX300_QL70_FMwebp_.jpg" 
            rating={3}/>
        </div>
        <div className="home__row">
        <Product
            title="Hero Lectro Kinza 27.5T SS Single Speed Electric Cycle - 18" 
            price={1700,24999} 
            image="https://images-eu.ssl-images-amazon.com/images/I/41X+1+NpgML.jpg" 
            rating={4}/>
            <Product
            title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8-core CPU and 8-core GPU, 8GB RAM, 512GB SSD) - Space Grey" 
            price={7999,130990} 
            image="https://images-na.ssl-images-amazon.com/images/I/71an9eiBxpL._SX679_.jpg" 
            rating={4}/>
            <Product
            title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!" 
            price={150,302} 
            image="https://m.media-amazon.com/images/I/91VokXkn8hL._AC_UY218_.jpg" 
            rating={4}/>
        </div>
        <div className="home__row">
            <Product
            title="LG UltraWide 29 Inch WFHD (2560 x 1080) IPS Display - HDR 10, AMD Free sync, Inbuilt 5W Speaker, sRGB 99%, Multi Tasking Monitor - 29WL50S" 
            price={59999,89999} 
            image="https://m.media-amazon.com/images/I/71J4IieNalL._AC_UY218_.jpg" 
            rating={5}/>
            </div>
            <div className="home__row">
            <Product
            title="Attitude Is Everything: Change Your Attitude ... Change Your Life" 
            price={359,459} 
            image="https://m.media-amazon.com/images/I/41F8ATXoMOL._AC_SY161_.jpghttps://m.media-amazon.com/images/I/81zz6LqCreS._AC_UY218_.jpg" 
            rating={5}/>
            <Product
            title="Royal Enfield Mini 3D Scale Model/Miniature (Black) (RLCSMO000004)" 
            price={7999,8999} 
            image="https://m.media-amazon.com/images/I/61xwgkvxk-L._AC_UL320_.jpg" 
            rating={4}/>
            <Product
            title="Amazon Brand Vinyl Wall Sticker for Living Room " 
            price={199,219} 
            image="https://images-na.ssl-images-amazon.com/images/I/61Exu99RZFL._SX425_.jpg" 
            rating={5}/>
        </div>
        <div className="home__row">
        <Product 
            title="WOW Skin Science Apple Cider Vinegar Foaming Face Wash - with Organic Certified Himalayan Apple Cider Vinegar - No Parabens,…" 
            price={500,990} 
            image="https://images-eu.ssl-images-amazon.com/images/I/81GpSfq3LzS._AC_UL160_SR160,160_.jpg" 
            rating={5}/>
            <Product
            title="Sparnod Fitness SAB-05 Air Bike Exercise Cycle for Home Gym - Dual Action for Full Body Workout (Setting for Moving/Stationary Handles) - Adjustable Resistance, Height Adjustable seat with Back Rest (Do It Yourself Installation)" 
            price={6000,7999} 
            image="https://images-eu.ssl-images-amazon.com/images/I/41j8RzdB0nL._SX300_SY300_QL70_FMwebp_.jpg" 
            rating={3}/>
        </div>
        </div>    
        </div>
    )
}

export default Home
