"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CONTENT = {
  badge: "Early Access",
  title: "Join the Fixa Waitlist",
  description:
    "Be the first to experience gentle, ADHD-friendly planning that works with your mind, not against it.",
  emailPlaceholder: "Enter your email address",
  submitButtonText: "Join Waitlist",
  submittingText: "Joining...",
  successTitle: "You’re on the list!",
  successDescription:
    "Thank you for joining. We’ll notify you as soon as early access opens.",
  closeAriaLabel: "Close waitlist modal",
};

export default function WaitlistModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-waitlist", handleOpen);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-waitlist", handleOpen);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 300);
  };

  return (
    <div id="overlay">
      <AnimatePresence>
        {isOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 99999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={handleClose}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.45)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            />

            {/* Modal Dialog Card */}
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                maxWidth: "480px",
                backgroundColor: "#ffffff",
                borderRadius: "28px",
                padding: "36px 32px",
                boxShadow:
                  "0 24px 48px -12px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                fontFamily: '"Switzer Medium", "Switzer Medium Placeholder", sans-serif',
              }}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={handleClose}
                aria-label={CONTENT.closeAriaLabel}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  color: "rgba(0, 0, 0, 0.6)",
                  transition: "background-color 0.2s ease",
                }}
              >
                ✕
              </button>

              {!isSubmitted ? (
                <div>
                  {/* Badge */}
                  <div
                    style={{
                      display: "inline-block",
                      backgroundColor: "rgba(0, 0, 0, 0.05)",
                      borderRadius: "8px",
                      padding: "4px 10px",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "rgba(0, 0, 0, 0.6)",
                      marginBottom: "16px",
                    }}
                  >
                    {CONTENT.badge}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "26px",
                      fontWeight: 600,
                      letterSpacing: "-0.03em",
                      lineHeight: "115%",
                      color: "#1a1a1a",
                      margin: "0 0 10px 0",
                    }}
                  >
                    {CONTENT.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 400,
                      lineHeight: "140%",
                      color: "rgba(0, 0, 0, 0.6)",
                      margin: "0 0 24px 0",
                    }}
                  >
                    {CONTENT.description}
                  </p>

                  {/* Form */}
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <input
                        type="email"
                        required
                        placeholder={CONTENT.emailPlaceholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "14px 18px",
                          borderRadius: "14px",
                          border: "1px solid rgba(0, 0, 0, 0.12)",
                          fontSize: "15px",
                          color: "#1a1a1a",
                          outline: "none",
                          backgroundColor: "#fafafa",
                          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                        }}
                      />

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                          width: "100%",
                          padding: "14px 20px",
                          borderRadius: "14px",
                          border: "none",
                          backgroundColor: "#1a1a1a",
                          color: "#ffffff",
                          fontSize: "15px",
                          fontWeight: 500,
                          cursor: isSubmitting ? "not-allowed" : "pointer",
                          transition: "background-color 0.2s ease",
                        }}
                      >
                        {isSubmitting ? CONTENT.submittingText : CONTENT.submitButtonText}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div style={{ textAlign: "center", padding: "20px 0 10px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(0, 0, 0, 0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                      fontSize: "22px",
                    }}
                  >
                    ✓
                  </div>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                      color: "#1a1a1a",
                      margin: "0 0 8px 0",
                    }}
                  >
                    {CONTENT.successTitle}
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "140%",
                      color: "rgba(0, 0, 0, 0.6)",
                      margin: 0,
                    }}
                  >
                    {CONTENT.successDescription}
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
