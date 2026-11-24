import React from "react";
import Script from "next/script";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Difference from "@/components/Difference";
import Features from "@/components/Features";
import FixaAi from "@/components/FixaAi";
import BrainNoise from "@/components/BrainNoise";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

export default function Home() {
  return (
    <>
      <div
        id="main"
        data-framer-hydrate-v2='{"routeId":"augiA20Il","localeId":"default","breakpoints":[{"hash":"72rtr7","mediaQuery":"(min-width: 1440px)"},{"hash":"1h09hoc","mediaQuery":"(min-width: 1280px) and (max-width: 1439.98px)"},{"hash":"1q3w9a9","mediaQuery":"(min-width: 810px) and (max-width: 1279.98px)"},{"hash":"3zjf3v","mediaQuery":"(max-width: 809.98px)"}]}'
        suppressHydrationWarning
      >
        <div
          data-framer-root=""
          className="framer-RL1AP framer-72rtr7"
          style={{ minHeight: "100vh", width: "auto" }}
        >
          <Preloader />
          <Navbar />
          <Hero />
          <Difference />
          <Features />
          <FixaAi />
          <BrainNoise />
          <Faq />
          <Footer />
          <WaitlistModal />
        </div>
      </div>

      {/* Nested Link Helper */}
      <Script
        id="framer-nested-links"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html:
            '(()=>{function u(){function n(t,e,i){let r=document.createElement("a");r.href=t,r.target=i,r.rel=e,document.body.appendChild(r),r.click(),r.remove()}function o(t){if(this.dataset.hydrated){this.removeEventListener("click",o);return}t.preventDefault(),t.stopPropagation();let e=this.getAttribute("href");if(!e)return;if(/Mac|iPod|iPhone|iPad/u.test(navigator.userAgent)?t.metaKey:t.ctrlKey)return n(e,"","_blank");let r=this.getAttribute("rel")??"",c=this.getAttribute("target")??"";n(e,r,c)}function a(t){if(this.dataset.hydrated){this.removeEventListener("auxclick",o);return}t.preventDefault(),t.stopPropagation();let e=this.getAttribute("href");e&&n(e,"","_blank")}function s(t){if(this.dataset.hydrated){this.removeEventListener("keydown",s);return}if(t.key!=="Enter")return;t.preventDefault(),t.stopPropagation();let e=this.getAttribute("href");if(!e)return;let i=this.getAttribute("rel")??"",r=this.getAttribute("target")??"";n(e,i,r)}document.querySelectorAll("[data-nested-link]").forEach(t=>{t instanceof HTMLElement&&(t.addEventListener("click",o),t.addEventListener("auxclick",a),t.addEventListener("keydown",s))})}return u})()()',
        }}
      />

      {/* Main Framer Animation Bundle */}
      <Script
        id="framer-main-bundle"
        strategy="afterInteractive"
        type="module"
        src="/framerusercontent.com/sites/6pqAxG4bEMAWOu3odFqRSr/script_main.BsQhk5wu.mjs"
      />
    </>
  );
}
