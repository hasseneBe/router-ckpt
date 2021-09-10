import  {Button, Modal } from 'react-bootstrap';
import React, {useState} from 'react'
import MovieList from './MovieList';
import { useParams } from 'react-router';
function Description(props) {
  const params=useParams()
  const movie= props.list.find(el=>el.id===params.id)
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
<Modal show={show} {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
      
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"> Film Overview </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <h4>Bande d'annonce</h4>
      {movie && <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
      <h4>Description</h4>
      {movie && movie.Description}
      </Modal.Body>

      <Modal.Footer> <Button onClick={()=>props.history.goBack()}>Go Back</Button> </Modal.Footer>
    </Modal>
  );
}

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);
//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>
//       <Description show={modalShow} onHide={() => setModalShow(false)} />
//     </>
//     );
//   }
export default Description
