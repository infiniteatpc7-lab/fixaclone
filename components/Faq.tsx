"use client";

import React, { useState } from "react";

const CONTENT = {
  badge: "FAQ",
  heading: "We’re here to help. If you didn’t find the answer to your question, feel free to",
  contactEmail: "info@fixaplan.com",
  headingSuffix: "anytime.",
  faqs: [
    {
      id: "adhd",
      containerClass: "framer-5eopuc-container",
      question: "Is Fixa made for people with ADHD?",
      answer:
        "Fixa is designed with ADHD-friendly planning in mind: low-friction task creation, less visual noise, and a structure that helps you start without overthinking. It’s not a “perfect productivity” system it’s a calmer way to move through your day.",
    },
    {
      id: "difference",
      containerClass: "framer-pyaxav-container",
      question: "What makes Fixa different from other to-do apps?",
      answer:
        "Most to-do apps give you more features, more lists, and more pressure. Fixa focuses on what actually helps: clarity, gentle structure, and a simple flow that doesn’t overwhelm your brain.",
    },
    {
      id: "focus",
      containerClass: "framer-125tvct-container",
      question: "Will Fixa help me stay focused?",
      answer:
        "Yes. Fixa includes focus tools like a timer to help you stay in the zone. But the bigger difference is how the app feels: fewer distractions, fewer decisions, and a calmer interface that makes it easier to keep going.",
    },
    {
      id: "therapy",
      containerClass: "framer-13hsjfh-container",
      question: "Does Fixa replace therapy or ADHD medication?",
      answer:
        "No. Fixa isn’t medical treatment, and it doesn’t replace professional support. It’s a planning tool that can support your day-to-day life alongside whatever works best for you.",
    },
    {
      id: "privacy",
      containerClass: "framer-1bw9pd-container",
      question: "How do you handle privacy?",
      answer:
        "Your tasks are personal and we treat them that way. We’re building Fixa with privacy and security in mind, and we’ll share clear details before launch so you know exactly what’s stored and why.",
    },
  ],
  bottomBanner: "Gentle planning for busy minds",
  arrowIcon: "/framerusercontent.com/images/hCBxi6SokjtaDwCAVhx1F2tXA3004.svg",
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="framer-saky6x"
      data-framer-name="stacks-wrapper"
      style={{
        willChange: "transform",
        opacity: 1,
        transform: "none",
      }}
    >
      <div className="framer-1a7t0gz" data-framer-name="FAQ" id="faq">
        <div className="framer-fzp7w" data-framer-name="Frame 66">
          <div className="ssr-variant">
            <div className="framer-1cuno5y-container">
              <div
                className="framer-6bpSX framer-s3j90v framer-v-s3j90v"
                data-framer-name="Variant 1"
                style={{
                  ["--corner-shape-fallback" as any]: "0.752",
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                  ["cornerShape" as any]: "superellipse(1.5)",
                  height: "100%",
                  borderBottomLeftRadius:
                    "calc(8px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                  borderBottomRightRadius:
                    "calc(8px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                  borderTopLeftRadius:
                    "calc(8px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                  borderTopRightRadius:
                    "calc(8px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                }}
              >
                <div
                  className="framer-kk53yh"
                  data-framer-name="ADHD-Friendly"
                  data-framer-component-type="RichTextContainer"
                  style={{
                    ["--extracted-r6o4lv" as any]: "var(--variable-reference-qwRAGBFWz-ft3_3MoxW)",
                    ["--framer-paragraph-spacing" as any]: "0px",
                    ["--variable-reference-qwRAGBFWz-ft3_3MoxW" as any]: "rgb(134, 134, 134)",
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
                      ["--framer-font-size" as any]: "14px",
                      ["--framer-font-weight" as any]: 500,
                      ["--framer-line-height" as any]: "95%",
                      ["--framer-text-color" as any]:
                        "var(--extracted-r6o4lv, var(--variable-reference-qwRAGBFWz-ft3_3MoxW))",
                    }}
                  >
                    {CONTENT.badge}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-ns1b41" data-framer-name="Frame 6314">
            <div
              className="framer-kqkgt"
              data-framer-name="We’re here to help. If you didn’t find the answer to your question, feel free to"
              data-framer-component-type="RichTextContainer"
              style={{ willChange: "transform", opacity: 1, transform: "none" }}
            >
              <p
                dir="auto"
                style={{
                  ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                  ["--framer-font-family" as any]:
                    '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                  ["--framer-font-size" as any]: "32px",
                  ["--framer-font-weight" as any]: 500,
                  ["--framer-letter-spacing" as any]: "-0.02em",
                  ["--framer-line-height" as any]: "120%",
                  ["--framer-text-color" as any]: "rgba(0, 0, 0, 0.5)",
                }}
                className="framer-text"
              >
                {CONTENT.heading}
              </p>
            </div>
            <div
              className="framer-orl12k"
              data-framer-name="Frame 6315"
              style={{ willChange: "transform", opacity: 1, transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-11rplel-container">
                  <a
                    className="framer-tuDPU framer-fe4h0k framer-v-fe4h0k framer-13vycc3"
                    data-framer-name="Calm_fold"
                    href={`mailto:${CONTENT.contactEmail}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      ["--corner-shape-fallback" as any]: "0.752",
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      ["cornerShape" as any]: "superellipse(1.5)",
                      borderBottomLeftRadius:
                        "calc(8px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                      borderBottomRightRadius:
                        "calc(8px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                      borderTopLeftRadius:
                        "calc(8px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                      borderTopRightRadius:
                        "calc(8px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                    }}
                  />
                </div>
              </div>
              <div
                className="framer-16odcid"
                data-framer-name="anytime."
                data-framer-component-type="RichTextContainer"
                style={{ transform: "none" }}
              >
                <p
                  dir="auto"
                  style={{
                    ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                    ["--framer-font-family" as any]:
                      '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                    ["--framer-font-size" as any]: "32px",
                    ["--framer-font-weight" as any]: 500,
                    ["--framer-letter-spacing" as any]: "-0.02em",
                    ["--framer-line-height" as any]: "120%",
                    ["--framer-text-color" as any]: "rgba(0, 0, 0, 0.5)",
                  }}
                  className="framer-text"
                >
                  {CONTENT.headingSuffix}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="framer-fx87ml" data-framer-name="Frame 6296">
          {CONTENT.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <React.Fragment key={faq.id}>
                {/* Desktop variant */}
                <div className="ssr-variant hidden-3zjf3v">
                  <div
                    className={faq.containerClass}
                    style={{
                      willChange: "transform",
                      opacity: 1,
                      transform: "none",
                    }}
                  >
                    <div
                      className={`framer-hNcoq framer-159dirn ${
                        isOpen ? "framer-v-159dirn" : "framer-v-diub25"
                      }`}
                      data-framer-name={isOpen ? "Variant 1" : "Variant 2"}
                      data-highlight="true"
                      tabIndex={0}
                      onClick={() => toggleFaq(index)}
                      style={{
                        ["--corner-shape-fallback" as any]: "0.752",
                        backgroundColor: "rgba(0, 0, 0, 0.05)",
                        ["cornerShape" as any]: "superellipse(1.5)",
                        width: "100%",
                        borderBottomLeftRadius:
                          "calc(24px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                        borderBottomRightRadius:
                          "calc(24px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                        borderTopLeftRadius:
                          "calc(24px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                        borderTopRightRadius:
                          "calc(24px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                        cursor: "pointer",
                      }}
                    >
                      <div className="framer-3wtu49" data-framer-name="heading">
                        <div
                          className="framer-fuxy1h"
                          data-framer-name="When can I see/measure effects?"
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
                              ["--framer-font-size" as any]: "18px",
                              ["--framer-font-weight" as any]: 500,
                              ["--framer-letter-spacing" as any]: "-0.02em",
                              ["--framer-line-height" as any]: "120%",
                            }}
                          >
                            {faq.question}
                          </p>
                        </div>
                        <div
                          className="framer-hn66iv"
                          data-framer-name="icon"
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            borderBottomLeftRadius: 12,
                            borderBottomRightRadius: 12,
                            borderTopLeftRadius: 12,
                            borderTopRightRadius: 12,
                          }}
                        >
                          <div
                            className="framer-1eku9nc"
                            style={{
                              transform: isOpen ? "rotate(180deg)" : "none",
                              transition: "transform 0.3s ease",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                borderRadius: "inherit",
                                ["cornerShape" as any]: "inherit",
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
                                width="14"
                                height="14"
                                src={CONTENT.arrowIcon}
                                alt=""
                                style={{
                                  display: "block",
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "inherit",
                                  ["cornerShape" as any]: "inherit",
                                  objectPosition: "center",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1k2438a" data-framer-name="ewa">
                        <div
                          className="framer-1mxd6nc"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            ["--extracted-r6o4lv" as any]: "rgba(0, 0, 0, 0.6)",
                            ["--framer-link-text-color" as any]: "rgb(0, 153, 255)",
                            ["--framer-link-text-decoration" as any]: "underline",
                            opacity: isOpen ? 1 : 0,
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
                              ["--framer-line-height" as any]: "130%",
                              ["--framer-text-color" as any]:
                                "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.6))",
                            }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile variant */}
                <div className="ssr-variant hidden-1h09hoc hidden-1q3w9a9 hidden-72rtr7">
                  <div
                    className={faq.containerClass}
                    style={{
                      willChange: "transform",
                      opacity: 1,
                      transform: "none",
                    }}
                  >
                    <div
                      className={`framer-hNcoq framer-159dirn ${
                        isOpen ? "framer-v-sv027y" : "framer-v-xb8b67"
                      }`}
                      data-framer-name={isOpen ? "Phone open" : "Phone closed"}
                      data-highlight="true"
                      tabIndex={0}
                      onClick={() => toggleFaq(index)}
                      style={{
                        ["--corner-shape-fallback" as any]: "0.752",
                        backgroundColor: "rgba(0, 0, 0, 0.05)",
                        ["cornerShape" as any]: "superellipse(1.5)",
                        width: "100%",
                        borderBottomLeftRadius:
                          "calc(24px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                        borderBottomRightRadius:
                          "calc(24px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                        borderTopLeftRadius:
                          "calc(24px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                        borderTopRightRadius:
                          "calc(24px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                        cursor: "pointer",
                      }}
                    >
                      <div className="framer-3wtu49" data-framer-name="heading">
                        <div
                          className="framer-fuxy1h"
                          data-framer-name="When can I see/measure effects?"
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
                              ["--framer-font-size" as any]: "18px",
                              ["--framer-font-weight" as any]: 500,
                              ["--framer-letter-spacing" as any]: "-0.02em",
                              ["--framer-line-height" as any]: "120%",
                            }}
                          >
                            {faq.question}
                          </p>
                        </div>
                        <div
                          className="framer-hn66iv"
                          data-framer-name="icon"
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            borderBottomLeftRadius: 12,
                            borderBottomRightRadius: 12,
                            borderTopLeftRadius: 12,
                            borderTopRightRadius: 12,
                          }}
                        >
                          <div
                            className="framer-1eku9nc"
                            style={{
                              transform: isOpen ? "rotate(180deg)" : "rotate(360deg)",
                              transition: "transform 0.3s ease",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                borderRadius: "inherit",
                                ["cornerShape" as any]: "inherit",
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
                                width="14"
                                height="14"
                                src={CONTENT.arrowIcon}
                                alt=""
                                style={{
                                  display: "block",
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "inherit",
                                  ["cornerShape" as any]: "inherit",
                                  objectPosition: "center",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1k2438a" data-framer-name="ewa">
                        <div
                          className="framer-1mxd6nc"
                          data-framer-component-type="RichTextContainer"
                          style={{
                            ["--extracted-r6o4lv" as any]: "rgba(0, 0, 0, 0.6)",
                            ["--framer-link-text-color" as any]: "rgb(0, 153, 255)",
                            ["--framer-link-text-decoration" as any]: "underline",
                            opacity: isOpen ? 1 : 0,
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
                              ["--framer-line-height" as any]: "130%",
                              ["--framer-text-color" as any]:
                                "var(--extracted-r6o4lv, rgba(0, 0, 0, 0.6))",
                            }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                      <div className="framer-htlc2n" style={{ opacity: 0 }} />
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Bottom Banner: Gentle planning for busy minds */}
        <div className="framer-1qdx5a0" data-framer-name="Frame 6299">
          {/* Desktop Banner */}
          <div className="ssr-variant hidden-3zjf3v">
            <div
              className="framer-1yakmvw"
              data-framer-name="Shape your career at Fixa"
              data-framer-component-type="RichTextContainer"
              style={{ transform: "none" }}
            >
              <p
                dir="auto"
                style={{
                  ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                  ["--framer-font-family" as any]:
                    '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                  ["--framer-font-size" as any]: "120px",
                  ["--framer-font-weight" as any]: 500,
                  ["--framer-letter-spacing" as any]: "-0.04em",
                  ["--framer-line-height" as any]: "84%",
                  ["--framer-text-alignment" as any]: "center",
                }}
                className="framer-text"
              >
                <span
                  data-text-fill="true"
                  style={{
                    backgroundImage:
                      "linear-gradient(0deg, rgba(26, 26, 26, 0) 0%, rgba(26, 26, 26, 0.6) 55.9211%, rgba(26, 26, 26, 0.8) 100%)",
                  }}
                  className="framer-text"
                >
                  {CONTENT.bottomBanner}
                </span>
              </p>
            </div>
          </div>

          {/* Mobile Banner */}
          <div className="ssr-variant hidden-1h09hoc hidden-1q3w9a9 hidden-72rtr7">
            <div
              className="framer-1yakmvw"
              data-framer-name="Shape your career at Fixa"
              data-framer-component-type="RichTextContainer"
              style={{ transform: "none" }}
            >
              <p
                dir="auto"
                style={{
                  ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                  ["--framer-font-family" as any]:
                    '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                  ["--framer-font-size" as any]: "56px",
                  ["--framer-font-weight" as any]: 500,
                  ["--framer-letter-spacing" as any]: "-0.04em",
                  ["--framer-line-height" as any]: "94%",
                  ["--framer-text-alignment" as any]: "center",
                }}
                className="framer-text"
              >
                <span
                  data-text-fill="true"
                  style={{
                    backgroundImage:
                      "linear-gradient(0deg, rgba(26, 26, 26, 0) 0%, rgba(26, 26, 26, 0.6) 55.9211%, rgba(26, 26, 26, 0.8) 100%)",
                  }}
                  className="framer-text"
                >
                  {CONTENT.bottomBanner}
                </span>
              </p>
            </div>
          </div>
          <div className="framer-trkjss-container">
            <div className="ssr-variant">
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
