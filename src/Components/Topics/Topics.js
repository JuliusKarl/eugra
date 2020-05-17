import React, { Component } from 'react'
import { Card, CardImg, ListGroup } from 'react-bootstrap'
import Tables from '../Tables/Tables'
import Plus from '../../media/UI/plus.png';
import Menu from '../../media/UI/menu.png';
import Modal from '../Modal/ModalPopup';
import './Topics.css'

export default class Topics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalShow: false,
            setModalShow: false
        }
    }

    setModalShow = (a) => {
        this.setState({
            modalShow: a
        })
    }
    render() {
        const topicsList = 
        this.props.topics.map((topic) => (
            <div key={ topic.topic_id }>
                <Card style={{ 'marginBottom' : '5px'}}>
                <Card.Body style={{'textAlign': 'left', padding: '10px 10px 0px 10px'}}>

                    {/* Card content: Title and Description */}
                    <CardImg variant="bottom" width="10%" src={topic.thumbnail.image} alt={topic.topic_title} />
                    <Card.Title style={{color:'black', 'marginTop': '5px'}}>{topic.topic_title}</Card.Title>
                    <Card.Text style={{color:'grey', fontSize: 20}}>
                        { topic.thumbnail.desc }
                    </Card.Text>

                    {/* Current available tables for the topic */}
                        <ListGroup variant="flush">
                        <Tables tables={ topic.tables }></Tables>
                        </ListGroup>

                    {/* These are the card options: Details, Create Table */}
                    <Card.Text style={{color:'grey', fontSize: 20, 'float': 'right', 'cursor': 'pointer'}} >
                        <button onClick={() => this.setModalShow(true)}>
                        <img 
                            src={ Menu }
                            alt="...">
                        </img>
                        </button>
                    </Card.Text>
                    <Card.Text style={{color:'grey', fontSize: 20, 'float': 'right', 'cursor': 'pointer'}}>
                        <button onClick={() => this.setModalShow(true)}>
                        <img 
                            src={ Plus }
                            alt="New Table">
                        </img>
                        </button>
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>
            ));
        return (
            <div className="Topic-Container">
                <Modal show={ this.state.modalShow } onHide={() => this.setModalShow(false)} />
                <div className="Topic-Content">
                    { topicsList.length ? topicsList : 'Loading...'}
                    <br></br><br></br> {/* For some reason spacing is weird, fix it so these <br> aren't needed */}
                </div>
            </div>
        )
    }
}

