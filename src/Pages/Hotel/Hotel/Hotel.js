import React, {useState} from 'react';
import Header from '../../../Shares/Header/Header/Header';
import Navber from '../../../Shares/Navber/Navber/Navber';
import Footer from '../../../Shares/Footer/Footer/Footer';
import MailList from '../../../Shares/MailList/MailList/MailList'
import  './Hotel.css';
import { HiLocationMarker } from 'react-icons/hi';
import { BsFillArrowLeftCircleFill} from 'react-icons/bs';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import {AiFillCloseCircle} from 'react-icons/ai';
import Guest from '../../../Shares/Guest/Guest/Guest';
import FaqMusk from '../../../Shares/FaqMusk/FaqMusk/FaqMusk';


const Hotel = () => {
    const [sliderNumber, setSliderNumber] = useState(0);
    const [open, setOpen] = useState(false);
    
     

    const photos =[
        {
            src: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/2000000/1580000/1571900/1571851/5190220c_b.jpg"
        },
        {
            src: "https://images.trvl-media.com/hotels/9000000/8020000/8011500/8011429/0d465754.jpg?impolicy=resizecrop&rw=455&ra=fit"
        },
        {
            src: "https://images.trvl-media.com/hotels/73000000/72940000/72939100/72939089/91d9b2c4.jpg?impolicy=resizecrop&rw=455&ra=fit"
        },
        {
            src: "https://images.trvl-media.com/hotels/1000000/10000/500/476/5fbe63b2.jpg?impolicy=resizecrop&rw=455&ra=fit"
        },
        {
            src: "https://images.trvl-media.com/hotels/1000000/20000/18900/18818/ef83f40a.jpg?impolicy=resizecrop&rw=455&ra=fit"
        },
        {
            src: "https://images.trvl-media.com/hotels/1000000/20000/18900/18818/ef83f40a.jpg?impolicy=resizecrop&rw=455&ra=fit"
        },
        {
            src: "https://images.trvl-media.com/hotels/24000000/23600000/23592800/23592774/d4823f57.jpg?impolicy=resizecrop&rw=455&ra=fit"
        },
        {
            src: "https://images.trvl-media.com/hotels/22000000/21740000/21736500/21736441/d03a232d.jpg?impolicy=resizecrop&rw=455&ra=fit"
        },
        {
            src: "https://images.trvl-media.com/hotels/10000000/9070000/9062900/9062853/1a9beed4.jpg?impolicy=resizecrop&rw=455&ra=fit"
        }
    ]
   const handleOpen =(i) =>{
    setSliderNumber(i);
    setOpen(true);
    }
    
    const handleMove = (direction) =>{
        let newSliderNumber;

        if (direction === "l"){
            newSliderNumber = sliderNumber === 0 ? 5 : sliderNumber-1
        }
        else{
            newSliderNumber = sliderNumber === 5 ?0 : sliderNumber+1
        }
        setSliderNumber(newSliderNumber)

    }

    return (
        <div>
            <Navber />
            <Header type="list"/>
            <div className="hotelContainer">
                 {
                  open && <div className="slider">
                    <AiFillCloseCircle className='close' onClick={() =>setOpen(false)}/>
                    <BsFillArrowLeftCircleFill className='arrow' onClick={() =>handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img src={photos[sliderNumber].src} alt="" className="sliderImg" />
                    </div>
                    <BsFillArrowRightCircleFill className='arrow' onClick={() =>handleMove("r")}/>
                    </div>  
                }
               
                <div className="hoWrapper">
                    <button className='bookNow'>Reserve or Book Now</button>
                    <h1 className="hoTitle">grand Hotel</h1>
                    <div className="hoAddress">
                       <HiLocationMarker></HiLocationMarker>
                        <span> Elton St 125 NewYork</span>
                    </div>
                    <span className="hoDistance">Excellent location - 500m from center</span>
                        <span className="hoPriceHighLight">Book a stay $114 at this property and get a free airport taxi</span>
                        <div className="hoImages">
                             {
                               photos.map((photo,i) =>(
                                <div className="hoImgWrapper">
                                    <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className='hoImg'/>
                                </div>
                               )) 
                            } 
                           
                        </div>
                        <div className="hoDetails">
                            <div className="hoDetailsTexts">
                                <h1 className="hoTitle">Stay in the heart of krakow</h1>
                                <p className="hoDesc">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit commodi itaque ad soluta voluptatum facere voluptas aliquam nulla magni explicabo iure maiores repellat eveniet dolorem quos inventore sapiente quod perspiciatis illum, nam provident vitae! Facilis, a nulla. Itaque consectetur aliquam quia exercitationem laboriosam excepturi, eveniet commodi obcaecati laborum rerum! Facere ipsum voluptatum maiores molestiae sapiente, tempora ut in natus, eveniet fugit doloremque   </p>
                            </div>
                            <div className="hoDetailsPrice">
                                <h1>Perfect for a 9-night stay!</h1>
                                 <span>Located in the real heart of krakow, this property has an excellent location scrore of 9.8!</span>
                               <h2>
                                 <b>$945</b>(9 nights)
                               </h2>
                                 <button>Reserve or Book now!</button>
                            </div>
                        </div>
                    </div>
                    <Guest />
                    {/* <FaqMusk /> */}
                <MailList />
                <Footer />
            </div>
        </div>
    );
};

export default Hotel;