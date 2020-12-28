import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Nav class="navbar navbar-expand-lg navbar-dark my-0" style={{ backgroundColor: "teal" }}>
                    <a class="navbar-brand" href="/">Data</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <Link to="/">
                                <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                                </li>
                            </Link>
                            <Link to="/cuaca">
                            <li class="nav-item">
                                <a class="nav-link" href="/cuaca">Data Cuaca</a>
                            </li>
                            </Link>
                            <Link to="/gempa">
                            <li class="nav-item">
                                <a class="nav-link" href="/gempa">Gempa Bumi</a>
                            </li>
                            </Link>
                            <Link to="/tsunami">
                            <li class="nav-item">
                                <a class="nav-link" href="/tsunami">Tsunami</a>
                            </li>
                            </Link>
                        </ul>
                    </div>
                </Nav>
            </div>
        )
    }
}

export default NavBar;