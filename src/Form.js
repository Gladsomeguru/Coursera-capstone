import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: '',
        occasion: ''
    });

    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const audio = new Audio(process.env.PUBLIC_URL + "/success.mp3");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setSuccess(true);
        setFormData({
            date: '',
            time: '',
            guests: '',
            occasion: ''
        });
        setTimeout(() => {
            audio.play();
        },200);
        setTimeout(() => {
            navigate('/');
            setSuccess(false);
        }, 2000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const [availableTimes, setAvailableTimes] = useState([
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00"
    ]);

    return (
        <div className="container h-100">
            <div className="row align-items-center justify-content-center h-100">
                <div className="col-md-6 d-md-block d-none">
                    <img src="icons_assets/restaurant.jpg" className="card-image-top img-fluid w-100 py-4" alt="Little lemon" />
                </div>
                <div className="col-md-4">
                    <form onSubmit={handleSubmit} className={success ? "d-none" : ""}>
                        <div className="form-group mb-2">
                            <label htmlFor="date" className="fw-medium">Date <span style={{ color: "red" }}>*</span> </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="form-control"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group mb-2">
                            <label htmlFor="time" className="fw-medium">Time <span style={{ color: "red" }}>*</span> </label>
                            <select
                                id="time"
                                name="time"
                                className="form-control"
                                value={formData.time}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a time</option>
                                {availableTimes.map((time) => (
                                    <option key={time} value={time}>{time}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group mb-2">
                            <label htmlFor="guests" className="fw-medium">Number of Guests <span style={{ color: "red" }}>*</span> </label>
                            <input
                                type="number"
                                id="guests"
                                name="guests"
                                className="form-control"
                                min="1"
                                max="8"
                                value={formData.guests}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="occasion" className="fw-medium">Occasion</label>
                            <select
                                id="occasion"
                                name="occasion"
                                className="form-control"
                                value={formData.occasion}
                                onChange={handleChange}
                            >
                                <option value="">Select an occasion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                            </select>
                        </div>

                        <button type="submit" className="all-none rounded-4 yellow-btn p-2 text-center fw-medium w-100">
                            {success ? (
                                <span>Table Reserved <i className="bi bi-check2-circle" /></span>
                            ) : (
                                "Reserve Table"
                            )}
                        </button>
                    </form>
                    <div className={!success ? "d-none" : ""}>
                        {/* <img src="icons_assets/restaurant chef B.jpg" alt="little lemon" className="card-image-top img-fluid w-100 pb-3" /> */}
                        <button type="button" className="all-none yellow-btn rounded-4 p-2 text-center fw-medium w-100">
                            {success ? (
                                <span className='fs-5'>Table Reserved <i className="bi bi-check2-circle" /></span>
                            ) : (
                                "Reserve Table"
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;