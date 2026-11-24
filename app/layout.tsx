import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fixa Planner",
  description: "Fixa is a simple, ADHD-friendly planner that turns your thoughts into a clear plan",
  icons: {
    icon: [
      {
        url: "/framerusercontent.com/images/kUp3o6CN3yQmiwqYF5HEjsg1gzg.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/framerusercontent.com/images/qenQDMUVCtNbsk3BLgQO8bzqTLA.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  openGraph: {
    type: "website",
    title: "Fixa Planner",
    description: "Fixa is a simple, ADHD-friendly planner that turns your thoughts into a clear plan",
    images: ["/framerusercontent.com/images/eZilgOG2dV46dORyJu3ORjnyWnE.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fixa Planner",
    description: "Fixa is a simple, ADHD-friendly planner that turns your thoughts into a clear plan",
    images: ["/framerusercontent.com/images/eZilgOG2dV46dORyJu3ORjnyWnE.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
