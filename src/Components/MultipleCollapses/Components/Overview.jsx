import React from "react";
import img01 from "../../../images/Car warp_2.jpg"

const Overview = () => {
  return (
    <>
      <div id="overview">
        <div tabIndex={0} className="overview-body swan-grid-container">
          <div className="swan-row">
            <div className="swan-col-6 swan-col-sm-12">
              <h2 className="swan-heading swan-text-x3large swan-mb-0 swan-font-weight-bold">
                Elevate your brand with eye-catching side and rear window tints.
              </h2>
              <div>
                <ul className="fs-5">
                  <li>Premium quality tints</li>
                  <li>Enhanced privacy and UV protection</li>
                  <li>Variety of shades and finishes available</li>
                  <li>Sleek, modern look</li>
                </ul>
                <p>
                  <strong>
                    Transform your vehicle or building's appearance
                  </strong>
                  <br />
                  {/* */}Our premium side and rear window tints offer an
                  excellent way to upgrade both vehicles and buildings. With a
                  range of shades and finishes, you can enhance privacy, protect
                  your interiors from harmful UV rays, and achieve a
                  sophisticated, modern look. These tints not only boost
                  aesthetics but also contribute to overall comfort by
                  minimizing heat and glare.
                </p>
                <p>
                  <strong>Customized for your needs</strong>
                  <br />
                  {/* */}Choose from various shades and finishes to suit your
                  style and needs. Whether you want to add a sleek touch to your
                  vehicle or improve the comfort and appearance of your
                  building, our tints provide the perfect solution. They come
                  with options for different levels of privacy and UV
                  protection, ensuring your investment delivers both
                  functionality and style.
                </p>
                <p>
                  <strong>Simple and effective installation</strong>
                  <br />
                  {/* */}Getting started is easy—select your preferred tint, and
                  our professional team will handle the rest. We offer a
                  streamlined installation process to ensure your tints are
                  applied smoothly and effectively, giving you a flawless
                  finish. If you have any questions or need assistance, our
                  support team is available to help you every step of the way.
                </p>
              </div>
            </div>
            <div className="swan-col-6 swan-col-sm-12">
              <div className="swan-progressive-image-wrapper">
                <img
                  src={img01}
                  className="swan-fluid-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;