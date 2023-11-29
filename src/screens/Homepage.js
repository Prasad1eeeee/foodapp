import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Footerb from '../components/Footerb';
import Carousel from '../components/Carousel';
import Card1 from '../components/Card1';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';

export default function Homepage() {
    return (
        <div>
            <Navbar />
            <div>
                <Carousel></Carousel>
            </div>
            <br></br>
            <div className='m-4 d-flex justify-content-center'>
                <Card className="mb-5"></Card>
                <div className="mx-2"></div> {/* Add a div with margin for space */}
                <Card1 className="mb-5"></Card1>
                <div className="mx-2"></div> {/* Add a div with margin for space */}
                <Card2 className="mb-5"></Card2>
                <div className="mx-2"></div> {/* Add a div with margin for space */}
                <Card3 className="mb-5"></Card3>
            </div>
            <br></br><br></br>
            <div>
                <Footerb></Footerb>
            </div>
        </div>
    );
}
