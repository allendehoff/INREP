import React from "react"
import Card from "react-bootstrap/Card"
import "./style.css"


// const styles = {
//     jumbotron: {
//         backgroundColor: "#007EA7",
//         textAlign: "center",
//         // marginTop: "1rem"
//     },
//     card: {
//         backgroundColor: "#007EA7",
//         textAlign: "center"
//     },
//     cardBody: {
//         display: "flex",
//         justifyContent: "space-around"
//     }
// }

function Home() {
    return (
        <div className="container" >
            <div className="jumbotron" >
                <h1 style={{ color: "#FFD400" }}>Welcome to CASREP</h1>
                <h3>A tool to help EMS providers reliably send reports to Hospitals without worrying about radio signal or cell service</h3>
            </div>
            <Card >
                <Card.Header><h2>To begin, select what type of user you are:</h2></Card.Header>
                <Card.Body >
                    {/* <button className="btn"> */}
                    <a
                        className="btn btn-dark"
                        href="/ems"
                    ><h4>EMS Provider</h4></a>
                    {/* </button> */}
                    <a
                        className="btn btn-dark"
                        href="/hospital"
                    ><h4>Hospital</h4></a>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Home