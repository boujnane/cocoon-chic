"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

interface HeroSectionProps {
  title: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  videoUrl: string
  fallbackImage?: string
}

export default function HeroSection({
  title,
  subtitle,
  ctaText = "Découvrir",
  ctaHref = "/",
  videoUrl,
  fallbackImage = "/images/herobanner.jpg",
}: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            console.log("Autoplay bloqué, vidéo prête à être jouée par l'utilisateur")
            setIsPlaying(false)
          })
      }
    }
  }, [isMobile])

  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Vidéo si elle a pu se lancer ou desktop, sinon image fallback */}
      {(!isMobile || isPlaying) ? (
        <video
          ref={videoRef}
          src={videoUrl}
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover
                     filter sepia-[0.5] hue-rotate-320 brightness-[1.05] saturate-[1.3]"
        />
      ) : (
        <Image
          src={fallbackImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      )}

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Contenu */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-title text-white mb-4">{title}</h1>
        {subtitle && <p className="text-lg md:text-2xl text-white/90 mb-8">{subtitle}</p>}
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
