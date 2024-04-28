import React from "react";
import "./Residencies.css";
import {Swiper,SwiperSlide,useSwiper} from "swiper/react";
import "swiper/css";
import data from "./slider.json";
import { sliderSettings } from "./common";

function Residencies() {
    return ( 
        <>
            <section className="r-wrapper" id="popular-residencies">
                <div className="paddings innerWidth r-container">
                    <div className="r-head flexColStart">
                        <span className="orangeText">Best Choices</span>
                        <span className="primaryText">Popular Residencies</span>
                    </div>
                    
                
                <Swiper {...sliderSettings}>
                <SliderButtons/>
                    {
                        data.map((card,i)=>(
                            <SwiperSlide key={i}>
                                    <div className="flexColStart r-card">
                                        <img src={card.image} alt="home" />
                                        <span className="secondaryText r-price">
                                            <span className="orangeText">$</span>
                                            <span>{card.price}</span>
                                        </span>
                                        <span className="primaryText">{card.name}</span>
                                        <span className="secondaryText">{card.detail}</span>
                                    </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                </div>
            </section>
        </>
     );
};

export default Residencies;

const SliderButtons = () =>{
    const Swiper = useSwiper();
    return(
        <>
            <div className="flexCenter r-buttons">
                <button onClick={()=>Swiper.slidePrev()} >&lt;</button>
                <button onClick={()=>Swiper.slideNext()} >&gt;</button>
            </div>
        </>
    );
}