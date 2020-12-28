import React from 'react';

class Footer extends React.Component {
    render() {
        const mystyle = {
            backgroundColor: '#008080',
            color: 'white'
        };
        return (
            <div class="page-footer elegant-color text-center fixed-bottom" style={mystyle}>
                <p>Data BMKG</p>
            </div>
        );
    }
}
export default Footer;