import React from 'react';
import { Card, Col } from 'react-bootstrap';

class Movies extends React.Component {
    render() {
        return (
            <>
                <Col>
                    <Card style={{ width: '18rem' }} className="cards h-100">
                        <Card.Img
                            variant="top"
                            src={this.props.movieData.data[0].poster_path}
                            alt={this.props.movieData.data[0].title}
                            title={this.props.movieData.data[0].title}
                        />
                        <Card.Body>
                            <Card.Title>
                                {this.props.movieData.data[0].title}
                            </Card.Title>
                            <Card.Text>
                                {this.props.movieData.data[0].overview}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className="cards h-100">
                        <Card.Img
                            variant="top"
                            src={this.props.movieData.data[1].poster_path}
                            alt={this.props.movieData.data[1].title}
                            title={this.props.movieData.data[1].title}
                        />
                        <Card.Body>
                            <Card.Title>
                                {this.props.movieData.data[1].title}
                            </Card.Title>
                            <Card.Text>
                                {this.props.movieData.data[1].overview}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className="cards h-100">
                        <Card.Img
                            variant="top"
                            src={this.props.movieData.data[2].poster_path}
                            alt={this.props.movieData.data[2].title}
                            title={this.props.movieData.data[2].title}
                        />
                        <Card.Body>
                            <Card.Title>
                                {this.props.movieData.data[2].title}
                            </Card.Title>
                            <Card.Text>
                                {this.props.movieData.data[2].overview}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        );
    }
}

export default Movies;