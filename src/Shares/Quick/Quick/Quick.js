import React from 'react';
import './Quick.css';
import { GiSelfLove } from 'react-icons/gi';
import { IoMdBicycle } from 'react-icons/io';
import { TbBeach } from 'react-icons/tb';
import { FaCity } from 'react-icons/fa';
import { GiRockingChair } from 'react-icons/gi';
const Quick = () => {
    return (
        <div className='quick'>
            <h2 className='homeTitle'>Quick and easy trip planner</h2>
            <p className='text-xl pt-2 pb-10'>Pick a vibe and explore the top destinations in Kalapara</p>
                 <div className='quickItem'>
                   
                    <div className='quickItemIcon active'><GiSelfLove />Romance</div>
                    <div  className='quickItemIcon '><IoMdBicycle />Outdoors</div>
                    <div className='quickItemIcon '><TbBeach />Beach</div>
                    <div className='quickItemIcon '><FaCity />City</div>
                    <div className='quickItemIcon '><GiRockingChair />Relax</div>
                  
                 </div>

                 <div className="w-full relative flex gap-4 py-6 overflow-x-auto">
	                <img className="h-48 w-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://images.trvl-media.com/hotels/23000000/22180000/22175800/22175707/945cebd1_y.jpg?impolicy=fcrop&w=420&h=224&q=medium" alt="Image1" />
	<img className="h-48 w-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://images.trvl-media.com/hotels/84000000/83940000/83937500/83937473/4e37299e_y.jpg?impolicy=fcrop&w=420&h=224&q=medium" alt="Image2" />
	<img className="h-48 w-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://images.trvl-media.com/hotels/40000000/39070000/39061100/39061040/f390ca0a_y.jpg?impolicy=fcrop&w=420&h=224&q=medium" alt="Image3" />
	<img className="h-48 w-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://images.trvl-media.com/hotels/75000000/74630000/74624700/74624627/9548c0c6_y.jpg?impolicy=fcrop&w=420&h=224&q=medium" alt="Image4" />
	<img className="h-48 w-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://images.trvl-media.com/hotels/47000000/46070000/46061400/46061332/950b96a2_y.jpg?impolicy=fcrop&w=420&h=224&q=medium" alt="Image5" />
	<img className="h-48 w-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://images.trvl-media.com/hotels/38000000/37800000/37796200/37796128/2666b701_y.jpg?impolicy=fcrop&w=420&h=224&q=medium" alt="Image6" />
	<img className="h-48 w-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://images.trvl-media.com/hotels/40000000/39160000/39152700/39152630/66381d5a_y.jpg?impolicy=fcrop&w=420&h=224&q=medium" alt="Image7" />
	<img className="h-48 w-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://images.trvl-media.com/hotels/34000000/33350000/33349800/33349788/fa2ae055_y.jpg?impolicy=fcrop&w=420&h=224&q=medium" alt="Image8" />
	
</div>
        </div>
    );
};

export default Quick;