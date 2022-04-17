import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <section id='#services' className="text-gray-600 body-font">
            <div className="container px-5 pb-24 mx-auto">
                <h1 className='text-center text-blue-900 uppercase text-3xl font-bold my-8'>My Services <div className='w-24 h-1 bg-blue-900 rounded-lg mx-auto mt-2'></div></h1>
                <div className="flex flex-wrap -m-4">
                   
                    {
                        services.map(service =>
                            <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                  }
                   
                </div>
            </div>
        </section>
    );
};

export default Services;