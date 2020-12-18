import React from "react"
import Card from "react-bootstrap/Card"

function EtaUpdateBtn(props) {
    return(
        <Card.Link
        className="btn btn-primary"
        onClick={props.onClick}>
            Update
        </Card.Link>
    )
}

export default EtaUpdateBtn