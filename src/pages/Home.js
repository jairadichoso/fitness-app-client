import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {

	return (
		<>
        <Row>
            <Col className="p-4 text-center">
                <h1>Welcome to Fitness App Manager</h1>
                <p>Create, Update, Delete, and View Your Workouts</p>
                <Link className="btn btn-primary" to={'/workouts'}>View Workout</Link>
            </Col>
        </Row>
		</>
	)
}