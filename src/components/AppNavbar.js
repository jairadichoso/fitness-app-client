import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useContext } from 'react';
import UserContext from '../UserContext';

import { Link, NavLink } from 'react-router-dom';



export default function AppNavbar() {

	const { user } = useContext(UserContext);

    return (
        <Navbar expand="lg" style={{ backgroundColor: '#ff69b4' }}>
            <Container fluid>
                <Navbar.Brand as={Link} to="/" style={{ color: 'white' }}>
                    <i className="bi bi-heart"></i> Fitness App
                </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: 'white' }}>
                    <span className="navbar-toggler-icon" style={{ 
                        backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='white' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")"
                    }}></span>
                </Navbar.Toggle>                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            !user.id ?
                                <>
                                    <Nav.Link as={NavLink} to="/" exact="true" style={{ color: 'white' }}>Home</Nav.Link>
                                    <Nav.Link as={Link} to="/login" style={{ color: 'white' }}>Login</Nav.Link>
                                    <Nav.Link as={Link} to="/register" style={{ color: 'white' }}>Register</Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link as={NavLink} to="/" exact="true" style={{ color: 'white' }}>Home</Nav.Link>
                                    <Nav.Link as={Link} to="/addWorkout" style={{ color: 'white' }}>Add Workout</Nav.Link>
                                    <Nav.Link as={Link} to="/workouts" style={{ color: 'white' }}>Workouts</Nav.Link>
                                    <Nav.Link as={Link} to="/logout" style={{ color: 'white' }}>Logout</Nav.Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}