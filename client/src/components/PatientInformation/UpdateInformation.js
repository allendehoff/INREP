import React from "react"
import Card from "react-bootstrap/Card"

function UpdateInformation(props) {
    return(
        <Card.Link
        className="btn btn-primary"
        onClick={props.onClick}>
            Update
        </Card.Link>
    )
}

export default UpdateInformation