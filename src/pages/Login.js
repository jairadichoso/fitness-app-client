import { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate, Navigate } from 'react-router-dom';
import UserContext from '../UserContext';

export default function Login() {

    const { user, setUser } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isActive, setIsActive] = useState(true);

    const navigate = useNavigate();

    function authenticate(e) {

        // Prevents page redirection via form submission
        e.preventDefault();
        fetch('https://fitness-app-q2bc.onrender.com/users/login', {

            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                email: email,
                password: password

            })
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);

                localStorage.setItem('token', data.access);
                retrieveUserDetails(data.access);

                Swal.fire({
                    title: "Login Successful",
                    icon: "success",
                    text: "Welcome to Fitness App Manager!"
                });
                navigate('/');


            })

        setEmail('');
        setPassword('');

    }

    const retrieveUserDetails = (token) => {

        fetch('https://fitness-app-q2bc.onrender.com/users/details', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {

                setUser({
                    id: data.user._id
                });

            })

    };

    useEffect(() => {

        if (email !== "" && password !== "") {

            setIsActive(true)

        } else {

            setIsActive(false)

        }

    }, [email, password]);

    return (
        !user.id ? (
          <Form onSubmit={(e) => authenticate(e)} className="my-5">
            <h1 className="text-center">Login</h1>
            <Form.Group controlId="userEmail" className="mb-3">
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
      
            <Form.Group controlId="password">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
      
            {
              isActive ?
                <Button variant="primary" type="submit" id="submitBtn" className="mt-3">
                  Submit
                </Button> :
                <Button variant="primary" type="submit" id="submitBtn" disabled className="mt-3">
                  Submit
                </Button>
            }
          </Form>
        ) : (
          <Navigate to={'/'} />
        )
      );
      
}