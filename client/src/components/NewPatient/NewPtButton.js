import React from "react"

function NewPtButton(props) {
function renderPt() {
    props.onClick({status:"pending"})
}

    return (
        <button
                className="btn btn-success"
                onClick={renderPt}
            >
                <h4>Start New Patient Report</h4>
            </button>
    )
}

export default NewPtButton