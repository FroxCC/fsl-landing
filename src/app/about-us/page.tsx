"use client"

import { AnimatedBackground } from "@/components/animated-background"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { HomeIcon, Users, Package, Code, Lightbulb, Target, Rocket } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-black">
      <AnimatedBackground />

      {/* Content */}
      <div className="container relative mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <Link
                href="/"
                className="flex items-center gap-2 rounded-full bg-teal-900/30 px-4 py-2 text-white hover:bg-teal-800/50 transition-colors"
              >
                <HomeIcon className="h-4 w-4" />
                <span>Volver al inicio</span>
              </Link>
            </div>
            <h1 className="bg-gradient-to-r from-white to-teal-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl text-center">
              Acerca de Nosotros
            </h1>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Company Overview */}
            <Card className="overflow-hidden border border-teal-900/50 bg-black/50 p-8 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gray-400 to-gray-200 flex items-center justify-center">
                      {/* <Users className="h-24 w-24 text-white" /> */}
                      <Image src={"/logo-final.png"} alt="logo-fslabs" height={200} width={200}/>
                    </div>
                    <div className="absolute inset-0 rounded-full bg-teal-500/20 blur-xl -z-10"></div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    En <span className="text-teal-400 font-semibold">Fromsoftware Labs</span>, somos una empresa
                    especializada en servicios de sistemas e informática, operando de manera completamente virtual para
                    brindar soluciones eficientes y accesibles a nuestros clientes.
                  </p>
                </div>
              </div>
            </Card>

            {/* Services Highlight */}
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-teal-900/50 bg-black/50 p-6 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 inline-flex rounded-full bg-teal-500/10 p-3">
                    <Package className="h-8 w-8 text-teal-400" />
                  </div>
                  <h3 className="mb-4 text-xl font-medium text-teal-400">Soluciones Paquetizadas</h3>
                  <p className="text-gray-400">
                    Ofrecemos paquetes de sitios web prediseñados que cubren necesidades generales, permitiendo a las
                    empresas y emprendedores obtener una presencia digital rápida y efectiva.
                  </p>
                </div>
              </Card>

              <Card className="border-teal-900/50 bg-black/50 p-6 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 inline-flex rounded-full bg-teal-500/10 p-3">
                    <Code className="h-8 w-8 text-teal-400" />
                  </div>
                  <h3 className="mb-4 text-xl font-medium text-teal-400">Desarrollo a Medida</h3>
                  <p className="text-gray-400">
                    Para quienes requieren un enfoque más específico, contamos con un plan de desarrollo a medida, donde
                    realizamos un análisis detallado de los requerimientos y diseñamos soluciones adaptadas a las
                    necesidades particulares de cada cliente.
                  </p>
                </div>
              </Card>
            </div>

            {/* Mission & Vision */}
            <Card className="border-teal-900/50 bg-black/50 p-8 backdrop-blur-sm">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white">Nuestra Misión y Visión</h2>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 inline-flex rounded-full bg-teal-500/10 p-3">
                    <Target className="h-6 w-6 text-teal-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium text-white">Misión</h3>
                  <p className="text-gray-400">
                    Nuestro objetivo es ofrecer tecnología de calidad con procesos optimizados, garantizando innovación
                    y eficiencia en cada proyecto.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 inline-flex rounded-full bg-teal-500/10 p-3">
                    <Rocket className="h-6 w-6 text-teal-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium text-white">Visión</h3>
                  <p className="text-gray-400">
                    Ser reconocidos como líderes en soluciones tecnológicas innovadoras, transformando la manera en que
                    las empresas interactúan con la tecnología.
                  </p>
                </div>
              </div>
            </Card>

            {/* Values */}
            <Card className="border-teal-900/50 bg-black/50 p-8 backdrop-blur-sm">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white">Nuestros Valores</h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: <Lightbulb className="h-6 w-6 text-teal-400" />,
                    title: "Innovación",
                    description: "Buscamos constantemente nuevas formas de mejorar y evolucionar nuestras soluciones.",
                  },
                  {
                    icon: <Users className="h-6 w-6 text-teal-400" />,
                    title: "Colaboración",
                    description: "Trabajamos estrechamente con nuestros clientes para entender sus necesidades.",
                  },
                  {
                    icon: <Target className="h-6 w-6 text-teal-400" />,
                    title: "Excelencia",
                    description: "Nos comprometemos a ofrecer productos y servicios de la más alta calidad.",
                  },
                ].map((value, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4">
                    <div className="mb-4 inline-flex rounded-full bg-teal-500/10 p-3">{value.icon}</div>
                    <h3 className="mb-2 text-lg font-medium text-white">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Why Choose Us */}
            <Card className="border-teal-900/50 bg-black/50 p-8 backdrop-blur-sm">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white">¿Por qué elegirnos?</h2>
              </div>
              <div className="space-y-4">
                {[
                  "Operamos de manera 100% virtual, lo que nos permite ofrecer servicios más accesibles y eficientes.",
                  "Nuestro equipo está formado por profesionales con amplia experiencia en el sector tecnológico.",
                  "Ofrecemos soluciones escalables que crecen con tu negocio.",
                  "Garantizamos soporte técnico continuo para todos nuestros productos y servicios.",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-teal-500/20 p-1 flex-shrink-0">
                      <svg className="h-3 w-3 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-300">{point}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">¿Listo para trabajar con nosotros?</h2>
              <p className="text-gray-400 mb-8">
                Contáctanos hoy mismo para discutir cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Link href="wa.link/i2p8dh"> */}
                  <Button className="w-full sm:w-auto bg-teal-600 text-white hover:bg-teal-500" size="lg" onClick={()=>{
                    window.open(
                      `https://wa.link/i2p8dh`,
                      "_blank"
                    );
                  }}>
                    Contactate con un asistente.
                  </Button>
                <Link href="/quotation">
                  <Button className="w-full sm:w-auto" variant="outline" size="lg">
                    Solicitar Cotización
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="pointer-events-none absolute left-1/4 top-1/4 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-1/4 top-3/4 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/20 blur-3xl" />
      </div>
    </div>
  )
}

