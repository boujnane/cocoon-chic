"use client"

import SectionBanner from "@/components/sections/SectionBanner"
import CollectionGrid from "@/components/sections/CollectionGrid"

const accessoires = [
  { id: 1, name: "Plaid Douceur", price: "120DH", image: "/images/plaid_douceur.png", slug: "plaid-douceur" },
  { id: 2, name: "Masque de sommeil", price: "45DH", image: "/images/masque_sommeil.png", slug: "masque-sommeil" },
  { id: 3, name: "Chaussons Cocoon", price: "80DH", image: "/images/chaussons_cocoon.png", slug: "chaussons-cocoon" },
  { id: 4, name: "Bougie parfumée", price: "60DH", image: "/images/bougie_parfumee.png", slug: "bougie-parfumee" },
]

export default function AccessoiresPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* ✅ Bannière section */}
      <SectionBanner
        imageUrl="/images/accessoiresbanner.png"
        title="Collection Accessoires Cocooning"
        subtitle="Des accessoires élégants et confortables pour vos moments de détente."
        ctaText="Découvrir la collection"
        ctaLink="#accessoires"
        imageClassName="object-cover"
      />

      {/* ✅ Grille de produits */}
      <CollectionGrid
        id="accessoires"
        title="Accessoires Cocooning"
        subtitle="Découvrez nos accessoires pour rendre vos moments à la maison encore plus agréables et cosy."
        products={accessoires}
      />
    </div>
  )
}
