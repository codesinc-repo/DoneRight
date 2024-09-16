import React from 'react';

function SimpleImgWithText({ title, paragraphs, imageSrc }) {
  return (
    <div className="row m-md-4 mt-3">
      <div className="col-lg-6 my-auto">
        <h4>{title}</h4>
        {Array.isArray(paragraphs) ? (
          paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))
        ) : (
          <p>{paragraphs}</p> // Handle case where paragraphs might be a string
        )}
      </div>
      <div className="col-lg-6">
        <img src={imageSrc} width="100%" alt="Image" />
      </div>
    </div>
  );
}

export default SimpleImgWithText;
