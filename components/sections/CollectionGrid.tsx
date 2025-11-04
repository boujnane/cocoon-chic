"use client"

import Image from "next/image"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

interface Product {
  id: number
  name: string
  price: string
  image: string
  slug: string
}

interface CollectionGridProps {
  title: string
  subtitle?: string
  products: Product[]
  id?: string
}

export default function CollectionGrid({ title, subtitle, products, id }: CollectionGridProps) {
  return (
    <section id={id ?? "collection"} className="mt-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-[var(--dark)]">{title}</h1>
        {subtitle && (
          <p className="text-[var(--muted-foreground)] text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <Card
            key={product.id}
            className="group bg-[var(--popover)] border-none shadow-sm hover:shadow-lg rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer"
          >
            <CardHeader className="p-0 relative overflow-hidden">
              <div className="relative w-full aspect-[3/4]"> {/* Ratio portrait */}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover rounded-t-2xl transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </CardHeader>

            <CardContent className="pt-6 pb-8 text-center">
              <h3 className="text-lg font-title text-[var(--dark)] tracking-tight mb-1">
                {product.name}
              </h3>
              <p className="text-[var(--secondary)] text-base font-medium">
                {product.price}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
