import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Food.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Food = ({ food }) => {
    const { idMeal, strMealThumb, strMeal, strInstructions, strArea } = food;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='food-area'>
            <div>
                <img src={strMealThumb} alt="" />
                <h3>{strMeal}</h3>
                <p>{strInstructions ? strInstructions.slice(0, 200) + '...' : 'It is product for MealDb'}</p>
                <h4>Area: {strArea}</h4>
            </div>
            <Link to={`/food/${idMeal}`}>
                <button>Details</button>
            </Link>
            <div>
                <Button variant="primary" onClick={handleShow}>
                    modal
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img className='w-25' src={strMealThumb} alt="" />
                        <p>{strInstructions ? strInstructions.slice(0, 200) + '...' : 'It is product for MealDb'}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Food;