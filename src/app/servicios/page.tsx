"use client"

import { AnimatedBackground } from "@/components/animated-background"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Code2, HomeIcon, HeadphonesIcon, Key, Laptop, Globe, Shield, Database, Cloud, Smartphone } from "lucide-react"
import Link from "next/link"


export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black">
      <AnimatedBackground />

      {/* Content */}
      <div className="container relative mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <Link
                href="/"
                className="flex items-center gap-2 rounded-full bg-blue-900/30 px-4 py-2 text-white hover:bg-blue-800/50 transition-colors"
              >
                <HomeIcon className="h-4 w-4" />
                <span>Volver al inicio</span>
              </Link>
            </div>
            <h1 className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl text-center">
              Nuestros Servicios
            </h1>
            <p className="mt-4 text-lg text-gray-400 text-center">Soluciones de Software de Próxima Generación</p>
          </div>

          {/* Services Tabs */}
          <Tabs defaultValue="software" className="space-y-8">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 bg-transparent h-auto p-0">
              <TabsTrigger
                value="software"
                className="data-[state=active]:bg-blue-900/50 data-[state=active]:text-white bg-black/50 border border-blue-900/50 backdrop-blur-sm"
              >
                Desarrollo de Software
              </TabsTrigger>
              <TabsTrigger
                value="support"
                className="data-[state=active]:bg-blue-900/50 data-[state=active]:text-white bg-black/50 border border-blue-900/50 backdrop-blur-sm"
              >
                Soporte Técnico
              </TabsTrigger>
              <TabsTrigger
                value="licensing"
                className="data-[state=active]:bg-blue-900/50 data-[state=active]:text-white bg-black/50 border border-blue-900/50 backdrop-blur-sm"
              >
                Licenciamiento
              </TabsTrigger>
            </TabsList>

            <TabsContent value="software" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="border-blue-900/50 bg-black/50 p-6 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-blue-500/10 p-3">
                      <Laptop className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Desarrollo Web</h3>
                      <p className="text-gray-400">
                        Creamos aplicaciones web modernas y responsivas utilizando las últimas tecnologías. Desde sitios
                        corporativos hasta aplicaciones empresariales complejas.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="border-blue-900/50 bg-black/50 p-6 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-blue-500/10 p-3">
                      <Smartphone className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Desarrollo Móvil</h3>
                      <p className="text-gray-400">
                        Aplicaciones móviles nativas y multiplataforma para iOS y Android, diseñadas para ofrecer la
                        mejor experiencia de usuario.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="border-blue-900/50 bg-black/50 p-6 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-blue-500/10 p-3">
                      <Cloud className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Soluciones Cloud</h3>
                      <p className="text-gray-400">
                        Implementación y gestión de infraestructura en la nube, asegurando escalabilidad y alta
                        disponibilidad.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="border-blue-900/50 bg-black/50 p-6 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-blue-500/10 p-3">
                      <Database className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Bases de Datos</h3>
                      <p className="text-gray-400">
                        Diseño e implementación de bases de datos optimizadas, asegurando la integridad y seguridad de
                        sus datos.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="support" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="border-blue-900/50 bg-black/50 p-6 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-blue-500/10 p-3">
                      <HeadphonesIcon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Soporte 24/7</h3>
                      <p className="text-gray-400">
                        Asistencia técnica disponible las 24 horas, los 7 días de la semana, para resolver cualquier
                        incidencia de manera inmediata.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="border-blue-900/50 bg-black/50 p-6 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-blue-500/10 p-3">
                      <Globe className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Soporte Remoto</h3>
                      <p className="text-gray-400">
                        Asistencia técnica remota para resolver problemas de manera rápida y eficiente, sin necesidad de
                        desplazamientos.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="border-blue-900/50 bg-black/50 p-6 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-blue-500/10 p-3">
                      <Shield className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Mantenimiento Preventivo</h3>
                      <p className="text-gray-400">
                        Servicios de mantenimiento preventivo para asegurar el óptimo funcionamiento de sus sistemas y
                        prevenir posibles problemas.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="licensing" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="border-blue-900/50 bg-black/50 p-6 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-blue-500/10 p-3">
                      <Key className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Gestión de Licencias</h3>
                      <p className="text-gray-400">
                        Administración integral de licencias de software empresarial, asegurando el cumplimiento
                        normativo y la optimización de costos.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="border-blue-900/50 bg-black/50 p-6 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-blue-500/10 p-3">
                      <Code2 className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Software Personalizado</h3>
                      <p className="text-gray-400">
                        Licenciamiento de software desarrollado a medida para su empresa, con términos flexibles
                        adaptados a sus necesidades.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

                    {/* Pricing Section */}
                    <section className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Planes y Precios</h2>
              <p className="mt-4 text-lg text-gray-400">
                Soluciones flexibles adaptadas a las necesidades de tu empresa
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Basic Plan */}
              <Card className="relative overflow-hidden border border-blue-900/50 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(0,100,255,0.15)]">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Plan Básico</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">$999</span>
                    <span className="text-gray-400"> /mes</span>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Ideal para pequeñas empresas y startups que buscan establecer su presencia digital.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Desarrollo web básico",
                      "5 horas de soporte mensual",
                      "1 licencia de software",
                      "Actualizaciones trimestrales",
                      "Respaldo semanal",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="rounded-full bg-blue-500/20 p-1">
                          <svg className="h-3 w-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-500">Seleccionar Plan</Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              </Card>

              {/* Professional Plan */}
              <Card className="relative overflow-hidden border border-blue-500/50 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,100,255,0.3)] scale-105 z-10">
                <div className="absolute top-0 left-0 right-0 bg-blue-600 py-1.5 text-center text-sm font-medium text-white">
                  Recomendado
                </div>
                <div className="p-6 pt-10">
                  <h3 className="text-xl font-semibold text-white mb-2">Plan Profesional</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">$2,499</span>
                    <span className="text-gray-400"> /mes</span>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Perfecto para empresas en crecimiento que necesitan soluciones más completas.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Desarrollo web y móvil",
                      "20 horas de soporte mensual",
                      "5 licencias de software",
                      "Actualizaciones mensuales",
                      "Respaldo diario",
                      "Análisis de rendimiento",
                      "Soporte prioritario",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="rounded-full bg-blue-500/20 p-1">
                          <svg className="h-3 w-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-500">Seleccionar Plan</Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              </Card>

              {/* Enterprise Plan */}
              <Card className="relative overflow-hidden border border-blue-900/50 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(0,100,255,0.15)]">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Plan Empresarial</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">$4,999</span>
                    <span className="text-gray-400"> /mes</span>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Solución completa para grandes empresas con necesidades avanzadas.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Desarrollo personalizado",
                      "Soporte ilimitado 24/7",
                      "Licencias ilimitadas",
                      "Actualizaciones semanales",
                      "Respaldo en tiempo real",
                      "Análisis avanzado de datos",
                      "Soporte VIP",
                      "Consultoría estratégica",
                      "Infraestructura dedicada",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="rounded-full bg-blue-500/20 p-1">
                          <svg className="h-3 w-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-500">Seleccionar Plan</Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-400">
                ¿Necesitas una solución personalizada?{" "}
                <Link href="/quotation" className="text-blue-400 hover:text-blue-300">
                  Contáctanos
                </Link>{" "}
                para un plan a medida.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">¿Listo para transformar tu negocio?</h2>
            <p className="text-gray-400 mb-8">Contáctanos hoy mismo para discutir cómo podemos ayudarte.</p>
            <Link href="/quotation">
              <Button className="bg-blue-600 text-white hover:bg-blue-500" size="lg">
                Solicitar Cotización
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="pointer-events-none absolute left-1/4 top-1/4 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-1/4 top-3/4 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      </div>
    </div>
  )
}

