// components/PyjamaBanner.tsx
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface PyjamaBannerProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function PyjamaBanner({
  imageUrl,
  title,
  subtitle,
  ctaText,
  ctaLink,
}: PyjamaBannerProps) {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] mb-12 overflow-hidden rounded-lg">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover brightness-90"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start px-6 sm:px-12 lg:px-24">
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
