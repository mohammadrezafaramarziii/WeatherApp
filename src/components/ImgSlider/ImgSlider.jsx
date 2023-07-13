import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// images slider
import pic1 from "../../assets/images/slide1.jpg";
import pic2 from "../../assets/images/slide2.jpg";
import pic3 from "../../assets/images/slide3.jpg";
import pic4 from "../../assets/images/slide4.jpg";
import pic5 from "../../assets/images/slide5.jpg";
import pic6 from "../../assets/images/slide6.jpg";
import pic7 from "../../assets/images/slide7.jpg";
import pic8 from "../../assets/images/slide8.jpg";
import pic9 from "../../assets/images/slide9.jpg";


function ImgSlide(props){
    return(
        <div>
            <img src={props.imgSrc} alt={props.imgAlt} className="aspect-video rounded-3xl"/>
        </div>
    );
}

export function ImgSlider(){
 
    return(
        <>
        <Swiper
            modules={[Autoplay]}
            spaceBetween="10" 
            loop={true}
            autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false
                }}

            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
               
                }}
                className='rounded-3xl'
        >
            <SwiperSlide>
                <ImgSlide imgSrc={pic1}/>
            </SwiperSlide>

            <SwiperSlide>
                <ImgSlide imgSrc={pic2}/>
            </SwiperSlide>
            
            <SwiperSlide>
                <ImgSlide imgSrc={pic3}/>
            </SwiperSlide>
            
            <SwiperSlide>
                <ImgSlide imgSrc={pic4}/>
            </SwiperSlide>

            <SwiperSlide>
                <ImgSlide imgSrc={pic5}/>
            </SwiperSlide>

            <SwiperSlide>
                <ImgSlide imgSrc={pic6}/>
            </SwiperSlide>

            <SwiperSlide>
                <ImgSlide imgSrc={pic7}/>
            </SwiperSlide>

            <SwiperSlide>
                <ImgSlide imgSrc={pic8}/>
            </SwiperSlide>

            <SwiperSlide>
                <ImgSlide imgSrc={pic9}/>
            </SwiperSlide>

        </Swiper>
        </>
    );
}