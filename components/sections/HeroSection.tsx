"use client"

import Link from "next/link"

interface HeroSectionProps {
  title: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  videoUrl: string
}

export default function HeroSection({
  title,
  subtitle,
  ctaText = "Découvrir",
  ctaHref = "/",
  videoUrl,
}: HeroSectionProps) {
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Vidéo de fond */}
      <video
        className="absolute inset-0 w-full h-full object-cover
                    filter sepia-[0.5] hue-rotate-320 brightness-[1.05] saturate-[1.3]"
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        />

      {/* Overlay sombre subtil */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Contenu */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-title text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-2xl text-white/90 mb-8">
            {subtitle}
          </p>
        )}
        {ctaText && ctaHref && (
          <Link
            href={ctaHref}
            className="inline-block px-8 py-3 text-sm md:text-base font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent)]/90 rounded-md transition"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  )
}
