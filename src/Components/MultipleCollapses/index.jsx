import React, { useEffect } from "react";
import Overview from "./Components/Overview";
import "./multiple.css";
import FAQTab from "./Components/MultiFAQ";
import MultiFAQ from "./Components/MultiFAQ";
import Options from "./Components/Options";
import STemplates from "./Components/STemplates";

const MultipleCollapses = () => {
  useEffect(() => {
    const tabs = document.querySelectorAll('[role="tab"]');
    const tabPanels = document.querySelectorAll('[role="tabpanel"]');

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        // Remove 'active' class from all tabs
        tabs.forEach((t) => t.classList.remove("active"));

        // Hide all tab panels by removing 'active' class and adding 'disabled' class
        tabPanels.forEach((panel) => {
          panel.classList.remove("active");
          panel.classList.add("disabled");
        });

        // Add 'active' class to the clicked tab
        tab.classList.add("active");

        // Show the associated tab panel by adding 'active' class and removing 'disabled' class
        const targetPanel = document.getElementById(
          tab.getAttribute("aria-controls")
        );
        if (targetPanel) {
          targetPanel.classList.add("active");
          targetPanel.classList.remove("disabled");
        }
      });
    });

    // Activate the "Overview" content by default
    document.getElementById("auto-id-ddcllbqag-27").classList.add("active");
    document
      .getElementById("auto-id-ddcllbqag-27")
      .classList.remove("disabled");
  }, []);
  return (
    <>
      <div className="swan-bounded-content">
        <div
          id="product-page-tabs"
          className="swan-vanilla-ignore swan-tabs swan-tabs-full swan-mt-8"
        >
          <div role="tablist" className="swan-tabs-headers">
            <input
              type="radio"
              role="tab"
              defaultChecked=""
              id="auto-id-ddcllbqag-6"
              name="auto-id-ddcllbqag-16"
              aria-controls="auto-id-ddcllbqag-27"
            />
            <label id="auto-id-ddcllbqag-7" htmlFor="auto-id-ddcllbqag-6">
              Overview
            </label>
            <input
              type="radio"
              role="tab"
              id="auto-id-ddcllbqag-8"
              name="auto-id-ddcllbqag-16"
              aria-controls="auto-id-ddcllbqag-28"
            />
            <label id="auto-id-ddcllbqag-9" htmlFor="auto-id-ddcllbqag-8">
              FAQ
            </label>
            <input
              type="radio"
              role="tab"
              id="auto-id-ddcllbqag-10"
              name="auto-id-ddcllbqag-16"
              aria-controls="auto-id-ddcllbqag-29"
            />
            <label id="auto-id-ddcllbqag-11" htmlFor="auto-id-ddcllbqag-10">
              Options
            </label>
            <input
              type="radio"
              role="tab"
              id="auto-id-ddcllbqag-12"
              name="auto-id-ddcllbqag-16"
              aria-controls="auto-id-ddcllbqag-30"
            />
            <label id="auto-id-ddcllbqag-13" htmlFor="auto-id-ddcllbqag-12">
              Specs Templates
            </label>
          </div>

          <div class="swan-tabs-contents">
            <div
              role="tabpanel"
              aria-labelledby="auto-id-ddcllbqag-6"
              id="auto-id-ddcllbqag-27"
            >
              <Overview />
            </div>

            <div
              role="tabpanel"
              aria-labelledby="auto-id-ddcllbqag-8"
              id="auto-id-ddcllbqag-28"
            >
              <MultiFAQ/>
            </div>

            <div
              role="tabpanel"
              aria-labelledby="auto-id-ddcllbqag-10"
              id="auto-id-ddcllbqag-29"
            >
              {/* 3rd */}
              <Options/>
            </div>
            <div
              role="tabpanel"
              aria-labelledby="auto-id-ddcllbqag-12"
              id="auto-id-ddcllbqag-30"
            >
              {/* 4th */}
              <STemplates/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultipleCollapses;
