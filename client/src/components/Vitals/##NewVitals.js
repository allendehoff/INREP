import React from "react"
import Card from "react-bootstrap/Card"

function NewVitals(props) {
    return(
        <Card.Link
        className="btn btn-primary"
        onClick={props.onClick}>
            New Vitals
        </Card.Link>
    )
}

export default NewVitals