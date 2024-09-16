import React from 'react';
import PropTypes from 'prop-types';

const ImgWithTextDetailSec = ({ heading, paragraphs, imageSrc, listItems }) => {
  return (
    <div id="Overview" role="tabpanel" className="swan-tab-selected tab-content1" aria-labelledby="auto-id-ddcllbqag-6">
      <div id="overview">
        <div tabIndex="0" className="overview-body container swan-grid-container">
          <div className="swan-row">
            <div className="swan-col-6 swan-col-xs-12">
              <h2 className="swan-heading swan-text-x3large swan-mb-0 swan-font-weight-bold">
                {heading}
              </h2>
              <div>
                <ul className='fs-5 mt-2 container'>
                  {Array.isArray(listItems) ? (
                    listItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  ) : (
                    <li>No items available</li>
                  )}
                </ul>
                {Array.isArray(paragraphs) ? (
                  paragraphs.map((para, index) => (
                    <p key={index}>
                      <strong>{para.title}</strong><br />
                      {para.text}
                    </p>
                  ))
                ) : (
                  <p>No paragraphs available</p>
                )}
              </div>
            </div>
            <div className="swan-col-6 swan-col-xs-12">
              <div className="swan-progressive-image-wrapper">
                <img src={imageSrc} className="swan-fluid-image" alt="Spot Graphics" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ImgWithTextDetailSec.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  imageSrc: PropTypes.string.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ImgWithTextDetailSec.defaultProps = {
  listItems: [],
  paragraphs: [],
};

export default ImgWithTextDetailSec;
