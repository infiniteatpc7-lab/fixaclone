"use client";

import React from "react";

const CONTENT = {
  bgImage: "/framerusercontent.com/images/sj6JNlwzLQYdJHUI6xdUTxyawd88f.webp",
  headline: "For days when your brain feels too loud.",
  waitlistButton: "Join the waitlist",
  subheadlineLine1: "Choose your next step,",
  subheadlineLine2: "whenever you’re ready",
  tagsRow1: [
    { name: "Task Breakdown", containerClass: "framer-h3130i-container" },
    { name: "Brain Dump", containerClass: "framer-1k0nkuc-container" },
    { name: "Priorities", containerClass: "framer-z6h9yo-container" },
  ],
  tagsRow2: [
    { name: "Small Wins", containerClass: "framer-19afuc7-container" },
    { name: "Focus Timer", containerClass: "framer-1qnkag5-container" },
  ],
};

export default function BrainNoise() {
  return (
    <div
      className="framer-1k4s7q5"
      id="srol123"
      style={{ willChange: "transform", opacity: 1, transform: "none" }}
    >
      {/* Background Graphic */}
      <div className="ssr-variant">
        <div
          className="framer-1d147bf"
          data-framer-name="Howididit panning_shot_of_a_blurry_female_silhouette_soft_motio_022c60be-f74d-44db-a2bd-01ff5add360c"
          style={{ willChange: "transform", opacity: 1, transform: "none" }}
        >
          <div
            style={{
              position: "absolute",
              borderRadius: "inherit",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
            data-framer-background-image-wrapper="true"
          >
            <img
              decoding="async"
              loading="lazy"
              width={2912}
              height={1632}
              src={CONTENT.bgImage}
              alt=""
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
                objectPosition: "center",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      <div className="framer-fch50w" data-framer-name="stacks-wrapper">
        <div className="framer-130t1rb" id="textanimactivation">
          <div className="framer-1wpzjq8">
            {/* Desktop Headline */}
            <div className="ssr-variant hidden-3zjf3v">
              <div
                className="framer-6q0jtx"
                data-framer-name="For days when your brain feels too loud."
                data-framer-component-type="RichTextContainer"
                style={{ willChange: "transform", opacity: 1, transform: "none" }}
              >
                <p
                  dir="auto"
                  style={{
                    ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                    ["--framer-font-family" as any]: '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                    ["--framer-font-size" as any]: "66px",
                    ["--framer-font-weight" as any]: 500,
                    ["--framer-line-height" as any]: "100%",
                    ["--framer-text-alignment" as any]: "right",
                  }}
                  className="framer-text"
                >
                  <span
                    data-text-fill="true"
                    style={{
                      backgroundImage: "linear-gradient(203deg, rgb(255, 255, 255) 33%, rgba(255, 255, 255, 0.4) 84%)",
                    }}
                    className="framer-text"
                  >
                    {CONTENT.headline}
                  </span>
                </p>
              </div>
            </div>

            {/* Mobile Headline */}
            <div className="ssr-variant hidden-1h09hoc hidden-1q3w9a9 hidden-72rtr7">
              <div
                className="framer-6q0jtx"
                data-framer-name="For days when your brain feels too loud."
                data-framer-component-type="RichTextContainer"
                style={{ willChange: "transform", opacity: 1, transform: "none" }}
              >
                <p
                  dir="auto"
                  style={{
                    ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                    ["--framer-font-family" as any]: '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                    ["--framer-font-size" as any]: "50px",
                    ["--framer-font-weight" as any]: 500,
                    ["--framer-line-height" as any]: "100%",
                    ["--framer-text-alignment" as any]: "right",
                  }}
                  className="framer-text"
                >
                  <span
                    data-text-fill="true"
                    style={{
                      backgroundImage: "linear-gradient(203deg, rgb(255, 255, 255) 33%, rgba(255, 255, 255, 0.4) 84%)",
                    }}
                    className="framer-text"
                  >
                    {CONTENT.headline}
                  </span>
                </p>
              </div>
            </div>

            {/* Waitlist Button */}
            <div className="ssr-variant">
              <div className="framer-1kzmgo-container" id="1kzmgo">
                <div
                  className="framer-scgSm framer-1qzvwm8 framer-v-1qzvwm8"
                  data-framer-name="Buttton"
                  data-highlight="true"
                  tabIndex={0}
                  style={{
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    const modal = document.getElementById("overlay");
                    if (modal) modal.style.display = "block";
                  }}
                >
                  <div
                    className="framer-14axl34"
                    style={{
                      ["--corner-shape-fallback" as any]: 0.752,
                      backgroundColor: "rgb(255, 255, 255)",
                      cornerShape: "superellipse(1.5)",
                      borderBottomLeftRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                      borderBottomRightRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                      borderTopLeftRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                      borderTopRightRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                      transform: "none",
                    }}
                  >
                    <div
                      className="framer-1dmnwae"
                      data-framer-name="Join the waitlist"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        ["--framer-paragraph-spacing" as any]: "0px",
                        transform: "none",
                      }}
                    >
                      <p
                        dir="auto"
                        className="framer-text"
                        style={{
                          ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                          ["--framer-font-family" as any]: '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                          ["--framer-font-weight" as any]: 500,
                          ["--framer-letter-spacing" as any]: "-0.02em",
                          ["--framer-line-height" as any]: "95%",
                        }}
                      >
                        {CONTENT.waitlistButton}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subheadline and tags */}
          <div className="framer-1wbd2ma">
            <div className="framer-1wuj5ab">
              <div className="framer-fmmb66">
                <div className="ssr-variant hidden-3zjf3v">
                  <div
                    className="framer-rxvynt"
                    data-framer-name="Choose your next step,"
                    data-framer-component-type="RichTextContainer"
                    style={{ willChange: "transform", opacity: 1, transform: "none" }}
                  >
                    <p
                      dir="auto"
                      style={{
                        ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                        ["--framer-font-family" as any]: '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                        ["--framer-font-size" as any]: "32px",
                        ["--framer-font-weight" as any]: 500,
                        ["--framer-line-height" as any]: "110%",
                        ["--framer-text-color" as any]: "rgb(255, 255, 255)",
                      }}
                      className="framer-text"
                    >
                      {CONTENT.subheadlineLine1}
                    </p>
                  </div>
                </div>
                <div className="ssr-variant hidden-1h09hoc hidden-1q3w9a9 hidden-72rtr7">
                  <div
                    className="framer-rxvynt"
                    data-framer-name="Choose your next step,"
                    data-framer-component-type="RichTextContainer"
                    style={{ willChange: "transform", opacity: 1, transform: "none" }}
                  >
                    <p
                      dir="auto"
                      style={{
                        ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                        ["--framer-font-family" as any]: '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                        ["--framer-font-size" as any]: "32px",
                        ["--framer-font-weight" as any]: 500,
                        ["--framer-line-height" as any]: "105%",
                        ["--framer-text-color" as any]: "rgb(255, 255, 255)",
                      }}
                      className="framer-text"
                    >
                      {CONTENT.subheadlineLine1}
                    </p>
                  </div>
                </div>
              </div>

              <div className="ssr-variant hidden-3zjf3v">
                <div
                  className="framer-1up6yi3"
                  data-framer-name="whenever you’re ready"
                  data-framer-component-type="RichTextContainer"
                  style={{ willChange: "transform", opacity: 1, transform: "none" }}
                >
                  <p
                    dir="auto"
                    style={{
                      ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                      ["--framer-font-family" as any]: '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                      ["--framer-font-size" as any]: "32px",
                      ["--framer-font-weight" as any]: 500,
                      ["--framer-line-height" as any]: "110%",
                      ["--framer-text-color" as any]: "rgb(255, 255, 255)",
                    }}
                    className="framer-text"
                  >
                    {CONTENT.subheadlineLine2}
                  </p>
                </div>
              </div>
              <div className="ssr-variant hidden-1h09hoc hidden-1q3w9a9 hidden-72rtr7">
                <div
                  className="framer-1up6yi3"
                  data-framer-name="whenever you’re ready"
                  data-framer-component-type="RichTextContainer"
                  style={{ willChange: "transform", opacity: 1, transform: "none" }}
                >
                  <p
                    dir="auto"
                    style={{
                      ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                      ["--framer-font-family" as any]: '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                      ["--framer-font-size" as any]: "32px",
                      ["--framer-font-weight" as any]: 500,
                      ["--framer-line-height" as any]: "105%",
                      ["--framer-text-color" as any]: "rgb(255, 255, 255)",
                    }}
                    className="framer-text"
                  >
                    {CONTENT.subheadlineLine2}
                  </p>
                </div>
              </div>
            </div>

            {/* 5 Tag Pills */}
            <div className="framer-1ud4u45">
              <div className="framer-1ksv3qe">
                {CONTENT.tagsRow1.map((tag) => (
                  <div key={tag.name} className="ssr-variant">
                    <div
                      className={tag.containerClass}
                      style={{ willChange: "transform", opacity: 1, transform: "none" }}
                    >
                      <div
                        className="framer-6bpSX framer-s3j90v framer-v-s3j90v"
                        data-framer-name="Variant 1"
                        style={{
                          ["--corner-shape-fallback" as any]: 0.752,
                          backgroundColor: "rgba(0, 0, 0, 0.2)",
                          cornerShape: "superellipse(1.5)",
                          height: "100%",
                          borderBottomLeftRadius: "calc(8px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                          borderBottomRightRadius: "calc(8px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                          borderTopLeftRadius: "calc(8px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                          borderTopRightRadius: "calc(8px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                        }}
                      >
                        <div
                          className="framer-kk53yh"
                          data-framer-name="ADHD-Friendly"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            ["--extracted-r6o4lv" as any]: "var(--variable-reference-qwRAGBFWz-ft3_3MoxW)",
                            ["--framer-paragraph-spacing" as any]: "0px",
                            ["--variable-reference-qwRAGBFWz-ft3_3MoxW" as any]: "rgb(255, 255, 255)",
                            transform: "none",
                          }}
                        >
                          <p
                            dir="auto"
                            className="framer-text"
                            style={{
                              ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                              ["--framer-font-family" as any]: '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                              ["--framer-font-size" as any]: "14px",
                              ["--framer-font-weight" as any]: 500,
                              ["--framer-line-height" as any]: "95%",
                              ["--framer-text-color" as any]: "var(--extracted-r6o4lv, var(--variable-reference-qwRAGBFWz-ft3_3MoxW))",
                            }}
                          >
                            {tag.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="framer-j1kiuc">
                {CONTENT.tagsRow2.map((tag) => (
                  <div key={tag.name} className="ssr-variant">
                    <div
                      className={tag.containerClass}
                      style={{ willChange: "transform", opacity: 1, transform: "none" }}
                    >
                      <div
                        className="framer-6bpSX framer-s3j90v framer-v-s3j90v"
                        data-framer-name="Variant 1"
                        style={{
                          ["--corner-shape-fallback" as any]: 0.752,
                          backgroundColor: "rgba(0, 0, 0, 0.2)",
                          cornerShape: "superellipse(1.5)",
                          height: "100%",
                          borderBottomLeftRadius: "calc(8px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                          borderBottomRightRadius: "calc(8px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                          borderTopLeftRadius: "calc(8px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                          borderTopRightRadius: "calc(8px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                        }}
                      >
                        <div
                          className="framer-kk53yh"
                          data-framer-name="ADHD-Friendly"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            ["--extracted-r6o4lv" as any]: "var(--variable-reference-qwRAGBFWz-ft3_3MoxW)",
                            ["--framer-paragraph-spacing" as any]: "0px",
                            ["--variable-reference-qwRAGBFWz-ft3_3MoxW" as any]: "rgb(255, 255, 255)",
                            transform: "none",
                          }}
                        >
                          <p
                            dir="auto"
                            className="framer-text"
                            style={{
                              ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                              ["--framer-font-family" as any]: '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                              ["--framer-font-size" as any]: "14px",
                              ["--framer-font-weight" as any]: 500,
                              ["--framer-line-height" as any]: "95%",
                              ["--framer-text-color" as any]: "var(--extracted-r6o4lv, var(--variable-reference-qwRAGBFWz-ft3_3MoxW))",
                            }}
                          >
                            {tag.name}
                          </p>
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

      <div className="framer-1jtg1-container">
        <div />
      </div>
    </div>
  );
}
