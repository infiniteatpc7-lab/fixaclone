"use client";

import React, { useState } from "react";

const CONTENT = {
  logo: "Fixa.",
  links: [
    { name: "Features", href: "#features" },
    { name: "Fixa AI", href: "#fixaai" },
    { name: "FAQ", href: "#faq" },
  ],
  images: {
    bgDesktop: "/framerusercontent.com/images/xaO4Cqoe5QhlisikpQ3p47J9Zdw830f.png",
    bgMobile: "/framerusercontent.com/images/KrDXRisTbXaEqR76RQpP0QRTTQoed28.png",
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop / Large Screens Navbar */}
      <div
        className="framer-l7p0mi-container"
        data-framer-appear-id="l7p0mi"
        style={{ opacity: 1, transform: "none" }}
      >
        <div
          className={`framer-BAAnV framer-ir50y7 ${isOpen ? "framer-v-z2y9fo" : "framer-v-ir50y7"}`}
          data-framer-name={isOpen ? "open" : "Variant 1"}
          style={{ width: "100%" }}
        >
          <div
            className="framer-oi32rw"
            data-framer-name="fixed"
            style={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgb(255, 255, 255)",
              WebkitBackdropFilter: "blur(10px)",
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
          >
            <div
              className="framer-1qt2lzk"
              data-framer-name="Voca."
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
                  ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBTZW1pYm9sZA==",
                  ["--framer-font-family" as any]: '"Switzer Semibold", "Switzer Semibold Placeholder", sans-serif',
                  ["--framer-font-size" as any]: "20px",
                  ["--framer-font-weight" as any]: 600,
                  ["--framer-line-height" as any]: "95%",
                }}
              >
                {CONTENT.logo}
              </p>
            </div>
            <div className="framer-rsm4n3" data-framer-name="Burger container">
              <div className="framer-1sgdzku" data-framer-name="Burger">
                <div
                  className="framer-1g5ko6v"
                  style={{
                    backgroundColor: "rgb(0, 0, 0)",
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    transform: isOpen ? "rotate(45deg) translate(2px, 2px)" : "none",
                    transition: "transform 0.3s ease",
                  }}
                />
                <div
                  className="framer-3w5621"
                  style={{
                    backgroundColor: "rgb(0, 0, 0)",
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    transform: isOpen ? "rotate(-45deg) translate(2px, -2px)" : "none",
                    transition: "transform 0.3s ease",
                  }}
                />
              </div>
              <div
                className="framer-13opy0j"
                data-framer-name="ClickTrigger"
                data-highlight="true"
                tabIndex={0}
                onClick={toggleMenu}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <div
            className="framer-1ah98ky"
            data-framer-name="open menu"
            style={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgb(255, 255, 255)",
              WebkitBackdropFilter: "blur(10px)",
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              opacity: isOpen ? 1 : 0,
              pointerEvents: isOpen ? "auto" : "none",
              transition: "opacity 0.25s ease",
            }}
          >
            {CONTENT.links.map((link, idx) => {
              const linkClasses = [
                "framer-1f7t7he framer-11vh4uf",
                "framer-ehsfki framer-11vh4uf",
                "framer-1mn8wd framer-11vh4uf",
              ];
              const containerClasses = [
                "framer-1w1z2yh-container",
                "framer-bc1gbe-container",
                "framer-fu917q-container",
              ];
              return (
                <a
                  key={link.name}
                  className={linkClasses[idx]}
                  data-framer-name={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  <div className={containerClasses[idx]} style={{ opacity: isOpen ? 1 : 0 }}>
                    <div
                      className="framer-wD2Li framer-xyn5te framer-v-xyn5te"
                      data-framer-name="Variant 1"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        height: "100%",
                        width: "100%",
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 8,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                      }}
                    >
                      <div
                        className="framer-18yc66y"
                        data-framer-name="Home"
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
                            ["--framer-line-height" as any]: "95%",
                          }}
                        >
                          {link.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
          <div className="framer-1e2znw5-container" style={{ transform: "translateX(-50%)" }}>
            <div className="gooey-component" style={{ display: "none" }}>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                  <filter id="goo-1e2znw5">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -8"
                      result="goo"
                    />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Breakpoint Variant */}
      <div className="ssr-variant hidden-1h09hoc hidden-1q3w9a9 hidden-72rtr7">
        <div
          className="framer-l7p0mi-container"
          data-framer-appear-id="l7p0mi"
          style={{ opacity: 1, transform: "none" }}
        >
          <div
            className={`framer-BAAnV framer-ir50y7 ${isOpen ? "framer-v-mei9w6" : "framer-v-ibihbx"}`}
            data-framer-name={isOpen ? "open" : "Phone1"}
            style={{ width: "100%" }}
          >
            <div
              className="framer-oi32rw"
              data-framer-name="fixed"
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgb(255, 255, 255)",
                WebkitBackdropFilter: "blur(10px)",
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              }}
            >
              <div
                className="framer-1qt2lzk"
                data-framer-name="Voca."
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
                    ["--font-selector" as any]: "Q1VTVE9NVjI7U3dpdHplciBTZW1pYm9sZA==",
                    ["--framer-font-family" as any]: '"Switzer Semibold", "Switzer Semibold Placeholder", sans-serif',
                    ["--framer-font-size" as any]: "20px",
                    ["--framer-font-weight" as any]: 600,
                    ["--framer-line-height" as any]: "95%",
                  }}
                >
                  {CONTENT.logo}
                </p>
              </div>
              <div className="framer-rsm4n3" data-framer-name="Burger container">
                <div className="framer-1sgdzku" data-framer-name="Burger">
                  <div
                    className="framer-1g5ko6v"
                    style={{
                      backgroundColor: "rgb(0, 0, 0)",
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                      transform: isOpen ? "rotate(45deg) translate(2px, 2px)" : "none",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <div
                    className="framer-3w5621"
                    style={{
                      backgroundColor: "rgb(0, 0, 0)",
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                      transform: isOpen ? "rotate(-45deg) translate(2px, -2px)" : "none",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>
                <div
                  className="framer-13opy0j"
                  data-framer-name="ClickTrigger"
                  data-highlight="true"
                  tabIndex={0}
                  onClick={toggleMenu}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div
              className="framer-1ah98ky"
              data-framer-name="open menu"
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgb(255, 255, 255)",
                WebkitBackdropFilter: "blur(10px)",
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                opacity: isOpen ? 1 : 0,
                pointerEvents: isOpen ? "auto" : "none",
                transition: "opacity 0.25s ease",
              }}
            >
              {CONTENT.links.map((link, idx) => {
                const linkClasses = [
                  "framer-1f7t7he framer-11vh4uf",
                  "framer-ehsfki framer-11vh4uf",
                  "framer-1mn8wd framer-11vh4uf",
                ];
                const containerClasses = [
                  "framer-1w1z2yh-container",
                  "framer-bc1gbe-container",
                  "framer-fu917q-container",
                ];
                return (
                  <a
                    key={link.name}
                    className={linkClasses[idx]}
                    data-framer-name={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    <div className={containerClasses[idx]} style={{ opacity: isOpen ? 1 : 0 }}>
                      <div
                        className="framer-wD2Li framer-xyn5te framer-v-xyn5te"
                        data-framer-name="Variant 1"
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0)",
                          height: "100%",
                          width: "100%",
                          borderBottomLeftRadius: 8,
                          borderBottomRightRadius: 8,
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 8,
                        }}
                      >
                        <div
                          className="framer-18yc66y"
                          data-framer-name="Home"
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
                              ["--framer-line-height" as any]: "95%",
                            }}
                          >
                            {link.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Global Background Layer */}
      <div className="framer-1i6k539-container">
        <div
          className="framer-SGypE framer-1ip826p framer-v-1ip826p"
          data-framer-name="Variant 1"
          style={{ height: "100%", width: "100%" }}
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
              width={4266}
              height={3171}
              src={CONTENT.images.bgDesktop}
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
          <div className="framer-zt4hby">
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
                width={1422}
                height={1057}
                src={CONTENT.images.bgMobile}
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
            className="framer-8s223k"
            style={{
              backdropFilter: "blur(20px)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          />
          <div
            className="framer-gp5sz4"
            style={{
              backgroundColor: "rgb(234, 234, 234)",
              opacity: 1,
            }}
          />
        </div>
      </div>
    </>
  );
}
