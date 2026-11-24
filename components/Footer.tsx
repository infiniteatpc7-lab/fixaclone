"use client";

import React from "react";

const CONTENT = {
  logo: "Fixa.",
  heading: "Get early updates",
  subheading: "Just the essentials from us — never spam, never noise.",
  buttonLabel: "Join the waitlist",
  infoTitle: "Information",
  navLinks: [
    { label: "Home", href: "#hero", framerClass: "framer-10xijt4" },
    { label: "Features", href: "#features", framerClass: "framer-a1pp81" },
    { label: "Fixa AI", href: "#fixaai", framerClass: "framer-1ot8ulb" },
    { label: "FAQ", href: "#faq", framerClass: "framer-93v5k9" },
  ],
  contactTitle: "Contact",
  contactEmail: "info@fixaplan.com",
  socialTitle: "Social",
  socialLinks: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      framerClass: "framer-1gpdq8c",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
      framerClass: "framer-153ahrv",
    },
  ],
  copyright: "© 2026. Fixa. All Rights Reserved.",
  privacyPolicy: "Privacy Policy",
  madeByText: "Website by",
  designerText: "Midu Studio",
  designerUrl: "https://midu.design/",
};

export default function Footer() {
  const handleWaitlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-waitlist"));
  };

  const renderFooterBody = () => (
    <div className="framer-153mhav">
      <div className="framer-h6rv84" data-framer-name="Frame 6308">
        <div
          className="framer-1xjex3m"
          data-framer-name="Fixa."
          data-framer-component-type="RichTextContainer"
          style={{ transform: "none" }}
        >
          <p
            dir="auto"
            style={{
              ["--font-selector" as any]: "R0Y7U3dpdHplci01MDA=",
              ["--framer-font-family" as any]:
                '"Switzer", "Switzer Placeholder", sans-serif',
              ["--framer-font-size" as any]: "24px",
              ["--framer-font-weight" as any]: 500,
              ["--framer-letter-spacing" as any]: "-0.04em",
              ["--framer-line-height" as any]: "84%",
              ["--framer-text-color" as any]: "rgb(255, 255, 255)",
            }}
            className="framer-text"
          >
            {CONTENT.logo}
          </p>
        </div>

        <div className="framer-mzz4ji" data-framer-name="Frame 6301">
          <div
            className="framer-10zuglb"
            data-framer-name="Be the first to know We’ll send you only what matters — no noise, no spam."
            data-framer-component-type="RichTextContainer"
            style={{ transform: "none" }}
          >
            <p
              dir="auto"
              style={{
                ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                ["--framer-font-family" as any]:
                  '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                ["--framer-font-weight" as any]: 500,
                ["--framer-letter-spacing" as any]: "-0.04em",
                ["--framer-line-height" as any]: "130%",
                ["--framer-text-color" as any]: "rgb(255, 255, 255)",
              }}
              className="framer-text"
            >
              {CONTENT.heading}
            </p>
            <p
              dir="auto"
              style={{
                ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                ["--framer-font-family" as any]:
                  '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                ["--framer-font-weight" as any]: 500,
                ["--framer-letter-spacing" as any]: "-0.04em",
                ["--framer-line-height" as any]: "130%",
                ["--framer-text-color" as any]: "rgba(255, 255, 255, 0.6)",
              }}
              className="framer-text"
            >
              {CONTENT.subheading}
            </p>
          </div>

          <div className="framer-19zrj7w-container" id="19zrj7w">
            <div
              className="framer-scgSm framer-1qzvwm8 framer-v-1qzvwm8"
              data-framer-name="Buttton"
              data-highlight="true"
              tabIndex={0}
              onClick={handleWaitlistClick}
              style={{
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                cursor: "pointer",
              }}
            >
              <div
                className="framer-14axl34"
                style={{
                  ["--corner-shape-fallback" as any]: "0.752",
                  backgroundColor: "rgb(255, 255, 255)",
                  ["cornerShape" as any]: "superellipse(1.5)",
                  borderBottomLeftRadius:
                    "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                  borderBottomRightRadius:
                    "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                  borderTopLeftRadius:
                    "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                  borderTopRightRadius:
                    "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
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
                      ["--framer-font-family" as any]:
                        '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                      ["--framer-font-weight" as any]: 500,
                      ["--framer-letter-spacing" as any]: "-0.02em",
                      ["--framer-line-height" as any]: "95%",
                    }}
                  >
                    {CONTENT.buttonLabel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="framer-14rlq0h" data-framer-name="Frame 6312">
        <div className="framer-1ok7ck9">
          {/* Information Links */}
          <div className="framer-l7mw7y" data-framer-name="Information">
            <div
              className="framer-pd8qoy"
              data-framer-name="Information"
              data-framer-component-type="RichTextContainer"
              style={{ transform: "none" }}
            >
              <p
                dir="auto"
                style={{
                  ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBSZWd1bGFy",
                  ["--framer-font-family" as any]:
                    '"Switzer Regular", "Switzer Regular Placeholder", sans-serif',
                  ["--framer-letter-spacing" as any]: "-0.02em",
                  ["--framer-line-height" as any]: "95%",
                  ["--framer-text-color" as any]: "rgba(255, 255, 255, 0.4)",
                }}
                className="framer-text"
              >
                {CONTENT.infoTitle}
              </p>
            </div>
            <div className="framer-tab6v4" data-framer-name="Menu">
              {CONTENT.navLinks.map((link) => (
                <a
                  key={link.label}
                  className={`${link.framerClass} framer-lux5qc`}
                  data-framer-name={link.label}
                  href={link.href}
                >
                  <div
                    className="framer-1msef1j"
                    data-framer-name="Text"
                    data-framer-component-type="RichTextContainer"
                    style={{ transform: "none" }}
                  >
                    <p
                      dir="auto"
                      style={{
                        ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                        ["--framer-font-family" as any]:
                          '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                        ["--framer-font-weight" as any]: 500,
                        ["--framer-letter-spacing" as any]: "-0.02em",
                        ["--framer-line-height" as any]: "95%",
                        ["--framer-text-color" as any]: "rgb(255, 255, 255)",
                      }}
                      className="framer-text"
                    >
                      {link.label}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Email */}
          <div className="framer-2gonbi" data-framer-name="Contact">
            <div
              className="framer-1i8inht"
              data-framer-name="Contact"
              data-framer-component-type="RichTextContainer"
              style={{ transform: "none" }}
            >
              <p
                dir="auto"
                style={{
                  ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBSZWd1bGFy",
                  ["--framer-font-family" as any]:
                    '"Switzer Regular", "Switzer Regular Placeholder", sans-serif',
                  ["--framer-letter-spacing" as any]: "-0.02em",
                  ["--framer-line-height" as any]: "95%",
                  ["--framer-text-color" as any]: "rgba(255, 255, 255, 0.4)",
                }}
                className="framer-text"
              >
                {CONTENT.contactTitle}
              </p>
            </div>
            <div className="framer-qoo7g2" data-framer-name="Email">
              <a
                className="framer-e1wc0r framer-lux5qc"
                href={`mailto:${CONTENT.contactEmail}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="framer-1vqbdkm"
                  data-framer-name="Text"
                  data-framer-component-type="RichTextContainer"
                  style={{ transform: "none" }}
                >
                  <p
                    dir="auto"
                    style={{
                      ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                      ["--framer-font-family" as any]:
                        '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                      ["--framer-font-weight" as any]: 500,
                      ["--framer-letter-spacing" as any]: "-0.02em",
                      ["--framer-line-height" as any]: "95%",
                      ["--framer-text-color" as any]: "rgb(255, 255, 255)",
                    }}
                    className="framer-text"
                  >
                    {CONTENT.contactEmail}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="framer-mn15s2" data-framer-name="Social">
          <div
            className="framer-1j2zbj2"
            data-framer-name="Social"
            data-framer-component-type="RichTextContainer"
            style={{ transform: "none" }}
          >
            <p
              dir="auto"
              style={{
                ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBSZWd1bGFy",
                ["--framer-font-family" as any]:
                  '"Switzer Regular", "Switzer Regular Placeholder", sans-serif',
                ["--framer-letter-spacing" as any]: "-0.02em",
                ["--framer-line-height" as any]: "95%",
                ["--framer-text-color" as any]: "rgba(255, 255, 255, 0.4)",
              }}
              className="framer-text"
            >
              {CONTENT.socialTitle}
            </p>
          </div>
          <div className="framer-vhv3oa" data-framer-name="Social links">
            {CONTENT.socialLinks.map((soc) => (
              <a
                key={soc.label}
                className={`${soc.framerClass} framer-lux5qc`}
                data-framer-name={soc.label}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="framer-1p3hbz"
                  data-framer-name="Text"
                  data-framer-component-type="RichTextContainer"
                  style={{ transform: "none" }}
                >
                  <p
                    dir="auto"
                    style={{
                      ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                      ["--framer-font-family" as any]:
                        '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                      ["--framer-font-weight" as any]: 500,
                      ["--framer-letter-spacing" as any]: "-0.02em",
                      ["--framer-line-height" as any]: "95%",
                      ["--framer-text-color" as any]: "rgb(255, 255, 255)",
                    }}
                    className="framer-text"
                  >
                    {soc.label}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom: Copyright & Attribution */}
      <div className="framer-cpvo7l" data-framer-name="bottom">
        <div
          className="framer-5dcjkr"
          data-framer-name="© 2026. Fixa. All Rights Reserved."
          data-framer-component-type="RichTextContainer"
          style={{ transform: "none" }}
        >
          <p
            dir="auto"
            style={{
              ["--font-selector" as any]: "R0Y7U3dpdHplci01MDA=",
              ["--framer-font-family" as any]:
                '"Switzer", "Switzer Placeholder", sans-serif',
              ["--framer-font-weight" as any]: 500,
              ["--framer-letter-spacing" as any]: "-0.04em",
              ["--framer-line-height" as any]: "84%",
              ["--framer-text-color" as any]: "rgba(255, 255, 255, 0.4)",
            }}
            className="framer-text"
          >
            {CONTENT.copyright}
          </p>
        </div>

        <div className="framer-iwk5g9">
          <div className="framer-18iyi7s" data-framer-name="Privacy policy">
            <div
              className="framer-ulxr77"
              data-framer-name="Text"
              data-framer-component-type="RichTextContainer"
              style={{ transform: "none" }}
            >
              <p
                dir="auto"
                style={{
                  ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                  ["--framer-font-family" as any]:
                    '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                  ["--framer-font-weight" as any]: 500,
                  ["--framer-letter-spacing" as any]: "-0.02em",
                  ["--framer-line-height" as any]: "95%",
                  ["--framer-text-color" as any]: "rgb(255, 255, 255)",
                }}
                className="framer-text"
              >
                {CONTENT.privacyPolicy}
              </p>
            </div>
          </div>

          <div className="framer-1nirv0o" data-framer-name="Made by">
            <div
              className="framer-6c9zsn"
              data-framer-name="Website by Midu Studio"
              data-framer-component-type="RichTextContainer"
              style={{ transform: "none" }}
            >
              <p
                dir="auto"
                style={{
                  ["--font-selector" as any]: "R0Y7U3dpdHplci01MDA=",
                  ["--framer-font-family" as any]:
                    '"Switzer", "Switzer Placeholder", sans-serif',
                  ["--framer-font-weight" as any]: 500,
                  ["--framer-letter-spacing" as any]: "-0.04em",
                  ["--framer-line-height" as any]: "84%",
                  ["--framer-text-color" as any]: "rgba(255, 255, 255, 0.4)",
                }}
                className="framer-text"
              >
                {CONTENT.madeByText}
              </p>
            </div>
            <a
              className="framer-u7p9g1 framer-lux5qc"
              data-framer-name="Midu link"
              href={CONTENT.designerUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="framer-1nddb17"
                data-framer-name="Text"
                data-framer-component-type="RichTextContainer"
                style={{ transform: "none" }}
              >
                <p
                  dir="auto"
                  style={{
                    ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                    ["--framer-font-family" as any]:
                      '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                    ["--framer-font-weight" as any]: 500,
                    ["--framer-letter-spacing" as any]: "-0.02em",
                    ["--framer-line-height" as any]: "95%",
                    ["--framer-text-color" as any]: "rgb(255, 255, 255)",
                  }}
                  className="framer-text"
                >
                  {CONTENT.designerText}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop variant */}
      <div className="ssr-variant hidden-3zjf3v">
        <div
          className="framer-pb0sh0"
          data-framer-name="Frame 6313"
          id="fotter-scroll"
          style={{ willChange: "transform", opacity: 1, transform: "none" }}
        >
          {renderFooterBody()}
        </div>
      </div>

      {/* Mobile variant */}
      <div className="ssr-variant hidden-1h09hoc hidden-1q3w9a9 hidden-72rtr7">
        <div
          className="framer-pb0sh0"
          data-framer-name="Frame 6313"
          id="fotter-scroll"
          style={{ willChange: "transform", opacity: 1, transform: "none" }}
        >
          {renderFooterBody()}
        </div>
      </div>
    </>
  );
}
