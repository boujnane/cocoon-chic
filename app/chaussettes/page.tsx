"use client"

import SectionBanner from "@/components/sections/SectionBanner"
import CollectionGrid from "@/components/sections/CollectionGrid"

const chaussettes = [
  { id: 1, name: "Chaussettes Stitch", price: "70DH", image: "/images/chaussettes1.png", slug: "chaussettes-stitch" },
  { id: 2, name: "Chaussettes 'The Simpsons'", price: "85DH", image: "/images/chaussettes2.png", slug: "chaussettes-simpsons" },
  { id: 3, name: "Chaussettes 'Rick & Morty'", price: "90DH", image: "/images/chaussettes3.png", slug: "chaussettes-rick&morty" },
  { id: 4, name: "Chaussettes Bob l'Éponge", price: "88DH", image: "/images/chaussettes4.png", slug: "chaussettes-spongebob" },
]

export default function ChaussettesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* ✅ Bannière section */}
      <SectionBanner
        imageUrl="/images/chaussettebanner.png"
        title="Collection Chaussettes Cocooning"
        subtitle="Chaleur et confort pour vos moments de détente à la maison."
        ctaText="Découvrir la collection"
        ctaLink="#chaussettes"
        imageClassName="object-cover"
      />

      {/* ✅ Grille de produits */}
      <CollectionGrid
        id="chaussettes"
        title="Chaussettes Douces"
        subtitle="Découvrez nos chaussettes moelleuses et élégantes pour un confort absolu au quotidien."
        products={chaussettes}
      />
    </div>
  )
}
