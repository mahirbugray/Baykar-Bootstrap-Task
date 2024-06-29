import leftBtn from "../assets/images/leftBtn.png"
import rightBtn from "../assets/images/rightBtn.png"
import bigYellow from "../assets/images/big-yellow.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRef } from "react";
import { Slides } from "../Constant/constant";


const Section5 = () => {
    const swiperRef = useRef(null);

    const slideNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const slidePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    return (
        <section className="overflow-hidden" >
            <div className="position-relative z-0 pt-5 px-3 pt-lg-80 gap-32 gap-lg-80">
                <div className="container-lg  px-2 ">
                    <div className="d-flex justify-content-center justify-content-md-between align-items-center">
                        <h1 className="text-center text-lg-left fw-bolder">Because they love us</h1>
                        <div className="d-none d-md-flex align-items-center justify-content-between  gap-lg-2 ">
                            <button className="bg-transparent border-0 p-0" onClick={slidePrev}>
                                <img src={leftBtn} alt="left" />
                            </button>
                            <button className="bg-transparent  border-0 p-0" onClick={slideNext}>
                                <img src={rightBtn} alt="right" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center pb-5">
                    <img className="py-4" src={bigYellow} alt="" />
                    <div className="position-absolute z-2 mt-5 pb-5 px-0 pb-lg-80 w-100 ">
                        <Swiper className='py-4'
                            slidesPerView={3.5} spaceBetween={30} centeredSlides={true}
                            loop={true} pagination={{ clickable: true }} modules={[Navigation]} freeMode={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 5,
                                },
                                350: {
                                    slidesPerView: 1.3,
                                    spaceBetween: 25,
                                },
                                440: {
                                    slidesPerView: 2,
                                    spaceBetween: 100,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1023: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 100,
                                },
                                1279: {
                                    slidesPerView: 3.7,
                                    spaceBetween: 50,
                                },
                                1600: {
                                    slidesPerView: 5,
                                    spaceBetween: 120,
                                }

                            }}
                            navigation={true} ref={swiperRef}>
                            {
                                Slides.map((slide, index) => (
                                    <SwiperSlide key={index}>
                                        <div className='d-flex flex-column gap-3 p-4 p-lg-32  bg-white shadow rounded-3'>
                                            <div className='d-flex align-items-center gap-3 text-secondary-emphasis'>
                                                <img src={slide.slideLogo} alt={slide.title} />
                                                <h1 className="fs-4 m-0">{slide.title}</h1>
                                            </div>
                                            <div className="d-flex align-items-center" style={{ minHeight: "230px" }}><p className='fs-4' >{slide.text}</p></div>
                                            <div className=' d-flex align-items-center gap-3'>
                                                <img src={slide.userImg} alt={slide.userName} />
                                                <div className='d-flex flex-column '>
                                                    <h6 className='m-0'>{slide.userName}</h6>
                                                    <p className='m-0'>{slide.userJob}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Section5