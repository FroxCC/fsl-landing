import { AnimatedBackground } from "@/components/animated-background";
import { FloatingElements } from "@/components/floating-elements";
import { LogoMarquee } from "@/components/logo-marquee";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Cpu,
  HeadphonesIcon,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Hero Section */}
      <header className="relative">
        <AnimatedBackground />
        <FloatingElements />
        <div className="absolute inset-0 grid grid-cols-[repeat(auto-fit,minmax(5rem,1fr))] opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-teal-500/20" />
          ))}
        </div>
        <div className="container relative mx-auto px-4 py-24 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex rounded-full bg-teal-500/10 px-4 py-1.5">
              <span className="text-sm font-medium text-teal-400">
                Soluciones de Software de Próxima Generación
              </span>
            </div>
            <h1 className="bg-gradient-to-r from-white to-teal-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
              Impulsando la Infraestructura Digital del Mañana
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ofrecemos soluciones de software de vanguardia, soporte técnico
              experto y gestión de licencias para instituciones en todo el
              mundo.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
              <Link href={"/quotation"}>
                <Button className="bg-teal-600 text-white hover:bg-teal-500 transition-transform hover:scale-105">
                  Más Información
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* Services Section */}
      <section className="relative py-24" id="services">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(93,193,185,0.15),transparent_50%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div className="group relative overflow-hidden rounded-lg border border-teal-900/10 bg-black/30 p-8 transition-all duration-300 hover:border-teal-500/50 hover:shadow-[0_0_30px_rgba(93,193,185,0.15)]">
              <div className="relative z-10">
                <div className="mb-6 inline-flex rounded-full bg-teal-500/10 p-3">
                  <Code2 className="h-8 w-8 text-teal-400" />
                </div>
                <h3 className="mb-4 text-xl font-medium text-teal-400">
                  Software Personalizado
                </h3>
                <p className="text-gray-400">
                  Soluciones a medida diseñadas para satisfacer sus necesidades
                  y desafíos específicos.
                </p>
              </div>
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-teal-600/5 to-teal-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            <div className="group relative overflow-hidden rounded-lg border border-teal-900/10 bg-black/30 p-8 transition-all duration-300 hover:border-teal-500/50 hover:shadow-[0_0_30px_rgba(93,193,185,0.15)]">
              <div className="relative z-10">
                <div className="mb-6 inline-flex rounded-full bg-teal-500/10 p-3">
                  <HeadphonesIcon className="h-8 w-8 text-teal-400" />
                </div>
                <h3 className="mb-4 text-xl font-medium text-teal-400">
                  Soporte Técnico
                </h3>
                <p className="text-gray-400">
                  Asistencia experta 24/7 para garantizar el funcionamiento
                  óptimo de sus sistemas.
                </p>
              </div>
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-teal-600/5 to-teal-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* <div className="group relative overflow-hidden rounded-lg border border-teal-900/10 bg-black/30 p-8 transition-all duration-300 hover:border-teal-500/50 hover:shadow-[0_0_30px_rgba(93,193,185,0.15)]">
              <div className="relative z-10">
                <div className="mb-6 inline-flex rounded-full bg-teal-500/10 p-3">
                  <Key className="h-8 w-8 text-teal-400" />
                </div>
                <h3 className="mb-4 text-xl font-medium text-teal-400">
                  Gestión de Licencias
                </h3>
                <p className="text-gray-400">
                  Soluciones optimizadas para la gestión de licencias de
                  software a nivel empresarial.
                </p>
              </div>
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-teal-600/5 to-teal-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative overflow-hidden border-t border-teal-900/50 bg-black py-24">
        {/* Blurred lights */}
        <div className="absolute left-1/4 top-1/4 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute right-1/4 top-3/4 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400-500/20 blur-3xl" />
        <div className="absolute left-2/3 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/20 blur-3xl" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              ¿Por qué elegirnos?
            </h2>
            <p className="mt-4 text-gray-400">
              Experimenta el futuro de las soluciones de software con nuestra
              completa suite de servicios.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg border border-teal-900/10 bg-black/30 p-8 backdrop-blur-sm transition-all duration-300 hover:border-teal-500/50">
              <div className="relative z-10">
                <div className="mb-6 inline-flex rounded-lg bg-teal-500/10 p-3">
                  <Cpu className="h-6 w-6 text-teal-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  Tecnología Avanzada
                </h3>
                <p className="text-gray-400">
                  Soluciones innovadoras impulsadas por las tecnologías más
                  recientes.
                </p>
              </div>
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-teal-600/5 to-teal-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            <div className="group relative overflow-hidden rounded-lg border border-teal-900/10 bg-black/30 p-8 backdrop-blur-sm transition-all duration-300 hover:border-teal-500/50">
              <div className="relative z-10">
                <div className="mb-6 inline-flex rounded-lg bg-teal-500/10 p-3">
                  <ShieldCheck className="h-6 w-6 text-teal-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  Eficiencia Operativa
                </h3>
                <p className="text-gray-400">
                  Optimización de procesos para mejorar el rendimiento y la
                  productividad.
                </p>
              </div>
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-teal-600/5 to-teal-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            <div className="group relative overflow-hidden rounded-lg border border-teal-900/10 bg-black/30 p-8 backdrop-blur-sm transition-all duration-300 hover:border-teal-500/50">
              <div className="relative z-10">
                <div className="mb-6 inline-flex rounded-lg bg-teal-500/10 p-3">
                  <Sparkles className="h-6 w-6 text-teal-400 drop-shadow-[0_0_8px_rgba(51,139,133,0.5)]" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  Enfoque en la Innovación
                </h3>
                <p className="text-gray-400">
                  Evolucionamos constantemente para afrontar los desafíos del
                  mañana.
                </p>
              </div>
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-teal-600/5 to-teal-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-teal-900/50 bg-black py-24">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Nuestras Tecnologias
            </h2>
            <p className="mt-4 text-gray-400">
              Utilizamos tecnologías modernas y eficientes para ofrecer
              soluciones robustas, escalables y de alto rendimiento.
            </p>
          </div>
          <LogoMarquee />
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-teal-900/50 bg-black/80 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { number: "500+", label: "Clientes Satisfechos" },
              { number: "99.9%", label: "Servicio Garantizado" },
              { number: "24/7", label: "Soporte Técnico" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-teal-400">
                  {stat.number}
                </div>
                <div className="mt-2 text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(93,193,185,0.15),transparent_50%)]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Listo para transformar tu infraestructura digital?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            Ponte en contacto con nuestro equipo y descubre cómo podemos ayudar a tu empresa a prosperar en la era digital.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
              <Button
                className="bg-teal-600 text-white hover:bg-teal-500"
                size="lg"
              >
                Solicita tu cotización
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-teal-900/50 bg-black/90 py-12">
      <div className="mt-6 text-center text-gray-400">
            <p>© 2025 FROMSOFTWARE. Todos los derechos reservados.</p>
          </div>
      </footer>
    </div>
  );
}
