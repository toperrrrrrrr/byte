import React, { useState } from 'react'
import Axios from "axios";
import Alerts from '../Alerts/Alerts';

export default function Register() {
    const [isNote, setNote] = useState("")

    const [isUsername, setUsername] = useState("");
    const [isUname, setUname] = useState("");
    const [isPassword, setPassword] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [isPlaceholderPW, setPlaceholderPW] = useState("*******************");
    const [isEye, setEye] = useState("password");


    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleConfirmAction = () => {
        handleClosePopup();
    };



    const handleSubmit = async () => {
        try {
            await Axios.post("http://localhost:1127/api/newNote", {
                note: isNote,
            });
            console.log("Successfully inserted");
        } catch (error) {
            console.error(error);
        }
    };

    const togglePasswordVisibility = () => {
        if (isEye === "password") {
            setEye("text");
            setPlaceholderPW("Type your password");
        } else {
            setEye("password");
            setPlaceholderPW("******");
        }
    };

    return (
        <div className='mainBody'>

            <div className="bg">
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <form className="wrap-login p-5">
                        <span className="signin-title "> Sign Up </span>
                        <div className="wrap-input w-100">
                            <span>Name</span>
                            <input
                                className="inputs"
                                type="text"
                                placeholder="Enter your name"
                                required
                                onChange={(e) => setUname(e.target.value)}
                            />
                            <span className="icons" data-symbol="&#xf206;"></span>
                        </div>
                        <div className="wrap-input w-100">
                            <span>Username</span>
                            <input
                                className="inputs"
                                type="text"
                                placeholder="Enter your username"
                                required
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <span className="icons" data-symbol="&#xf206;"></span>
                        </div>
                        <div className="wrap-input" data-validate="Password is required">
                            <span>Password</span>
                            <input
                                className="inputs"
                                type={isEye}
                                placeholder={isPlaceholderPW}
                                value={isPassword}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span
                                className="icons"
                                data-symbol="&#xf15c;"
                                onClick={togglePasswordVisibility}
                            ></span>

                        </div>




                        <div className="btn-wrap">
                            <button className="btn-login">Register</button>
                        </div>


                        <div className="text-center pt-115">
                            <span className="mutedText">Already have an account?</span>
                            <a className="hyperlink" href='/'>
                                Sign In
                            </a>
                        </div>
                    </form>
                </div>
                <Alerts
                    isOpen={showPopup}
                    title="Wrong Credentials"
                    message="Please Double check"
                    onClose={handleClosePopup}
                    isHidden="true"
                    onConfirm={handleConfirmAction}
                />
            </div>
        </div>
    )
}
