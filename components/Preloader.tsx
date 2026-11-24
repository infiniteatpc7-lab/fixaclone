"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CONTENT = {
  words: ["Now", "is", "the", "time."],
};

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="framer-1x6ifgp-container"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.53, 0, 0.47, 1] } }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              zIndex: 9999,
              pointerEvents: "none",
            }}
          >
            {/* Scroll Lock Style while loading */}
            <style>{`html, body { overflow: hidden !important; }`}</style>

            <div
              className="framer-qErjs framer-k18l7p framer-v-k18l7p"
              data-framer-name="Desktop"
              data-highlight="true"
              style={{ height: "100%", width: "100%" }}
            >
              <div
                className="framer-46z6ju"
                style={{
                  backgroundColor: "rgb(234, 234, 234)",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  className="framer-u4kgrv"
                  data-framer-component-type="RichTextContainer"
                  style={{
                    ["--extracted-r6o4lv" as any]: "rgb(38, 38, 38)",
                    opacity: 1,
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
                      ["--framer-font-size" as any]: "42px",
                      ["--framer-font-weight" as any]: 500,
                      ["--framer-letter-spacing" as any]: "-0.04em",
                      ["--framer-text-color" as any]:
                        "var(--extracted-r6o4lv, rgb(38, 38, 38))",
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    {CONTENT.words.map((word, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0.001, y: 8, filter: "blur(3px)" }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                          transition: {
                            delay: 0.2 + i * 0.25,
                            duration: 0.5,
                            ease: [0.12, 0.23, 0.5, 1],
                          },
                        }}
                        style={{ display: "inline-block" }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="framer-170n1cl-container">
        <div style={{ display: "none" }} />
      </div>
      <div className="framer-hjqlzq-container" />
    </>
  );
}
