import {React} from 'react'
import { Row,Col,Modal } from 'react-bootstrap';
import StatesCard from './StatesCard';


const TrackerModal = (props) => {
    return (
        <Modal
            {...props}
            title=""
            centered
            keyboard={false}
            fullscreen={true} >

            
            <Modal.Body >
            <button type="button" title="close" onClick={props.onHide} className="modal-btn-close border-0" style={{float:'right', outline:"0px"}} aria-label="Close">
            &#x2716;
            </button>
                <h4>{props.title}</h4>
                <Row className='mt-4'>
                    <Col sm={6} md={4} lg={3} className='mt-2 mb-2'>
                        <StatesCard smTitle="Our" lgTitle="States"/>
                    </Col>
                    <Col sm={6} md={4} lg={3} className='mt-2 mb-2'>
                        <StatesCard  smTitle="Our" lgTitle="States"/>
                    </Col>
                    <Col sm={6} md={4} lg={3} className='mt-2 mb-2'>
                        <StatesCard smTitle="Our" lgTitle="States"/>
                    </Col>
                    <Col sm={6} md={4} lg={3} className='mt-2 mb-2'>
                        <StatesCard smTitle="Our" lgTitle="States"/>
                    </Col>
                    
                </Row>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button variant="light" onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary">Understood</Button>
            </Modal.Footer> */}
      </Modal>
    )
}

export default TrackerModal
