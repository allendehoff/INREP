import React, { useState } from "react"
import Card from "react-bootstrap/Card"
import API from "../../utils/API"
// import { useState } from "react"

function Login() {
    const [user, setUser] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    function handleLoginSubmit(event) {
        event.preventDefault()
        // console.log(user)
        // console.log({
        //     email: user.email,
        //     password: user.password
        // })
        // API.findUser(user)
        API.findUser({
            email: user.email,
            password: user.password
        })
        API.foo("this")
        // console.log("that")
    }

    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Welcome to CASREP</h1>
                <h3>We help you send reports when it matters most</h3>
            </div>
            <Card>
                <Card.Title>
                    Please Log In to Begin
                </Card.Title>
                <Card.Body>
                    <form>
                        <label>
                            Email:
                            <input
                                type="text"
                                name="email"
                                onChange={handleInputChange} />
                        </label>
                        <label>
                            Password:
                            <input
                                type="password"
                                name="password"
                                onChange={handleInputChange} />
                        </label>
                        <button
                            className="btn-primary"
                            disabled={!(user.email && user.password)}
                            onClick={handleLoginSubmit}>
                            LOG IN
                        </button>
                    </form>
                </Card.Body>
                <Card.Footer>Or <a href="/signup">Sign Up</a></Card.Footer>
            </Card>
        </div>
    )
}

export default Login