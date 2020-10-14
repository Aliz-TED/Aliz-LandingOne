import React, { useState, useEffect } from 'react'
import { insertContact, getGeoInfo, checkEmail } from '../services/axios.js'
import PopClient from './PopClient'

export default function Client() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [errors, setErrors] = useState([])
    const [check, setCheck] = useState([])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            getGeoInfo(setCity, position.coords.latitude, position.coords.longitude)
        });
    }, [city])

    const data = {
        "firstname": firstname,
        "lastname": lastname,
        "email": email,
        "city": city
    }

    const handleValidation = () => {
        let errorss = [];
        let formIsValid = true;
        
        if (typeof firstname !== "undefined" && !firstname.match(/^[A-Za-z]+[ \-']?[[A-Za-z]+[ \-']?]*[A-Za-z]+$/)) {
            formIsValid = false;
            errorss.firstname = "De A à Z, 50 caractères max.";
        }
        if (typeof lastname !== "undefined" && !lastname.match(/^[A-Za-z]+[ \-']?[[A-Za-z]+[ \-']?]*[A-Za-z]+$/)) {
            formIsValid = false;
            errorss.lastname = "De A à Z, 50 caractères max.";
        }
        if (typeof email !== "undefined" && !email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,10}$/)) {
            formIsValid = false;
            errorss.email = "Veuillez saisir un e-mail correcte";
        }
        check.forEach(element => {
            if (element.email === email) {
                formIsValid = false;
                errorss.email = "Cet email existe déjà";
            }
        });

        setErrors(errorss)
        return formIsValid;
    }

    const contactSubmit = (e) => {
        e.preventDefault();
        if (handleValidation()) {
            insertContact({ data })
        }
    }

    useEffect(() => {
        checkEmail(setCheck)
    }, [email])


    return (
        <div className="contact-view container">
            <form onSubmit={contactSubmit} className="offset-xl-3 col-xl-6" id="contact" >

                <h2>VOS COORDONNÉES</h2>
                <p>Renseignez vos informations afin que nous puissions vous aider à déléguer vos tâches chronophages</p>

                <div className="all-input">
                    <div className="containerInput">
                        <input type="text"
                            name="firstname"
                            placeholder="Prénom"
                            id="firstname"
                            className="border-1"
                            required
                            minLength="3"
                            maxLength="50"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                        <span className="focusBorder-1"></span>
                    </div>
                    {errors.firstname && <span className="text-danger">{errors.firstname}</span>}

                    <div className="containerInput">
                        <input type="text"
                            name="lastname"
                            placeholder="Nom"
                            id="lastname"
                            className="border-2"
                            required
                            minLength="3"
                            maxLength="50"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                        <span className="focusBorder-2"></span>
                    </div>
                    {errors.lastname && <span className="text-danger">{errors.lastname}</span>}

                    <div className="containerInput">
                        <input type="email"
                            name="email"
                            placeholder="E-mail"
                            id="lastname"
                            className="border-3"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span className="focusBorder-3"></span>
                    </div>
                    {errors.email && <span className="text-danger">{errors.email}</span>}

                    <PopClient errors={errors} />
                </div>
            </form>
        </div>
    )
}