import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Cocoon Chic",
  description: "Élégance naturelle pour votre intérieur.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col bg-gradient-to-b from-bg via-muted to-bg text-dark transition-colors duration-300">
        {/* Navbar fixe */}
        <header className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </header>

        {/* Contenu principal */}
        <main className="flex-1 pt-24 px-6 md:px-12 lg:px-24">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-auto p-6 bg-dark text-bg text-center text-sm md:text-base tracking-wide">
          © {new Date().getFullYear()} Cocoon Chic — Tous droits réservés.
        </footer>
      </body>
    </html>
  );
}
