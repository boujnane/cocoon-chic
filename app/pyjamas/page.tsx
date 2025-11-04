"use client"

import SectionBanner from "@/components/sections/SectionBanner"
import CollectionGrid from "@/components/sections/CollectionGrid"

const pyjamas = [
  { id: 1, name: "Pyjama Flamand rose", price: "120DH", image: "/images/pyjama_flamandrose_nobg.png", slug: "pyjama-flamand-rose" },
  { id: 2, name: "Pyjama Confort", price: "130DH", image: "/images/pyjama2.png", slug: "pyjama-confort" },
  { id: 3, name: "Pyjama Classique", price: "110DH", image: "/images/pyjama3.png", slug: "pyjama-classique" },
  { id: 4, name: "Pyjama Luxe", price: "125DH", image: "/images/pyjama2.png", slug: "pyjama-luxe" },
]

export default function PyjamasPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <SectionBanner
        imageUrl="/images/pyjamabanner4.png"
        title="Collection Pyjamas Cocooning"
        subtitle="Douceur, élégance et confort pour vos nuits."
        ctaText="Découvrir la collection"
        ctaLink="#pyjamas"
      />

      <CollectionGrid
        id="pyjamas"
        title="Pyjamas Femme"
        subtitle="Découvrez notre collection de pyjamas élégants et confortables pour toutes les nuits."
        products={pyjamas}
      />
    </div>
  )
}
