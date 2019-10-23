import React from 'react';
import PropTypes from 'prop-types';

import './user-card.scss';

function QuoteCard(props) {
  const { imageUrl, name, title } = props;

  return (
    <div className="c-quote-card">
      <div className="quote-card-container">
        <div className="author-footer">
          <figcaption className="author-details">
            <span>{name}</span>
            <span>{title}</span>
          </figcaption>
          <figure className="author-avatar" style={{ backgroundImage: `url(${imageUrl})` }} />
        </div>
      </div>
    </div>
  );
}

QuoteCard.propTypes = {
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default QuoteCard;
