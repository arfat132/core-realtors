import React from 'react';
import { BiBuildingHouse } from "@react-icons/all-files/bi/BiBuildingHouse";
import { GiFamilyHouse } from "@react-icons/all-files/gi/GiFamilyHouse";
import { BsFillHouseFill } from "@react-icons/all-files/bs/BsFillHouseFill";
import { GiSpookyHouse } from "@react-icons/all-files/gi/GiSpookyHouse";
import { GiGreenhouse } from "@react-icons/all-files/gi/GiGreenhouse";
import { GiLighthouse } from "@react-icons/all-files/gi/GiLighthouse";
const IconGroup = () => {
    return (
        <div className='mt-72 text-center font-bold -mb-10 flex px-36 justify-between text-blue-900' >
            <div className=''>
                <BsFillHouseFill className='text-9xl mb-2'> </BsFillHouseFill>
                <h3>Single House</h3>
            </div>
            <div className=''>
                <BiBuildingHouse className='text-9xl mb-2'> </BiBuildingHouse>
                <h3>Single House</h3>
            </div>
            <div className=''>
                <GiFamilyHouse className='text-9xl mb-2' >  </GiFamilyHouse>
                <h3>Family House</h3>
            </div>
            <div className=''>
                <GiLighthouse className='text-9xl mb-2'></GiLighthouse>
                <h3>Light House</h3>
            </div>
            <div className=''>
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