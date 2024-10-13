import React from 'react';
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";

export default function Component() {
  return (
    <header className="flex bg-black h-[50px] w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6 text-white" /> {/* White Menu Icon */}
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-black text-white"> {/* Black background with white text */}
          <Link href="#" prefetch={false} className="text-yellow-500"> {/* Yellow for the logo */}
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold text-white hover:text-yellow-500 hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold text-white hover:text-yellow-500 hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold text-white hover:text-yellow-500 hover:underline" prefetch={false}>
              Services
            </Link>
            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold text-white hover:text-yellow-500 hover:underline" prefetch={false}>
              Portfolio
            </Link>
            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold text-white hover:text-yellow-500 hover:underline" prefetch={false}>
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      {/* Logo Section */}
      <Link href="#" className="mr-6 hidden lg:flex text-yellow-500" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>

      {/* Navigation Menu for larger screens */}
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              href="#"
              className="group text-lg inline-flex h-9 w-max items-center justify-center rounded-md bg-black text-white px-4 py-2 font-medium transition-colors hover:bg-blue-500 hover:text-white focus:bg-yellow-500 focus:text-black focus:outline-none"
              prefetch={false}
            >
              Home
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="#"
              className="group text-lg inline-flex h-9 w-max items-center justify-center rounded-md bg-black text-white px-4 py-2 font-medium transition-colors hover:bg-blue-500 hover:text-white focus:bg-yellow-500 focus:text-black focus:outline-none"
              prefetch={false}
            >
              About
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="#"
              className="group text-lg inline-flex h-9 w-max items-center justify-center rounded-md bg-black text-white px-4 py-2 font-medium transition-colors hover:bg-blue-500 hover:text-white focus:bg-yellow-500 focus:text-black focus:outline-none"
              prefetch={false}
            >
              Services
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="#"
              className="group text-lg inline-flex h-9 w-max items-center justify-center rounded-md bg-black text-white px-4 py-2 font-medium transition-colors hover:bg-blue-500 hover:text-white focus:bg-yellow-500 focus:text-black focus:outline-none"
              prefetch={false}
            >
              Portfolio
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="#"
              className="group text-lg inline-flex h-9 w-max items-center justify-center rounded-md bg-black text-white px-4 py-2 font-medium transition-colors hover:bg-blue-500 hover:text-white focus:bg-yellow-500 focus:text-black focus:outline-none"
              prefetch={false}
            >
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
