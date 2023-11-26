import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Footerb from '../components/Footerb';
import Carousel from '../components/Carousel';

export default function Homepage() {
    return (
        <div>
            <Navbar />
            <div>
                <Carousel></Carousel>
            </div>
            <br></br>
            <div className='m-3 d-flex'>
                <Card className="mb-4"></Card>
                <Card className="mb-4"></Card>
                <Card className="mb-4"></Card>
                <Card className="mb-4"></Card>
            </div>
            <br></br><br></br>
            <div>
                <Footerb></Footerb>
            </div>
        </div>
    );
}
