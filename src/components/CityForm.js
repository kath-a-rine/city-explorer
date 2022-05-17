import React from 'react';

class CityForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.handleCitySubmit}>
                <fieldset>
                    <label htmlFor="cityName"><strong>City Name: </strong></label>
                    <br></br>
                    <input type="text" id="cityName" onChange={this.props.cityChange} />
                    <button type="submit">Explore!</button>
                </fieldset>
            </form>

        );
    }
}

export default CityForm;