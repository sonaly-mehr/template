import React from 'react';
import TemplateForm from './ui/TemplateForm';

const GetTemplate = () => {
    return (
        <div className='w-full px-4 lg:px-0 mt-12 md:mt-20 mb-12 md:mb-20 lg:mt-0 lg:mb-0 lg:h-screen flex justify-between items-center'>
            <div className='md:w-[70%] lg:w-1/2 mx-auto'>
            <div className='text-center'>
                <h4 className="font-bonaNova text-4xl text-[#201006]">Get free customisable template</h4>
                <p className='sm:w-w-4/5 md:w-w-3/5 xl:w-2/5 mt-3.5 mb-14 mx-auto text'>We believe in the power of beautifully designed stationery to transform your special occasions into unforgettable memories. </p>
            </div>
            <TemplateForm/>
            </div>
        </div>
    );
};

export default GetTemplate;