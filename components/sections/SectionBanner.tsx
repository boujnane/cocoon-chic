import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface SectionBannerProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  imageClassName?: string; // <- nouveau prop optionnel
}

export default function SectionBanner({
  imageUrl,
  title,
  subtitle,
  ctaText,
  ctaLink,
  imageClassName = "", // par défaut rien
}: SectionBannerProps) {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] mb-12 overflow-hidden rounded-lg">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className={`brightness-90 ${imageClassName}`}
        priority
      />
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-start px-6 sm:px-12 lg:px-24">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h1>
        {subtitle && <p className="text-lg sm:text-xl text-white mb-6">{subtitle}</p>}
        {ctaText && ctaLink && (
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200"
            onClick={() => window.location.href = ctaLink}
          >
            {ctaText}
          </Button>
        )}
      </div>
    </div>
  );
}
