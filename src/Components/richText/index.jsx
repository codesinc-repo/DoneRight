import React from 'react';
import { Link } from "react-router-dom"; 

function RichText() {
  return (
    <div
      className="swan-pt-6 swan-pt-2-sm swan-pl-7-md swan-col-12 swan-col-sm-6 swan-col-md-6 p-4 swan-col-lg-4 swan-col-xl-4 swan-col-lg-offset-2 swan-col-xl-offset-2"
      style={{ backgroundColor: '#f0f0f0'}} // Light grey background color
    >
      <div className="swan-mb-5">
        <h3 className="swan-heading swan-text-2 swan-font-weight-bold">Easy Design</h3>
        <div className="swan-text-2">
          <p>
            Our online tools make the process as simple and clear as possible, and we’re working to improve your experience all the time.
          </p>
        </div>
      </div>
      <div className="swan-mb-5">
        <h3 className="swan-heading swan-text-2 swan-font-weight-bold">Make It Match</h3>
        <div className="swan-text-2">
          <p>
            Our designs can be used across multiple printed products, which makes it easier for you to create consistent, professional marketing.
          </p>
        </div>
      </div>
      <div className="swan-mb-0">
        <h3 className="swan-heading swan-text-2 swan-font-weight-bold">Absolutely Guaranteed</h3>
        <div className="swan-text-2">
          <p>
            We stand by everything we sell. So if you’re not satisfied, we’ll make it right.{' '}
            <Link to="javascript:void(0)" data-section="Content:SEO Zone" data-position="4" data-translation="Learn more" className="swan-link">
              Learn more
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RichText;
