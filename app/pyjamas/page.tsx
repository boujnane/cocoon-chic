// app/(pages)/pyjamas/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  slug: string;
}

const pyjamas: Product[] = [
  { id: 1, name: "Pyjama Élégant", price: "120€", image: "/images/pyjama1.jpg", slug: "pyjama-elegant" },
  { id: 2, name: "Pyjama Confort", price: "130€", image: "/images/pyjama2.jpg", slug: "pyjama-confort" },
  { id: 3, name: "Pyjama Classique", price: "110€", image: "/images/pyjama3.jpg", slug: "pyjama-classique" },
  { id: 4, name: "Pyjama Luxe", price: "125€", image: "/images/pyjama4.jpg", slug: "pyjama-luxe" },
  // ajouter tous les pyjamas ici
];

export default function PyjamasPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Pyjamas Femme</h1>
      <p className="text-gray-700 mb-12">
        Découvrez notre collection de pyjamas élégants et confortables pour toutes les nuits.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {pyjamas.map((product) => (
          <Card
            key={product.id}
            className="hover:shadow-lg transition cursor-pointer"
            onClick={() => {
              // Naviguer vers la page produit
              window.location.href = `/product/${product.slug}`;
            }}
          >
            <CardHeader className="p-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="outline" className="w-full">
                Voir le produit
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
