import React from 'react';
import Movie from './Movie'
import { Card, Col } from 'react-bootstrap';


class Movies extends React.Component {
    render() {
        console.log(this.props.movies);
        let movies = this.props.movieData.data.map((movieInfo, idx) => 
            <Movie
                movieData = {movieInfo}
                key = {idx}
            />
            );
        return (
            <>
                <Col>
                    <Card style={{ width: '18rem' }} className="cards h-100">
                        {movies}
                    </Card>
                </Col>
            </>
        );
    }
}

export default Movies;