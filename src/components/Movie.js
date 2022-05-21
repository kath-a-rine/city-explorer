import React from 'react';
import { Card } from 'react-bootstrap';

class Movies extends React.Component {
  render() {
    return (
      <>

        <Card.Img
          variant="top"
          src={this.props.movieData.poster_path}
          alt={this.props.movieData.title}
          title={this.props.movieData.title}
        />
        <Card.Body>
          <Card.Title>
            {this.props.movieData.title}
          </Card.Title>
          <Card.Text>
            {this.props.movieData.overview}
          </Card.Text>
        </Card.Body>

      </>
    );
  }
}

export default Movies;