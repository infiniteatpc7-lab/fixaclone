"use client";

import React, { useEffect, useRef } from "react";

const CONTENT = {
  sectionTitle: "Tools that work with your mind, not against it",
  actionTextLine1: "No clutter. No complicated setup.",
  actionTextLine2: "Just your day, clearly planned.",
  actionButton: "Join the waitlist",
  pills: [
    { title: "Designed for calm, not chaos", targetId: "sticky-1item", frameName: "Frame 87", frameClass: "framer-x7mdtc" },
    { title: "The effortless way to begin", targetId: "sticky-2item", frameName: "Frame 88", frameClass: "framer-v8q7kg" },
    { title: "Stay fully focused", targetId: "sticky-3item", frameName: "Frame 89", frameClass: "framer-rdods5" },
    { title: "Small steps. Zero guilt", targetId: "sticky-4item", frameName: "Frame 90", frameClass: "framer-1xyg1u8" },
  ],
  cards: [
    {
      id: "sticky-1item",
      cardClass: "framer-1acn6jp",
      headingClass: "framer-tyghxm",
      iconClass: "framer-304vof",
      imgWrapperClass: "framer-ijn3xb",
      icon: "/framerusercontent.com/images/C8VS09XuSMGfnSUc82ZhhMiXRa0813b.svg",
      title: "Designed for calm, not chaos",
      image: "/framerusercontent.com/images/tC5phDS1LNYMA1wQWaeq9OsGW184bcd.webp",
      desc: "Fixa removes the clutter that makes planning feel exhausting. Every screen is built to be clear, gentle, and easy to follow so you can focus on doing, not figuring things out.",
    },
    {
      id: "sticky-2item",
      cardClass: "framer-1blty5j",
      headingClass: "framer-3j0kgn",
      iconClass: "framer-1duwxzu",
      imgWrapperClass: "framer-1sf5wak",
      icon: "/framerusercontent.com/images/e1sqv6yDZs9eiwA1Vi8zwt9NIMU813b.svg",
      title: "The effortless way to begin",
      image: "/framerusercontent.com/images/wdiyf3RainSE2ei21wGTmn1A8QQ4bcd.webp",
      desc: "When starting feels hard, Fixa offers simple days to begin with — some inspired by familiar celebrity routines.",
    },
    {
      id: "sticky-3item",
      cardClass: "framer-v0divy",
      headingClass: "framer-1eanhbo",
      iconClass: "framer-j21ur6",
      imgWrapperClass: "framer-18nnai4",
      icon: "/framerusercontent.com/images/4zWoE0csW9Vb7rrZYYEzg8hRK4813b.svg",
      title: "Stay fully focused",
      image: "/framerusercontent.com/images/kZW1dq5Sqd0rvMulTBXHA3l3Jd44bcd.webp",
      desc: "Turn on the timer to stay in the zone and minimize distractions. Knowing how much time you have makes it easier to complete tasks efficiently.",
    },
    {
      id: "sticky-4item",
      cardClass: "framer-1juwdtz",
      headingClass: "framer-1hun6v7",
      iconClass: "framer-1vh2ub7",
      imgWrapperClass: "framer-1iu3udi",
      icon: "/framerusercontent.com/images/hudgiraFzbszNXbH7xyrzEaC3E813b.svg",
      title: "Small steps. Zero guilt",
      image: "/framerusercontent.com/images/MpwLfV3BL41ih4BTUbGjwjVEyU4bcd.webp",
      desc: "Become the best version of yourself. Grow your streak, celebrate your wins, and trust the process as small wins lead to big transformations.",
    },
  ],
};

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Navigation Pills Click Events
    const pills = CONTENT.pills.map((pill) => ({
      frame: container.querySelector(`[data-framer-name="${pill.frameName}"]`),
      targetId: pill.targetId,
    }));

    const handleClick = (targetId: string) => {
      const el = document.getElementById(targetId);
      if (el) {
        const yOffset = -140;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    const cleanupClicks: (() => void)[] = [];
    pills.forEach(({ frame, targetId }) => {
      if (frame) {
        (frame as HTMLElement).style.cursor = "pointer";
        const listener = (e: Event) => {
          e.preventDefault();
          handleClick(targetId);
        };
        frame.addEventListener("click", listener);
        cleanupClicks.push(() => frame.removeEventListener("click", listener));
      }
    });

    // 2. Active Tab Pill Highlighting & Card Fade-In on Scroll
    const cardIds = CONTENT.cards.map((c) => c.id);
    const cardElements = cardIds.map((id) => document.getElementById(id));
    const navVariantContainer = container.querySelector(".framer-1cax2fi-container [data-framer-name]");

    const updateActiveState = (activeIndex: number) => {
      if (navVariantContainer) {
        navVariantContainer.setAttribute("data-framer-name", `${activeIndex + 1} choose`);
      }
      pills.forEach(({ frame }, idx) => {
        if (!frame) return;
        const textP = frame.querySelector("p");
        if (textP) {
          if (idx === activeIndex) {
            textP.style.setProperty("--framer-text-color", "rgb(255, 255, 255)");
            textP.style.color = "rgb(255, 255, 255)";
            (frame as HTMLElement).style.opacity = "1";
            (frame as HTMLElement).style.backgroundColor = "rgba(0, 0, 0, 0.2)";
          } else {
            textP.style.setProperty("--framer-text-color", "rgba(255, 255, 255, 0.4)");
            textP.style.color = "rgba(255, 255, 255, 0.4)";
            (frame as HTMLElement).style.opacity = "1";
            (frame as HTMLElement).style.backgroundColor = "rgba(0, 0, 0, 0.2)";
          }
        }
      });
    };

    const onScroll = () => {
      const viewportCenter = window.innerHeight * 0.45;
      let activeIndex = 0;

      cardElements.forEach((card, idx) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();

        // Card entrance animation: animate card opacity & transform as it enters view
        if (rect.top < window.innerHeight * 0.85) {
          card.style.opacity = "1";
          card.style.transform = "none";
        }

        // Determine which card is currently closest to or passing the sticky focus line
        if (rect.top <= viewportCenter) {
          activeIndex = idx;
        }
      });

      updateActiveState(activeIndex);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Run once initially to set correct state
    onScroll();

    return () => {
      cleanupClicks.forEach((cleanup) => cleanup());
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="framer-14n2qcc"
      data-framer-name="features-section"
      id="features"
    >
      <div className="framer-1fn5xhi" data-framer-name="container">
        {/* Left Sticky Column */}
        <div className="framer-1rpem3r" data-framer-name="sticky-section">
          <div className="framer-1tu0f16" data-framer-name="info">
            {/* Desktop Section Title */}
            <div className="ssr-variant hidden-3zjf3v">
              <div
                className="framer-1ggu7px"
                data-framer-name="Tools that work with your mind, not against it"
                data-framer-component-type="RichTextContainer"
                style={{ willChange: "transform", opacity: 1, transform: "none" }}
              >
                <p
                  dir="auto"
                  style={{
                    ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBSZWd1bGFy",
                    ["--framer-font-family" as any]: '"Switzer Regular", "Switzer Regular Placeholder", sans-serif',
                    ["--framer-font-size" as any]: "46px",
                    ["--framer-letter-spacing" as any]: "-0.03em",
                    ["--framer-line-height" as any]: "95%",
                    ["--framer-text-color" as any]: "rgb(255, 255, 255)",
                  }}
                  className="framer-text"
                >
                  {CONTENT.sectionTitle}
                </p>
              </div>
            </div>

            {/* Mobile Section Title */}
            <div className="ssr-variant hidden-1h09hoc hidden-1q3w9a9 hidden-72rtr7">
              <div
                className="framer-1ggu7px"
                data-framer-name="Tools that work with your mind, not against it"
                data-framer-component-type="RichTextContainer"
                style={{ willChange: "transform", opacity: 1, transform: "none" }}
              >
                <p
                  dir="auto"
                  style={{
                    ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBSZWd1bGFy",
                    ["--framer-font-family" as any]: '"Switzer Regular", "Switzer Regular Placeholder", sans-serif',
                    ["--framer-font-size" as any]: "46px",
                    ["--framer-letter-spacing" as any]: "-0.03em",
                    ["--framer-line-height" as any]: "95%",
                    ["--framer-text-color" as any]: "rgb(255, 255, 255)",
                  }}
                  className="framer-text"
                >
                  {CONTENT.sectionTitle}
                </p>
              </div>
            </div>

            {/* Navigation Pills */}
            <div className="framer-1cax2fi-container hidden-3zjf3v hidden-1q3w9a9">
              <div className="framer-iyUUK framer-67bocd framer-v-67bocd" data-framer-name="1 choose">
                {CONTENT.pills.map((pill, idx) => (
                  <div
                    key={pill.targetId}
                    className={pill.frameClass}
                    data-framer-name={pill.frameName}
                    style={{
                      ["--corner-shape-fallback" as any]: 0.752,
                      backgroundColor: "rgba(0, 0, 0, 0.2)",
                      cornerShape: "superellipse(1.5)",
                      willChange: "transform",
                      borderBottomLeftRadius: "calc(8px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                      borderBottomRightRadius: "calc(8px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                      borderTopLeftRadius: "calc(8px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                      borderTopRightRadius: "calc(8px * var(--one-if-corner-shape-supported, var(--corner-shape-fallback, 1)))",
                      opacity: 1,
                      transform: "none",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      className="framer-10ts5pu"
                      data-framer-name={pill.title}
                      data-framer-component-type="RichTextContainer"
                      style={{
                        ["--extracted-r6o4lv" as any]: idx === 0 ? "rgb(255, 255, 255)" : "rgba(255, 255, 255, 0.4)",
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
                          ["--framer-font-size" as any]: idx === 0 ? "18px" : undefined,
                          ["--framer-font-weight" as any]: 500,
                          ["--framer-letter-spacing" as any]: "-0.02em",
                          ["--framer-line-height" as any]: "95%",
                          ["--framer-text-color" as any]: idx === 0 ? "var(--extracted-r6o4lv, rgb(255, 255, 255))" : "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.4))",
                        }}
                      >
                        {pill.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Box */}
          <div className="framer-g30bpo" data-framer-name="action">
            <div
              className="framer-12j1v1h"
              data-framer-name="No clutter. No complicated setup. Just your day, clearly planned."
              data-framer-component-type="RichTextContainer"
              style={{ transform: "none" }}
            >
              <p
                dir="auto"
                style={{
                  ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                  ["--framer-font-family" as any]: '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                  ["--framer-font-weight" as any]: 500,
                  ["--framer-letter-spacing" as any]: "-0.02em",
                  ["--framer-line-height" as any]: "120%",
                  ["--framer-text-color" as any]: "rgb(255, 255, 255)",
                }}
                className="framer-text"
              >
                {CONTENT.actionTextLine1}
              </p>
              <p
                dir="auto"
                style={{
                  ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                  ["--framer-font-family" as any]: '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                  ["--framer-font-weight" as any]: 500,
                  ["--framer-letter-spacing" as any]: "-0.02em",
                  ["--framer-line-height" as any]: "120%",
                  ["--framer-text-color" as any]: "rgb(255, 255, 255)",
                }}
                className="framer-text"
              >
                {CONTENT.actionTextLine2}
              </p>
            </div>
            <div className="ssr-variant">
              <div className="framer-f1yi17-container" id="f1yi17">
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
                        {CONTENT.actionButton}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Scroll Column Cards */}
        <div className="framer-2jzqfd" data-framer-name="scroll-section">
          {CONTENT.cards.map((card, idx) => (
            <div
              key={card.id}
              className={card.cardClass}
              data-border="true"
              data-framer-name="item"
              id={card.id}
              style={{
                willChange: "transform",
                opacity: idx === 0 ? 1 : 0,
                transform: idx === 0 ? "none" : "translateX(15px)",
                transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div className={card.headingClass} data-framer-name="heading">
                <div className={card.iconClass} data-framer-name="Rectangle 73">
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
                      width={40}
                      height={40}
                      src={card.icon}
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
                <div
                  className="framer-rxtbib"
                  data-framer-name={card.title}
                  data-framer-component-type="RichTextContainer"
                  style={{ transform: "none" }}
                >
                  <p
                    dir="auto"
                    style={{
                      ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                      ["--framer-font-family" as any]: '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                      ["--framer-font-size" as any]: "24px",
                      ["--framer-font-weight" as any]: 500,
                      ["--framer-letter-spacing" as any]: "-0.02em",
                      ["--framer-line-height" as any]: "120%",
                      ["--framer-text-color" as any]: "rgb(255, 255, 255)",
                    }}
                    className="framer-text"
                  >
                    {card.title}
                  </p>
                </div>
              </div>

              <div className={card.imgWrapperClass}>
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
                    width={1700}
                    height={1548}
                    src={card.image}
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

              <div
                className="framer-1i0eyyh"
                data-framer-name={card.desc}
                data-framer-component-type="RichTextContainer"
                style={{ transform: "none" }}
              >
                <p
                  dir="auto"
                  style={{
                    ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBNZWRpdW0=",
                    ["--framer-font-family" as any]: '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
                    ["--framer-font-weight" as any]: 500,
                    ["--framer-letter-spacing" as any]: "-0.02em",
                    ["--framer-line-height" as any]: "120%",
                    ["--framer-text-color" as any]: "rgba(255, 255, 255, 0.6)",
                  }}
                  className="framer-text"
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="framer-1al2y1q-container hidden-72rtr7 hidden-1h09hoc hidden-1q3w9a9">
        <div />
      </div>
    </div>
  );
}
