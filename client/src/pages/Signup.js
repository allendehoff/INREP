import React, { useState } from "react"
import Card from "react-bootstrap/Card"
import API from "../utils/API";

function Signup() {
    const [formObject, setFormObject] = useState({})
    const [userType, setUserType] = useState({})
    // const typeOfUser = userType.map(type => type)
    // let selectedType

    function handleUserTypeChange(e) {
        const { name, value } = e.target;
        setUserType({...userType, [name]: value })
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.name && formObject.email && formObject.password) {
            // console.log(userType)
            // console.log(formObject)
            API.createUser({
                name: formObject.name,
                email: formObject.email,
                password: formObject.password,
                userType: userType.userType
                // userType: $("#userType").val
            })
                // .then(res => loadBooks())
                .catch(err => console.log(err));
        }
    };

    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Welcome to CASREP</h1>
                <h3>Please enter you information below to get started</h3>
            </div>
            <Card>
                <Card.Title>
                    New User
                </Card.Title>
                <Card.Body>
                    <form>
                        <label>
                            Name:
                            <input
                                onChange={handleInputChange}
                                type="text"
                                name="name" />
                        </label>
                        <label>
                            Email:
                            <input
                                onChange={handleInputChange}
                                type="text"
                                name="email" />
                        </label>
                        <label>
                            Password:
                            <input
                                onChange={handleInputChange}
                                type="password"
                                name="password" />
                        </label>
                        <label>What kind of user are you?
                        <select
                                onChange={e => handleUserTypeChange(e)}
                                placeholder="Please select an option"
                                name="userType"
                            // id="userType"
                            >
                                {/* {
                                    typeOfUser.map(type => <option  value={type}>{type}</option>)
                                } */}
                                <option value=""></option>
                                <option value="EMS Provider">EMS Provider</option>
                                <option value="Hospital">Hospital</option>
                            </select>
                        </label>
                        <button
                            className="btn-primary"
                            disabled={!(formObject.name && formObject.email && formObject.password)}
                            onClick={handleFormSubmit}
                        >
                            Submit
                        </button>
                    </form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Signup