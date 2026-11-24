"use client";

import React, { useState } from "react";

const CONTENT = {
  badge: "Fixa AI",
  headlinePrefix: "Meet Fixa AI. ",
  headlineSuffix: "Your AI bestie for getting things done without overthinking.",
  tabs: [
    {
      id: "item-1",
      title: "Talk like a human",
      desc: "Just say or type what you want to do. Fixa AI gets it, creates the task, and drops it into your day instantly.",
    },
    {
      id: "item-2",
      title: "Always one step ahead",
      desc: "Fixa AI anticipates what you need next, keeping your routine seamless and stress-free.",
    },
    {
      id: "item-3",
      title: "Control tasks without stress",
      desc: "Effortlessly manage and adjust your daily priorities without guilt or overwhelm.",
    },
  ],
  images: {
    desktopMockup: "/framerusercontent.com/images/K6oVlqJ1SryJzVBte2yxIFoGqI3967.webp",
    mobileMockup: "/framerusercontent.com/images/PDRF2Gsxmqr44mPyerdApcea0kb0d9.webp",
    arrowIcon: "/framerusercontent.com/images/GZ8gx8sQo4ShNVpIW7d9cWXvh6Yc83c.svg",
  },
};

export default function FixaAi() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="framer-h62v6d" data-framer-name="fixa ai">
      <div className="framer-1ejsz88" data-framer-name="final" id="fixaai">
        {/* Heading */}
        <div className="framer-2eow63" data-framer-name="heading">
          <div className="ssr-variant">
            <div className="framer-1id4kj4-container">
              <div
                className="framer-6bpSX framer-s3j90v framer-v-s3j90v"
                data-framer-name="Variant 1"
                style={{
                  ["--corner-shape-fallback" as any]: 0.752,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
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
                    ["--variable-reference-qwRAGBFWz-ft3_3MoxW" as any]: "rgb(134, 134, 134)",
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
                    {CONTENT.badge}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Heading text */}
          <div className="ssr-variant hidden-3zjf3v">
            <div
              className="framer-1ch04ps"
              data-framer-name="Meet Voca AI. Your AI bestie for getting things done without overthinking."
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
                  ["--framer-letter-spacing" as any]: "-0.02em",
                  ["--framer-line-height" as any]: "110%",
                  ["--framer-text-color" as any]: "rgba(255, 255, 255, 0.5)",
                }}
                className="framer-text"
              >
                <span style={{ ["--framer-text-color" as any]: "rgb(255, 255, 255)" }} className="framer-text">
                  {CONTENT.headlinePrefix}
                </span>
                {CONTENT.headlineSuffix}
              </p>
            </div>
          </div>

          {/* Mobile Heading text */}
          <div className="ssr-variant hidden-1h09hoc hidden-1q3w9a9 hidden-72rtr7">
            <div
              className="framer-1ch04ps"
              data-framer-name="Meet Voca AI. Your AI bestie for getting things done without overthinking."
              data-framer-component-type="RichTextContainer"
              style={{ willChange: "transform", opacity: 1, transform: "none" }}
            >
              <p
                dir="auto"
                style={{
                  ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                  ["--framer-font-family" as any]: '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                  ["--framer-font-size" as any]: "28px",
                  ["--framer-font-weight" as any]: 500,
                  ["--framer-letter-spacing" as any]: "-0.02em",
                  ["--framer-line-height" as any]: "110%",
                  ["--framer-text-color" as any]: "rgba(255, 255, 255, 0.5)",
                }}
                className="framer-text"
              >
                <span style={{ ["--framer-text-color" as any]: "rgb(255, 255, 255)" }} className="framer-text">
                  {CONTENT.headlinePrefix}
                </span>
                {CONTENT.headlineSuffix}
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Interactive Mockup Component */}
        <div
          className="framer-wquk41-container hidden-3zjf3v hidden-1q3w9a9"
          style={{ willChange: "transform", opacity: 1, transform: "none" }}
        >
          <div
            className="framer-c8hoa framer-sts17l framer-v-sts17l"
            data-framer-name="Variant 1"
            style={{
              ["--corner-shape-fallback" as any]: 0.752,
              backgroundColor: "rgb(26, 26, 26)",
              cornerShape: "superellipse(1.5)",
              height: "100%",
              maxWidth: "100%",
              width: "100%",
              borderBottomLeftRadius: "calc(24px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
              borderBottomRightRadius: "calc(24px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
              borderTopLeftRadius: "calc(24px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
              borderTopRightRadius: "calc(24px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
            }}
          >
            <div className="framer-r5ye1j" data-framer-name="menu">
              {/* Tab 1 */}
              <div
                className="framer-31fqzo"
                data-framer-name="item-1"
                onClick={() => setActiveTab(0)}
                style={{
                  ["--corner-shape-fallback" as any]: 0.752,
                  backdropFilter: "blur(10px)",
                  backgroundColor: activeTab === 0 ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.05)",
                  cornerShape: "superellipse(1.5)",
                  WebkitBackdropFilter: "blur(10px)",
                  borderBottomLeftRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                  borderBottomRightRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                  borderTopLeftRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                  borderTopRightRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                  cursor: "pointer",
                }}
              >
                <div className="framer-vsa9vg" data-framer-name="icon">
                  <div
                    className="framer-cn45a0"
                    data-framer-name="Talk like a human"
                    data-framer-component-type="RichTextContainer"
                    style={{ ["--extracted-r6o4lv" as any]: "rgb(255, 255, 255)", ["--framer-paragraph-spacing" as any]: "0px", transform: "none" }}
                  >
                    <p
                      dir="auto"
                      className="framer-text"
                      style={{
                        ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                        ["--framer-font-family" as any]: '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                        ["--framer-font-size" as any]: "20px",
                        ["--framer-font-weight" as any]: 500,
                        ["--framer-letter-spacing" as any]: "-0.03em",
                        ["--framer-line-height" as any]: "110%",
                        ["--framer-text-color" as any]: "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                      }}
                    >
                      {CONTENT.tabs[0].title}
                    </p>
                  </div>
                  <div
                    className="framer-uz4lhh"
                    data-framer-name="btn"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                    }}
                  >
                    <div className="framer-15w792g" style={{ transform: activeTab === 0 ? "rotate(360deg)" : "rotate(180deg)", transition: "transform 0.3s ease" }}>
                      <div style={{ position: "absolute", borderRadius: "inherit", top: 0, right: 0, bottom: 0, left: 0 }} data-framer-background-image-wrapper="true">
                        <img decoding="async" loading="lazy" width={10} height={6} src={CONTENT.images.arrowIcon} alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", objectPosition: "center", objectFit: "cover" }} />
                      </div>
                    </div>
                  </div>
                </div>
                {activeTab === 0 && (
                  <div
                    className="framer-1rmnxe1"
                    data-framer-appear-id="1rmnxe1"
                    data-framer-name={CONTENT.tabs[0].desc}
                    data-framer-component-type="RichTextContainer"
                    style={{ ["--extracted-r6o4lv" as any]: "rgba(255, 255, 255, 0.6)", ["--framer-paragraph-spacing" as any]: "0px", willChange: "transform", opacity: 1, transform: "none" }}
                  >
                    <p
                      dir="auto"
                      className="framer-text"
                      style={{
                        ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                        ["--framer-font-family" as any]: '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                        ["--framer-font-weight" as any]: 500,
                        ["--framer-line-height" as any]: "130%",
                        ["--framer-text-color" as any]: "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))",
                      }}
                    >
                      {CONTENT.tabs[0].desc}
                    </p>
                  </div>
                )}
              </div>

              {/* Tab 2 */}
              <div
                className="framer-1se55dq"
                data-framer-name="item-2"
                data-highlight="true"
                tabIndex={0}
                onClick={() => setActiveTab(1)}
                style={{
                  ["--corner-shape-fallback" as any]: 0.752,
                  backdropFilter: "blur(10px)",
                  backgroundColor: activeTab === 1 ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.05)",
                  cornerShape: "superellipse(1.5)",
                  WebkitBackdropFilter: "blur(10px)",
                  borderBottomLeftRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                  borderBottomRightRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                  borderTopLeftRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                  borderTopRightRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                  cursor: "pointer",
                }}
              >
                <div className="framer-1fbfogd" data-framer-name="title">
                  <div
                    className="framer-1vh05i1"
                    data-framer-name="Always one step ahead"
                    data-framer-component-type="RichTextContainer"
                    style={{ ["--extracted-r6o4lv" as any]: "rgb(255, 255, 255)", ["--framer-paragraph-spacing" as any]: "0px", transform: "none" }}
                  >
                    <p
                      dir="auto"
                      className="framer-text"
                      style={{
                        ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                        ["--framer-font-family" as any]: '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                        ["--framer-font-size" as any]: "20px",
                        ["--framer-font-weight" as any]: 500,
                        ["--framer-letter-spacing" as any]: "-0.03em",
                        ["--framer-line-height" as any]: "110%",
                        ["--framer-text-color" as any]: "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                      }}
                    >
                      {CONTENT.tabs[1].title}
                    </p>
                  </div>
                  <div
                    className="framer-188igrh"
                    data-framer-name="icon"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                    }}
                  >
                    <div className="framer-ms7bao" style={{ transform: activeTab === 1 ? "rotate(360deg)" : "rotate(180deg)", transition: "transform 0.3s ease" }}>
                      <div style={{ position: "absolute", borderRadius: "inherit", top: 0, right: 0, bottom: 0, left: 0 }} data-framer-background-image-wrapper="true">
                        <img decoding="async" loading="lazy" width={10} height={6} src={CONTENT.images.arrowIcon} alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", objectPosition: "center", objectFit: "cover" }} />
                      </div>
                    </div>
                  </div>
                </div>
                {activeTab === 1 && (
                  <div
                    className="framer-1rmnxe1"
                    style={{ ["--extracted-r6o4lv" as any]: "rgba(255, 255, 255, 0.6)", ["--framer-paragraph-spacing" as any]: "0px", willChange: "transform", opacity: 1, transform: "none", padding: "12px 0 0" }}
                  >
                    <p
                      dir="auto"
                      className="framer-text"
                      style={{
                        ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                        ["--framer-font-family" as any]: '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                        ["--framer-font-weight" as any]: 500,
                        ["--framer-line-height" as any]: "130%",
                        ["--framer-text-color" as any]: "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))",
                      }}
                    >
                      {CONTENT.tabs[1].desc}
                    </p>
                  </div>
                )}
              </div>

              {/* Tab 3 */}
              <div
                className="framer-jej4xs"
                data-framer-name="item-3"
                data-highlight="true"
                tabIndex={0}
                onClick={() => setActiveTab(2)}
                style={{
                  ["--corner-shape-fallback" as any]: 0.752,
                  backdropFilter: "blur(10px)",
                  backgroundColor: activeTab === 2 ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.05)",
                  cornerShape: "superellipse(1.5)",
                  WebkitBackdropFilter: "blur(10px)",
                  borderBottomLeftRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                  borderBottomRightRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                  borderTopLeftRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                  borderTopRightRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                  cursor: "pointer",
                }}
              >
                <div className="framer-r4lebm" data-framer-name="title">
                  <div
                    className="framer-3hhxby"
                    data-framer-name="Control tasks without stress"
                    data-framer-component-type="RichTextContainer"
                    style={{ ["--extracted-r6o4lv" as any]: "rgb(255, 255, 255)", ["--framer-paragraph-spacing" as any]: "0px", transform: "none" }}
                  >
                    <p
                      dir="auto"
                      className="framer-text"
                      style={{
                        ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                        ["--framer-font-family" as any]: '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                        ["--framer-font-size" as any]: "20px",
                        ["--framer-font-weight" as any]: 500,
                        ["--framer-letter-spacing" as any]: "-0.03em",
                        ["--framer-line-height" as any]: "110%",
                        ["--framer-text-color" as any]: "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                      }}
                    >
                      {CONTENT.tabs[2].title}
                    </p>
                  </div>
                  <div
                    className="framer-1wysgf1"
                    data-framer-name="icon"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                    }}
                  >
                    <div className="framer-1a315hh" style={{ transform: activeTab === 2 ? "rotate(360deg)" : "rotate(180deg)", transition: "transform 0.3s ease" }}>
                      <div style={{ position: "absolute", borderRadius: "inherit", top: 0, right: 0, bottom: 0, left: 0 }} data-framer-background-image-wrapper="true">
                        <img decoding="async" loading="lazy" width={10} height={6} src={CONTENT.images.arrowIcon} alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", objectPosition: "center", objectFit: "cover" }} />
                      </div>
                    </div>
                  </div>
                </div>
                {activeTab === 2 && (
                  <div
                    className="framer-1rmnxe1"
                    style={{ ["--extracted-r6o4lv" as any]: "rgba(255, 255, 255, 0.6)", ["--framer-paragraph-spacing" as any]: "0px", willChange: "transform", opacity: 1, transform: "none", padding: "12px 0 0" }}
                  >
                    <p
                      dir="auto"
                      className="framer-text"
                      style={{
                        ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                        ["--framer-font-family" as any]: '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                        ["--framer-font-weight" as any]: 500,
                        ["--framer-line-height" as any]: "130%",
                        ["--framer-text-color" as any]: "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))",
                      }}
                    >
                      {CONTENT.tabs[2].desc}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Slider dots */}
            <div
              className="framer-1viqk4x"
              data-framer-name="slider"
              style={{
                ["--corner-shape-fallback" as any]: 0.752,
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                cornerShape: "superellipse(1.5)",
                WebkitBackdropFilter: "blur(10px)",
                borderBottomLeftRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                borderBottomRightRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                borderTopLeftRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                borderTopRightRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
              }}
            >
              <div
                className="framer-lsj5dg"
                data-framer-name="Frame 6250"
                style={{
                  backgroundColor: activeTab === 0 ? "rgb(255, 255, 255)" : "rgba(255, 255, 255, 0.1)",
                  borderBottomLeftRadius: 49,
                  borderBottomRightRadius: 49,
                  borderTopLeftRadius: 49,
                  borderTopRightRadius: 49,
                }}
              />
              <div
                className="framer-u5la67"
                data-framer-name="Frame 6250"
                style={{
                  backgroundColor: activeTab === 1 ? "rgb(255, 255, 255)" : "rgba(255, 255, 255, 0.1)",
                  borderBottomLeftRadius: 49,
                  borderBottomRightRadius: 49,
                  borderTopLeftRadius: 49,
                  borderTopRightRadius: 49,
                }}
              />
              <div
                className="framer-bujary"
                data-framer-name="Frame 6250"
                style={{
                  backgroundColor: activeTab === 2 ? "rgb(255, 255, 255)" : "rgba(255, 255, 255, 0.1)",
                  borderBottomLeftRadius: 49,
                  borderBottomRightRadius: 49,
                  borderTopLeftRadius: 49,
                  borderTopRightRadius: 49,
                }}
              >
                <div
                  className="framer-55ybob"
                  data-framer-name="Rectangle 31"
                  style={{
                    backgroundColor: "rgb(255, 255, 255)",
                    borderBottomLeftRadius: 49,
                    borderBottomRightRadius: 49,
                    borderTopLeftRadius: 49,
                    borderTopRightRadius: 49,
                    display: activeTab === 2 ? "block" : "none",
                  }}
                />
              </div>
            </div>

            {/* Mockup image */}
            <div
              className="framer-1u31oim"
              data-framer-appear-id="1u31oim"
              data-framer-name="Image-ai"
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
                  width={1764}
                  height={1794}
                  src={CONTENT.images.desktopMockup}
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
        </div>

        {/* Mobile Variant */}
        <div className="ssr-variant hidden-3zjf3v hidden-1q3w9a9">
          <div className="framer-1o2kb1w-container hidden-72rtr7 hidden-1h09hoc">
            <div
              className="framer-WjBXR framer-1tg9ov7 framer-v-1tg9ov7"
              data-framer-name="Variant 1"
              style={{
                ["--corner-shape-fallback" as any]: 0.752,
                backgroundColor: "rgb(26, 26, 26)",
                cornerShape: "superellipse(1.5)",
                width: "100%",
                borderBottomLeftRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                borderBottomRightRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                borderTopLeftRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                borderTopRightRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
              }}
            >
              <div
                className="framer-16tx5wb"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(26, 26, 26, 0) 0%, rgba(26, 26, 26, 0.66) 38.12640765765766%, rgba(26, 26, 26, 0.9) 58.03068693693694%, rgb(26, 26, 26) 100%)",
                }}
              />
              <div className="framer-h8c8eo" data-framer-name="primary">
                <div
                  className="framer-cyw7bj"
                  data-framer-appear-id="cyw7bj"
                  data-framer-name="03 1"
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
                      width={837}
                      height={1704}
                      src={CONTENT.images.mobileMockup}
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
                <div className="framer-12xl0he" data-framer-name="bottom">
                  <div
                    className="framer-sdn3gb"
                    data-framer-name="ai-item"
                    style={{
                      ["--corner-shape-fallback" as any]: 0.752,
                      backdropFilter: "blur(10px)",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      cornerShape: "superellipse(1.5)",
                      WebkitBackdropFilter: "blur(10px)",
                      borderBottomLeftRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                      borderBottomRightRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                      borderTopLeftRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                      borderTopRightRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                    }}
                  >
                    <div
                      className="framer-1476qhn"
                      data-framer-name="Just say or type what you want to do. Voca AI gets it, creates the task, and drops it into your day instantly."
                      data-framer-component-type="RichTextContainer"
                      style={{
                        ["--extracted-1w3ko1f" as any]: "rgb(255, 255, 255)",
                        ["--extracted-r6o4lv" as any]: "rgba(255, 255, 255, 0.6)",
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
                          ["--framer-line-height" as any]: "130%",
                          ["--framer-text-color" as any]: "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))",
                        }}
                      >
                        <span className="framer-text" style={{ ["--framer-text-color" as any]: "var(--extracted-1w3ko1f, rgb(255, 255, 255))" }}>
                          Talk like a human.{" "}
                        </span>
                        {CONTENT.tabs[0].desc}
                      </p>
                    </div>
                  </div>
                  <div className="framer-b0th28" data-framer-name="menu">
                    <div
                      className="framer-1mpw9mq"
                      data-framer-name="left"
                      data-highlight="true"
                      tabIndex={0}
                      onClick={() => setActiveTab((prev) => (prev > 0 ? prev - 1 : 2))}
                      style={{
                        ["--corner-shape-fallback" as any]: 0.752,
                        backdropFilter: "blur(10px)",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        cornerShape: "superellipse(1.5)",
                        WebkitBackdropFilter: "blur(10px)",
                        borderBottomLeftRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                        borderBottomRightRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                        borderTopLeftRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                        borderTopRightRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                        cursor: "pointer",
                      }}
                    >
                      <div className="framer-1y735f7" data-framer-name="icon" style={{ transform: "rotate(-90deg)" }}>
                        <div
                          data-framer-component-type="SVG"
                          aria-hidden="true"
                          className="framer-zndf9p"
                          style={{
                            imageRendering: "pixelated",
                            flexShrink: 0,
                            backgroundSize: "100% 100%",
                            backgroundImage:
                              "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16.099 9.1\" overflow=\"visible\"><path d=\"M 15.792 8.792 C 15.595 8.989 15.328 9.1 15.05 9.1 C 14.771 9.1 14.504 8.989 14.308 8.792 L 8.052 2.536 L 1.792 8.792 C 1.382 9.202 0.718 9.202 0.308 8.792 C -0.103 8.382 -0.103 7.718 0.308 7.308 L 7.308 0.308 C 7.504 0.111 7.771 0 8.05 0 C 8.328 0 8.595 0.111 8.792 0.308 L 15.792 7.308 C 16.202 7.718 16.202 8.383 15.792 8.794 Z\" fill=\"rgb(93,93,93)\"></path></svg>')",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="framer-1lxxcmh"
                      data-framer-name="slider"
                      style={{
                        ["--corner-shape-fallback" as any]: 0.752,
                        backdropFilter: "blur(10px)",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        cornerShape: "superellipse(1.5)",
                        WebkitBackdropFilter: "blur(10px)",
                        borderBottomLeftRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                        borderBottomRightRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                        borderTopLeftRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                        borderTopRightRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                      }}
                    >
                      <div className="framer-1qj65og" data-framer-name="Frame 6250" style={{ backgroundColor: activeTab === 0 ? "rgb(255, 255, 255)" : "rgba(255, 255, 255, 0.1)", borderRadius: 6 }} />
                      <div className="framer-ew84pb" data-framer-name="Frame 6250" style={{ backgroundColor: activeTab === 1 ? "rgb(255, 255, 255)" : "rgba(255, 255, 255, 0.1)", borderRadius: 6 }} />
                      <div className="framer-a4ctv1" data-framer-name="Frame 6250" style={{ backgroundColor: activeTab === 2 ? "rgb(255, 255, 255)" : "rgba(255, 255, 255, 0.1)", borderRadius: 6 }} />
                    </div>
                    <div
                      className="framer-1i3nt40"
                      data-framer-name="right"
                      data-highlight="true"
                      tabIndex={0}
                      onClick={() => setActiveTab((prev) => (prev < 2 ? prev + 1 : 0))}
                      style={{
                        ["--corner-shape-fallback" as any]: 0.752,
                        backdropFilter: "blur(10px)",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        cornerShape: "superellipse(1.5)",
                        WebkitBackdropFilter: "blur(10px)",
                        borderBottomLeftRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                        borderBottomRightRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                        borderTopLeftRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                        borderTopRightRadius: "calc(12px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                        cursor: "pointer",
                      }}
                    >
                      <div className="framer-10asuld" data-framer-name="icon" style={{ transform: "rotate(90deg)" }}>
                        <div
                          data-framer-component-type="SVG"
                          aria-hidden="true"
                          className="framer-1sl2id2"
                          style={{
                            imageRendering: "pixelated",
                            flexShrink: 0,
                            backgroundSize: "100% 100%",
                            backgroundImage:
                              "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16.099 9.1\" overflow=\"visible\"><path d=\"M 15.792 8.792 C 15.595 8.989 15.328 9.1 15.05 9.1 C 14.771 9.1 14.504 8.989 14.308 8.792 L 8.052 2.536 L 1.792 8.792 C 1.382 9.202 0.718 9.202 0.308 8.792 C -0.103 8.382 -0.103 7.718 0.308 7.308 L 7.308 0.308 C 7.504 0.111 7.771 0 8.05 0 C 8.328 0 8.595 0.111 8.792 0.308 L 15.792 7.308 C 16.202 7.718 16.202 8.383 15.792 8.794 Z\" fill=\"rgb(93,93,93)\"></path></svg>')",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="framer-1w87vuw-container">
        <div />
      </div>
    </div>
  );
}
