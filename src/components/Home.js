import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from './Carousel.js';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron class="py-4">
                    <Carousel />
                </Jumbotron>
            </div>
        )
    }
}

export default Home;