import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Carousel1 extends React.Component {
    render(){
        
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Second slide&bg=282c34&"
                            alt="-"
                            height="500px"
                        />
                        <Carousel.Caption className="text-dark font-weight-bold my-auto">
                            <h3>Telemetri Indonesia terbaru</h3>
                            <p>Temukan data cuaca, gempa bumi, dan Tsunami terbaru di sini.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Second slide&bg=282c34"
                            alt="-"
                            height="500px"
                        />
                        <Carousel.Caption className="text-dark font-weight-bold my-auto">
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Carousel1;
