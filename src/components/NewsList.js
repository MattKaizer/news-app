import React from 'react';
import News from './News';
import PropTypes from 'prop-types'

const NewsList = ({newsList}) =>  { 

    return (
        <div className="row">
            {newsList.map(item => (
            <News 
                key={item.url}
                item={item}
            />
    ))}
        </div>
    );
};

NewsList.propTypes = {
    newsList: PropTypes.array.isRequired
}
 
export default NewsList;