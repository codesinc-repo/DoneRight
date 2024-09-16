import React, { useState } from 'react';
import { Link } from "react-router-dom"; 

const MultiFAQ = () => {
  // State to track the currently opened FAQ item
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to handle the FAQ click
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQs data
  const faqs = [
    {
      question: "Are all the cards on this page standard cards, with standard pricing?",
      answer: (
        <>
          <p>You can access all of our standard cards with standard pricing on this page. Standard options are the following:</p>
          <ul>
            <li><strong>Paper thickness:</strong> Standard (14pt)</li>
            <li><strong>Paper stocks:</strong> Glossy, Matte or Uncoated</li>
            <li><strong>Finish:</strong> None</li>
            <li><strong>Shape:</strong> Standard – 3.5" x 2"</li>
            <li><strong>Corners:</strong> Standard</li>
          </ul>
          <p>That being said, you can also find some of our premium upgrades on this page. As you create your card, you’ll have the opportunity to upgrade your paper, shape or corner selection – or add a special finish. Our “preview” feature gives you an idea of how your design will look with the different options, and you can also see the pricing of those upgrades while you design.</p>
        </>
      )
    },
    {
      question: "I’m not sure how to make business cards online. How do I get started?",
      answer: (
        <p>Don’t worry – we make it easy. First, choose your thickness, stock, corners and quantity. If you click “Browse designs,” you’ll be taken to a gallery of designs. If you already have a custom business card design you want to use, click on “Upload design.” And if you have any questions, don’t hesitate to contact us.</p>
      )
    },
    {
      question: "What size are standard business cards? And how thick are they?",
      answer: (
        <>
          <p>Standard business cards are 3.5"x 2" and come in different thicknesses, measured in points. Each point (pt) is equal to .001 of an inch, to give you a frame of reference.</p>
          <p>For complete information about card dimensions, check out our <Link to="javascript:void(0)">business card size guide</Link>.</p>
        </>
      )
    },
    {
      question: "Is there an extra fee for printing on the back of the cards?",
      answer: (
        <p>There is an extra fee. We offer both grayscale and color options for backside business card printing.</p>
      )
    },
    {
      question: "Do you have design templates I can plug my information into?",
      answer: (
        <p>You bet. We have industry-specific designs for beauty salon business cards, real estate business cards, business services cards, handyman business cards, political business cards and many more.</p>
      )
    },
    {
      question: "What are rounded corners?",
      answer: (
        <p>With this option, your cards have quarter-inch rounded edges, creating a modern, memorable look.</p>
      )
    },
    {
      question: "Do you offer different business card shapes?",
      answer: (
        <p>For sure. Besides <Link to="javascript:void(0)">rounded corners</Link>, we also offer <Link to="javascript:void(0)">square business cards</Link>.</p>
      )
    },
  ];
  

  return (
    <div className="faq-container">
      <div className="swan-grid-container swan-py-9">
        <div className="faq-row swan-row">
          <div className="swan-col-12">
            <h2 className="swan-heading swan-text-x3large swan-text-align-left swan-pb-7 swan-font-weight-bold">
              Frequently asked questions
            </h2>
            <div className="swan-vanilla-ignore swan-accordion">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-question swan-vanilla-ignore swan-collapsible">
                  <div className="swan-collapsible-summary">
                    <button
                      aria-expanded={activeIndex === index}
                      className="swan-collapsible-summary-button"
                      aria-controls={`faq-content-${index}`}
                      onClick={() => toggleFAQ(index)}
                    >
                      {faq.question}
                    </button>
                  </div>
                  <div
                    className={`swan-collapsible-content ${activeIndex === index ? 'open' : ''}`}
                    id={`faq-content-${index}`}
                    style={{ display: activeIndex === index ? 'block' : 'none' }}
                  >
                    <div tabIndex={0}>
                      <div className="swan-markup swan-pb-5">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiFAQ;
