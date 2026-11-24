"use client";

import React from "react";

const CONTENT = {
  headingLine1: "Plan your day",
  headingLine2Before: " without ",
  headingLine2Italic: "overwhelm",
  subheading: "Fixa is a simple, ADHD-friendly planner that turns your thoughts into a clear plan",
  featureCardDesktop: "No clutter. No complicated setup. Just your day, clearly planned.",
  featureCardMobileLine1: "No clutter. No complicated setup.",
  featureCardMobileLine2: "Just your day, clearly planned.",
  waitlistButton: "Join the waitlist",
  videoEmbed: "https://kinescope.io/embed/wXQXtViozUbKjC61PdWpw2",
};

export default function Hero() {
  return (
    <div className="framer-ffo1pl" data-framer-name="hero-section" id="hero">
      {/* Background Video Embed */}
      <div className="framer-1th9av7-container">
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#000" }}>
          <iframe
            src={CONTENT.videoEmbed}
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
            frameBorder="0"
            allowFullScreen
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "180.0000vh",
              height: "80.0000vw",
              minWidth: "100%",
              minHeight: "100%",
              border: "none",
              display: "block",
            }}
          />
        </div>
      </div>

      <div className="framer-r3onhw" data-framer-name="info">
        <div className="framer-75eqcm" data-framer-name="text">
          <div className="framer-149azfs">
            <div className="framer-1hrkge4">
              {/* Desktop heading line 1 */}
              <div className="ssr-variant hidden-3zjf3v">
                <div
                  className="framer-1iw3fd4"
                  data-framer-appear-id="1iw3fd4"
                  data-framer-name="Plan your day without overwhelm"
                  data-framer-component-type="RichTextContainer"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <p
                    dir="auto"
                    style={{
                      ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBSZWd1bGFy",
                      ["--framer-font-family" as any]: '"Switzer Regular", "Switzer Regular Placeholder", sans-serif',
                      ["--framer-font-size" as any]: "96px",
                      ["--framer-letter-spacing" as any]: "-0.03em",
                      ["--framer-line-height" as any]: "95%",
                      ["--framer-text-alignment" as any]: "center",
                      ["--framer-text-color" as any]: "rgb(255, 255, 255)",
                    }}
                    className="framer-text"
                  >
                    {CONTENT.headingLine1}
                  </p>
                </div>
              </div>

              {/* Mobile heading line 1 */}
              <div className="ssr-variant hidden-1h09hoc hidden-1q3w9a9 hidden-72rtr7">
                <div
                  className="framer-1iw3fd4"
                  data-framer-appear-id="1iw3fd4"
                  data-framer-name="Plan your day without overwhelm"
                  data-framer-component-type="RichTextContainer"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <p
                    dir="auto"
                    style={{
                      ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBSZWd1bGFy",
                      ["--framer-font-family" as any]: '"Switzer Regular", "Switzer Regular Placeholder", sans-serif',
                      ["--framer-font-size" as any]: "49px",
                      ["--framer-letter-spacing" as any]: "-0.03em",
                      ["--framer-line-height" as any]: "95%",
                      ["--framer-text-alignment" as any]: "center",
                      ["--framer-text-color" as any]: "rgb(255, 255, 255)",
                    }}
                    className="framer-text"
                  >
                    {CONTENT.headingLine1}
                  </p>
                </div>
              </div>
            </div>

            <div className="framer-i17ksj-container">
              <div />
            </div>

            <div className="framer-1f6bdqf">
              {/* Desktop heading line 2 */}
              <div className="ssr-variant hidden-3zjf3v">
                <div
                  className="framer-1c8qlh2"
                  data-framer-appear-id="1c8qlh2"
                  data-framer-name="Plan your day without overwhelm"
                  data-framer-component-type="RichTextContainer"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <p
                    dir="auto"
                    style={{
                      ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBSZWd1bGFy",
                      ["--framer-font-family" as any]: '"Switzer Regular", "Switzer Regular Placeholder", sans-serif',
                      ["--framer-font-size" as any]: "96px",
                      ["--framer-letter-spacing" as any]: "-0.03em",
                      ["--framer-line-height" as any]: "95%",
                      ["--framer-text-alignment" as any]: "center",
                      ["--framer-text-color" as any]: "rgb(255, 255, 255)",
                    }}
                    className="framer-text"
                  >
                    {CONTENT.headingLine2Before}
                    <span
                      style={{
                        ["--font-selector" as any]: "R0Y7SW5zdHJ1bWVudCBTZXJpZi1pdGFsaWM=",
                        ["--framer-font-family" as any]: '"Instrument Serif", "Instrument Serif Placeholder", serif',
                        ["--framer-font-style" as any]: "italic",
                      }}
                      className="framer-text"
                    >
                      {CONTENT.headingLine2Italic}
                    </span>
                  </p>
                </div>
              </div>

              {/* Mobile heading line 2 */}
              <div className="ssr-variant hidden-1h09hoc hidden-1q3w9a9 hidden-72rtr7">
                <div
                  className="framer-1c8qlh2"
                  data-framer-appear-id="1c8qlh2"
                  data-framer-name="Plan your day without overwhelm"
                  data-framer-component-type="RichTextContainer"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <p
                    dir="auto"
                    style={{
                      ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBSZWd1bGFy",
                      ["--framer-font-family" as any]: '"Switzer Regular", "Switzer Regular Placeholder", sans-serif',
                      ["--framer-font-size" as any]: "49px",
                      ["--framer-letter-spacing" as any]: "-0.03em",
                      ["--framer-line-height" as any]: "95%",
                      ["--framer-text-alignment" as any]: "center",
                      ["--framer-text-color" as any]: "rgb(255, 255, 255)",
                    }}
                    className="framer-text"
                  >
                    {CONTENT.headingLine2Before}
                    <span
                      style={{
                        ["--font-selector" as any]: "R0Y7SW5zdHJ1bWVudCBTZXJpZi1pdGFsaWM=",
                        ["--framer-font-family" as any]: '"Instrument Serif", "Instrument Serif Placeholder", serif',
                        ["--framer-font-style" as any]: "italic",
                      }}
                      className="framer-text"
                    >
                      {CONTENT.headingLine2Italic}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="framer-kq7xtr"
            data-framer-appear-id="kq7xtr"
            data-framer-name="Voca is a simple, ADHD-friendly planner that turns your thoughts into a clear plan"
            data-framer-component-type="RichTextContainer"
            style={{ opacity: 1, transform: "none" }}
          >
            <p
              dir="auto"
              style={{
                ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                ["--framer-font-family" as any]: '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                ["--framer-font-weight" as any]: 500,
                ["--framer-letter-spacing" as any]: "-0.02em",
                ["--framer-text-alignment" as any]: "center",
                ["--framer-text-color" as any]: "rgba(255, 255, 255, 0.8)",
              }}
              className="framer-text"
            >
              {CONTENT.subheading}
            </p>
          </div>
        </div>

        {/* Desktop waitlist badge */}
        <div className="ssr-variant hidden-3zjf3v">
          <div className="framer-m1br5a-container" id="m1br5a">
            <div
              className="framer-tznbq framer-pyi65a framer-v-pyi65a"
              data-framer-appear-id="pyi65a"
              data-framer-name="desktop"
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(0, 0, 0, 0.25)",
                WebkitBackdropFilter: "blur(10px)",
                height: "100%",
                willChange: "transform",
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                opacity: 1,
                transform: "none",
              }}
            >
              <div
                className="framer-brfyl1"
                style={{
                  backdropFilter: "none",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  WebkitBackdropFilter: "none",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                }}
              >
                <div
                  className="framer-1424k3s"
                  data-framer-name="No clutter. No complicated setup. Just your day, clearly planned."
                  data-framer-component-type="RichTextContainer"
                  style={{
                    ["--extracted-r6o4lv" as any]: "rgb(255, 255, 255)",
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
                      ["--framer-text-color" as any]: "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                    }}
                  >
                    {CONTENT.featureCardDesktop}
                  </p>
                </div>
              </div>
              <div className="framer-crxbws-container">
                <div
                  className="framer-scgSm framer-1qzvwm8 framer-v-1qzvwm8"
                  data-framer-name="Buttton"
                  data-highlight="true"
                  tabIndex={0}
                  style={{
                    height: "100%",
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
        </div>

        {/* Mobile waitlist badge */}
        <div className="ssr-variant hidden-1h09hoc hidden-1q3w9a9 hidden-72rtr7">
          <div className="framer-m1br5a-container" id="m1br5a">
            <div
              className="framer-tznbq framer-pyi65a framer-v-o9c1ve"
              data-framer-appear-id="pyi65a"
              data-framer-name="phone"
              style={{
                backdropFilter: "none",
                backgroundColor: "rgba(0, 0, 0, 0)",
                WebkitBackdropFilter: "none",
                height: "100%",
                willChange: "transform",
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                opacity: 1,
                transform: "none",
              }}
            >
              <div
                className="framer-brfyl1"
                style={{
                  backdropFilter: "blur(10px)",
                  backgroundColor: "rgba(0, 0, 0, 0.25)",
                  WebkitBackdropFilter: "blur(10px)",
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 12,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              >
                <div
                  className="framer-1424k3s"
                  data-framer-name="No clutter. No complicated setup. Just your day, clearly planned."
                  data-framer-component-type="RichTextContainer"
                  style={{
                    ["--extracted-r6o4lv" as any]: "rgb(255, 255, 255)",
                    ["--framer-paragraph-spacing" as any]: "0px",
                    ["--extracted-2gxw0f" as any]: "rgb(255, 255, 255)",
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
                      ["--framer-line-height" as any]: "120%",
                      ["--framer-text-alignment" as any]: "center",
                      ["--framer-text-color" as any]: "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                    }}
                  >
                    {CONTENT.featureCardMobileLine1}
                  </p>
                  <p
                    dir="auto"
                    className="framer-text"
                    style={{
                      ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                      ["--framer-font-family" as any]: '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                      ["--framer-font-weight" as any]: 500,
                      ["--framer-letter-spacing" as any]: "-0.02em",
                      ["--framer-line-height" as any]: "120%",
                      ["--framer-text-alignment" as any]: "center",
                      ["--framer-text-color" as any]: "var(--extracted-2gxw0f, rgb(255, 255, 255))",
                    }}
                  >
                    {CONTENT.featureCardMobileLine2}
                  </p>
                </div>
              </div>
              <div className="framer-crxbws-container">
                <div
                  className="framer-scgSm framer-1qzvwm8 framer-v-1qzvwm8"
                  data-framer-name="Buttton"
                  data-highlight="true"
                  tabIndex={0}
                  style={{
                    height: "100%",
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
        </div>

        <div className="framer-1r40ivl" data-framer-name="blur" />
      </div>

      <div className="framer-ajjrrw-container">
        <div />
      </div>
    </div>
  );
}
