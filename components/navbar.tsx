"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function CocooningMenu() {
  return (
    <div className="flex justify-center self-start pt-6 w-full">
      <NavigationMenu>
        <NavigationMenuList>
          {/* Menu Nos collections */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Nos collections</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-[var(--popover)] text-[var(--popover-foreground)] shadow-lg rounded-lg p-6">
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr] list-none">
                {/* Élément principal avec image au-dessus */}
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/pyjamas"
                      className="group flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[var(--muted)/40] to-[var(--muted)] p-6 no-underline outline-none focus:shadow-md transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="relative w-32 h-32 mb-3 transition-transform duration-300 group-hover:scale-115">
                          <Image
                            src="/images/pyjama_flamandrose_nobg.png"
                            alt="Pyjama cocooning"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="text-lg font-medium mb-2 group-hover:text-[var(--accent)] transition-colors duration-200">
                          Pyjamas Cocooning
                        </div>
                        <p className="text-sm leading-tight text-[var(--popover-foreground)]">
                          Des nuits douces et confortables grâce à nos pyjamas en coton et flanelle.
                        </p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>

                {/* Autres sous-éléments */}
                <ListItem href="/chaussettes" title="Chaussettes Douces">
                  Restez au chaud avec nos chaussettes moelleuses pour tous les jours.
                </ListItem>
                <ListItem href="/ensembles-lounge" title="Ensembles Lounge">
                  Pour vos moments détente à la maison, des ensembles confortables et stylés.
                </ListItem>
                <ListItem href="/accessoires" title="Accessoires Cocooning">
                  Plaids, masques de sommeil et autres indispensables pour le cocooning parfait.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Menu Inspiration */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Inspiration</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-[var(--popover)] text-[var(--popover-foreground)] shadow-lg rounded-lg p-6">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] list-none">
                <ListItem href="/guide-confort" title="Guide du confort">
                  Astuces et conseils pour profiter pleinement de vos moments cocooning.
                </ListItem>
                <ListItem href="/tendances" title="Tendances">
                  Découvrez les tendances pyjamas et chaussettes pour cette saison.
                </ListItem>
                <ListItem href="/cadeaux" title="Idées cadeaux">
                  Offrez douceur et confort avec nos suggestions de cadeaux cocooning.
                </ListItem>
                <ListItem href="/blog" title="Blog">
                  Articles sur le lifestyle cozy, le bien-être et les moments détente.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Menu Contact */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/contact" className={navigationMenuTriggerStyle()}>
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={`
            block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200
            hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]
            focus:bg-[var(--accent)] focus:text-[var(--accent-foreground)]
            ${className ?? ""}
          `}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-[var(--popover-foreground)]">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
