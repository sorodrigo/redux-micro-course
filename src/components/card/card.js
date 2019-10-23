import React from 'react';
import cx from 'classnames';

import './card.scss';

function Card(props) {
  const {
    linkUrl,
    subtitle,
    title,
    imageUrl,
    actionName,
    className,
    linkProps
  } = props;

  return (
    <div className={cx('c-card', className)}>
      <a
        className="card-link"
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        {...linkProps}
      >
        <div className="card-image" style={{ backgroundImage: `url(${imageUrl})` }}/>
      </a>
      <figcaption className="card-content">
        <div className="card-details-container">
          <h4>
            {subtitle}
          </h4>
          <p className="card-title">{title}</p>
        </div>
        <h2>
          <a
            className="card-action"
            target="_blank"
            rel="noopener noreferrer"
            href={linkUrl}
            {...linkProps}
          >
            {actionName}
          </a>
        </h2>
      </figcaption>
    </div>
  );
}

export default Card;
