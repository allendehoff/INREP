import React from "react"

import { Card, Button } from "react-bootstrap"

function CriticalWarnings(props) {
    // const [warnings, setWarnings] = useState({})
    // const { id } = useParams()

    // useEffect(() => {
    //     fetchTrueWarnings(warnings)
    //     // loadById(id)
    // },[])
    
    // function loadById(id) {
    //     // console.log(id)
    //     API.findById(id)
    //         .then((ptData) => {
    //             // console.log(ptData.data.criticalWarn)
    //             const warningObject = JSON.parse(ptData.data.criticalWarn)
    //             // console.log(warningObject)
    //             setWarnings(warningObject)
    //         })
    //         // .then(console.log(warnings))
    //         .then(fetchTrueWarnings(warnings))
    // }

    // let warningKeys = []
    // async function fetchTrueWarnings(obj) {
    //     await loadById(id)
    //     for (const property in obj) {
    //         if (obj[property] === true){
    //             warningKeys.push(property)
    //         }
    //     }
    //     console.log(warningKeys)
    //     return
    // }
    // fetchTrueWarnings(warnings)


    return (
        <Card>
            <Card.Header>Critical Warnings 
                </Card.Header>
            <Card.Body>
                <Button
                onClick={props.onClick}
                className="btn btn-danger">Update</Button >
            </Card.Body>
        </Card>
    )
}

export default CriticalWarnings