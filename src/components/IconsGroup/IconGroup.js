import React from 'react';
import { BiBuildingHouse } from "@react-icons/all-files/bi/BiBuildingHouse";
import { GiFamilyHouse } from "@react-icons/all-files/gi/GiFamilyHouse";
import { BsFillHouseFill } from "@react-icons/all-files/bs/BsFillHouseFill";
import { GiGreenhouse } from "@react-icons/all-files/gi/GiGreenhouse";
import { GiLighthouse } from "@react-icons/all-files/gi/GiLighthouse";
const IconGroup = () => {
    return (
        <div className='text-center font-bold px-36 justify-between text-blue-900 flex flex-wrap' >
            <div className='mb-4 bg-blue-100 py-8 px-12 rounded-tr-3xl rounded-bl-3xl'>
                <BsFillHouseFill className='text-9xl mb-2'> </BsFillHouseFill>
                <h3>Single House</h3>
            </div>
            <div className='mb-4 bg-blue-100 py-8 px-12 rounded-tr-3xl rounded-bl-3xl'>
                <BiBuildingHouse className='text-9xl mb-2 '> </BiBuildingHouse>
                <h3>Single House</h3>
            </div>
            <div className='mb-4 bg-blue-100 py-8 px-12 rounded-tr-3xl rounded-bl-3xl'>
                <GiFamilyHouse className='text-9xl mb-2' >  </GiFamilyHouse>
                <h3>Family House</h3>
            </div>
            <div className='mb-4 bg-blue-100 py-8 px-12 rounded-tr-3xl rounded-bl-3xl'>
                <GiLighthouse className='text-9xl mb-2'></GiLighthouse>
                <h3>Light House</h3>
            </div>
            
            <div className='bg-blue-100 py-8 px-12 mb-4 rounded-tr-3xl rounded-bl-3xl   q'>
                <GiGreenhouse className='text-9xl mb-2 '></GiGreenhouse>
                <h3>Green House</h3>
            </div>

        </div>
    );
};

export default IconGroup;