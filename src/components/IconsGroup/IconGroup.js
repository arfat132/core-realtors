import React from 'react';
import { BiBuildingHouse } from "@react-icons/all-files/bi/BiBuildingHouse";
import { GiFamilyHouse } from "@react-icons/all-files/gi/GiFamilyHouse";
import { BsFillHouseFill } from "@react-icons/all-files/bs/BsFillHouseFill";
import { GiSpookyHouse } from "@react-icons/all-files/gi/GiSpookyHouse";
import { GiGreenhouse } from "@react-icons/all-files/gi/GiGreenhouse";
import { GiLighthouse } from "@react-icons/all-files/gi/GiLighthouse";
const IconGroup = () => {
    return (
        <div className='text-center font-bold px-36 justify-between text-blue-900 flex flex-wrap' >
            <div className='sm:mb-8 lg:mb-0'>
                <BsFillHouseFill className='text-9xl mb-2'> </BsFillHouseFill>
                <h3>Single House</h3>
            </div>
            <div className='sm:pb-8 lg:pb-0'>
                <BiBuildingHouse className='text-9xl mb-2'> </BiBuildingHouse>
                <h3>Single House</h3>
            </div>
            <div className='sm:mb-8 lg:mb-0'>
                <GiFamilyHouse className='text-9xl mb-2' >  </GiFamilyHouse>
                <h3>Family House</h3>
            </div>
            <div className='sm:mb-8 lg:mb-0'>
                <GiLighthouse className='text-9xl mb-2'></GiLighthouse>
                <h3>Light House</h3>
            </div>
            <div className='sm:mb-8 lg:mb-0'>
                <GiSpookyHouse className='text-9xl mb-2'></GiSpookyHouse>
                <h3>Spooky House</h3>
            </div>
            <div className=''>
                <GiGreenhouse className='text-9xl mb-2'></GiGreenhouse>
                <h3>Green House</h3>
            </div>

        </div>
    );
};

export default IconGroup;