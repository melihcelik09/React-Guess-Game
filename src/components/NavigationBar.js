import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';

class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand href="guessGame">Guess Game</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Navbar>
            </div>
        )
    }
}
export default NavigationBar;