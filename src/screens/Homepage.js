

import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import Footerb from '../components/Footerb';
import Navbar from '../components/Navbar';

// Import the CSS file
import '../CSS/Homepage.css';

export default function Homepage() {
    const [foodCad, setFoodCad] = useState([]);
    const [foodData, setFoodData] = useState([]);
    const [search, setSearch] = useState(""); // Add this line to define the 'search' state

    const loadData = async () => {
        try {
            let response = await fetch('http://localhost:5000/api/foodData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            response = await response.json();
            setFoodData(response[0]);
            setFoodCad(response[1]);
            // console.log(response[0],response[1]);
        } catch (error) {
            console.error('Error loading data:', error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <Navbar />
            <div>
                <Carousel search={search} setSearch={setSearch} />
            </div>
            <br />
            <div className='container'>
                {foodCad.length !== 0
                    ? foodCad.map((data) => (
                        <div key={data._id} className="category-container">
                            <h2>{data.CategoryName}</h2>
                            <hr />
                            <div className="card-row">
                                {foodData.length !== 0
                                    ? foodData
                                    .filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                                        .map((filterItems) => (
                                            <div key={filterItems._id} className="card-column">
                                                <Card
                                                    foodName={filterItems.name}
                                                    options={filterItems.options[0]}
                                                    imgSrc={filterItems.img}
                                                ></Card>
                                            </div>
                                        ))
                                    : <div>No data found</div>}
                            </div>
                        </div>
                    ))
                    : ''}
            </div>
            <br /><br />
            <div>
                <Footerb />
            </div>
        </div>
    );
}
