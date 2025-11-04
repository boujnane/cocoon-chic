"use client"

import SectionBanner from "@/components/sections/SectionBanner"
import CollectionGrid from "@/components/sections/CollectionGrid"

const coffrets = [
  { id: 1, name: "Coffret TeddyBear", price: "250DH", image: "/images/coffret_teddybear.png", slug: "coffret-teddybear" },
  { id: 2, name: "Coffret Flamand Rose", price: "180DH", image: "/images/coffret_flamand.png", slug: "coffret-flamandrose" },
  { id: 3, name: "Coffret Cocooning", price: "200DH", image: "/images/coffret_cocooning.png", slug: "coffret-cocooning" },
  { id: 4, name: "Coffret Luxe", price: "250DH", image: "/images/coffret_luxe.png", slug: "coffret-luxe" },
]

export default function CoffretsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* ✅ Bannière section */}
      <SectionBanner
        imageUrl="/images/coffretsbanner3.png"
        title="Collection Coffrets Cadeaux"
        subtitle="Des coffrets soigneusement conçus pour offrir confort et élégance."
        ctaText="Découvrir la collection"
        ctaLink="#coffrets"
        imageClassName="object-cover"
      />

      {/* ✅ Grille de produits */}
      <CollectionGrid
        id="coffrets"
        title="Coffrets Cadeaux"
        subtitle="Offrez douceur et élégance avec nos coffrets pour des moments mémorables."
        products={coffrets}
      />
    </div>
  )
}
