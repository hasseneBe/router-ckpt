import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component'

const Head = ({handelfilter, handelrate}) => {
    return (
        <>
    <InputGroup className="mb-3"> 
    <InputGroup.Text>Filter by name</InputGroup.Text> 
    <FormControl  onChange={(e)=>handelfilter(e.target.value)} /> 
    </InputGroup>
    <StarRatingComponent onStarClick={(nextValue, prevValue, name)=>handelrate(nextValue)}/>
</>
    )

}

export default Head
