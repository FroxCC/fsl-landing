"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Next.js App Router

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Obtiene la ruta actual

  // Cierra el menú cuando cambia la ruta
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-teal-900/50 bg-black/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between my-2">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/Formsoftware_Labs_-_Logotipo_Final_WEB_PNG.png"
                alt="FromSoftware Labs Logo"
                width={150}
                height={50}
                className="h-auto w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/servicios"
              className="text-sm text-gray-300 transition-colors hover:text-teal-400"
            >
              Servicios
            </Link>
            <Link
              href="/about-us"
              className="text-sm text-gray-300 transition-colors hover:text-teal-400"
            >
              Acerca de nosotros
            </Link>
            <Link href={"/quotation"}>
              <Button className="bg-teal-600 text-white hover:bg-teal-500">
                Empieza ahora
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-2 text-white hover:bg-teal-900/20"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] border-teal-900/50 bg-black/95 backdrop-blur-md"
              >
                <SheetHeader>
                  <SheetTitle className="text-white">Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col space-y-4">
                  <Link
                    href="/servicios"
                    className="text-lg text-gray-300 transition-colors hover:text-teal-400"
                    onClick={() => setIsOpen(false)}
                  >
                    Servicios
                  </Link>
                  <Link
                    href="/about-us"
                    className="text-lg text-gray-300 transition-colors hover:text-teal-400"
                    onClick={() => setIsOpen(false)}
                  >
                    Acerca de nosotros
                  </Link>
                  <Link href={"/quotation"} onClick={() => setIsOpen(false)}>
                    <Button className="bg-teal-600 text-white hover:bg-teal-500">
                      Empieza ahora
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
