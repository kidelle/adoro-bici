import React, { Component } from 'react';


class HomePage extends Component {


    render() {
        return (
            <div className="App">
                <header>
                    <h1 className="home-adoro">Adoro Bici</h1>
                    
                    <h3 className="sub-head">Madeline Island Bicycle & Moped Rentals</h3>
                </header>
                <div>
                    <img src="/images/colored_bikes.jpg" alt="bikes" height="400"></img>
                </div>
            </div>
            

        )
    }

}

export default HomePage;