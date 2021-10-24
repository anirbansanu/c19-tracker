import React, { Component } from 'react'
import { Container,Row,Col,Badge } from 'react-bootstrap';
import './Tracker.css';
import TrackerCard from './TrackerCard';
import TrackerModal from '../components/TrackerModal';

export default class Tracker extends Component {
    constructor(props){
        super(props);
        this.state={
            showModal: false,
            data: [],
            meta: []
        }
        this.getCovidData = this.getCovidData.bind(this);
        this.handleShowModal = this.handleShowModal.bind(this);
    }
    async getCovidData(){
        try{
            const res = await fetch("https://data.covid19india.org/v4/min/data.min.json");
            const actualData = await res.json();
            console.log(actualData.WB.total);
            console.log(actualData.WB.meta);
            this.setState({data:actualData.WB.total,
                            meta: actualData.WB.meta});
            console.log(this.state.data);
        }
        catch(err){
            console.log(err);
        }
        
    }
    componentDidMount(){
        // this.getCovidData();
    }
    handleShowModal (){ 
        this.setState({showModal:true});
    }
    render() {
        return (
            <Container fluid className="mb-4">
                <Row >
                    <Col className="p-2" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <h2 className="p-2 text-light">
                                Covid-19 Tracker &nbsp;
                                <font style={{fontSize: "1.8rem"}}>
                                    <Badge className="glow" pill bg="danger">
                                        Live
                                    </Badge>
                                </font>
                        </h2> 
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-3" sm={6} md={6} lg={4} onClick={() => this.setState({showModal:true})}>
                        <TrackerCard bg="#fa8231" smTitle="OUR" lgTitle='COUNTRY' mainFontSize='2.8rem' main='WEST BENGAL'/>
                    </Col>
                    <Col className="mt-3" sm={6} md={6} lg={4}>
                        <TrackerCard bg="#20bf6b" smTitle="TOTAL" lgTitle='TESTED' mainFontSize='3rem' main={this.state.data.tested}/>
                    </Col>
                    <Col className="mt-3" sm={6} md={6} lg={4}>
                        <TrackerCard bg="#f7b731" smTitle="TOTAL" lgTitle='CONFIRMED' mainFontSize='3rem' main={this.state.data.confirmed}/>
                    </Col>
                
                    <Col className="mt-3" sm={6} md={6} lg={4}>
                        <TrackerCard bg="#2d98da" smTitle="TOTAL" lgTitle='DEATHS' mainFontSize='3rem' main={this.state.data.deceased}/>
                    </Col>
                    <Col className="mt-3" sm={6} md={6} lg={4}>
                        <TrackerCard bg="#a55eea" smTitle="TOTAL" lgTitle='RECOVERED' mainFontSize='3rem' main={this.state.data.recovered}/>
                    </Col>
                    <Col className="mt-3" sm={6} md={6} lg={4}>
                        <TrackerCard bg="#eb3b5a" smTitle="LAST" lgTitle='UPDATED' mainFontSize='2.4rem' main={this.state.meta.date}/>
                    </Col>
                    <Col className="mt-3" sm={6} md={6} lg={4}>
                        <TrackerCard bg="#5f27cd" smTitle="FIRST" lgTitle='VACCIN' mainFontSize='3rem' main={this.state.data.vaccinated1}/>
                    </Col>
                    <Col className="mt-3" sm={6} md={6} lg={4}>
                        <TrackerCard bg="#2d98da" smTitle="LAST" lgTitle='VACCINATED' mainFontSize='3rem' main={this.state.data.vaccinated2}/>
                    </Col>
                    <Col className="mt-3" sm={6} md={6} lg={4} onClick={() => this.setState({showModal:true})}>
                        <TrackerCard bg="#fa8231" smTitle="OUR" lgTitle='COUNTRY' mainFontSize='2.8rem' main='WEST BENGAL'/>
                    </Col>
                </Row>
                <TrackerModal title="Choose States" show={this.state.showModal} onHide={() => this.setState({showModal:false})}/>
            </Container>
        )
    }
}
