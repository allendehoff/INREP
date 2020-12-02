import React from "react"
import Card from "react-bootstrap/Card"

function Login() {
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
                            <input type="text" name="email"/>
                        </label>
                        <label>
                            Password:
                            <input type="password" name="password"/>
                        </label>
                    </form>
                </Card.Body>
                <Card.Footer>Or <a href="/signup">Sign Up</a></Card.Footer>
            </Card>
        </div>
    )
}

export default Login