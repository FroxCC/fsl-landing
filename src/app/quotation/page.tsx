"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { HomeIcon, MessageSquare, Send } from "lucide-react"
import { useState } from "react"
import { AnimatedBackground } from "@/components/animated-background"
import emailjs from "@emailjs/browser"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

export default function QuotationPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Campos incompletos",
        description: "Por favor, completa todos los campos del formulario.",
        variant: "destructive",
      })
      return
    }

    // Validar variables de entorno
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      console.error("Faltan variables de entorno en .env.local")
      toast({
        title: "Error de configuración",
        description: "Falta información del servidor. Por favor, contacta al administrador.",
        variant: "destructive",
      })
      return
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
        className: "bg-teal-700 text-white border-teal-500",
      })
      setFormData({ name: "", email: "", phone: "", message: "" }) // Limpiar formulario
    } catch (error) {
      console.error("Error enviando el mensaje:", error)
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <AnimatedBackground />

      {/* Content */}
      <div className="container relative mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
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
              Obtener una cotización
            </h1>
            <p className="mt-4 text-lg text-gray-400 text-center">
              Cuéntanos sobre tu proyecto y nos pondremos en contacto contigo en 24 horas.
            </p>
          </div>

          {/* Form Card */}
          <Card className="overflow-hidden border border-teal-900/50 bg-black/50 p-6 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  Nombre Completo
                </Label>
                <Input
                  id="name"
                  placeholder="Fernando Alonso"
                  className="border-teal-900/50 bg-black/50 text-white placeholder:text-gray-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="feralonso@ejemplo.com"
                  className="border-teal-900/50 bg-black/50 text-white placeholder:text-gray-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white">
                  Numero de Teléfono
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+54 9 00 0000-0000"
                  className="border-teal-900/50 bg-black/50 text-white placeholder:text-gray-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Detalles del proyecto.
                </Label>
                <Textarea
                  id="message"
                  placeholder="Cuentanos acerca de tu proyecto..."
                  className="min-h-[120px] border-teal-900/50 bg-black/50 text-white placeholder:text-gray-500"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:justify-between">
                <Button
                  type="submit"
                  className="group relative flex w-full items-center justify-center gap-2 bg-teal-600 text-white transition-all hover:bg-teal-500 sm:w-auto"
                  size="lg"
                >
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  Enviar mensaje
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex w-full items-center justify-center gap-2 border-teal-900/50 bg-green-500 text-black hover:bg-teal-950/50 sm:w-auto"
                  size="lg"
                  onClick={() => {
                    const phoneNumber = "541151261116" // Reemplaza con el número de WhatsApp
                    const message = encodeURIComponent(
                      "Hola vengo la web fromsoftwarelabs.com, quisiera solicitar una cotización.",
                    )
                    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
                  }}
                >
                  <MessageSquare className="h-4 w-4" />
                  Escríbenos a Whatsapp
                </Button>
              </div>
            </form>
          </Card>

          {/* Additional Info */}
          <div className="mt-8 text-center text-sm text-gray-400">
            Al enviar este formulario, usted acepta nuestras{" "}
            <a href="#" className="text-teal-400 hover:text-teal-300">
              condiciones de servicio
            </a>{" "}
            y{" "}
            <a href="#" className="text-teal-400 hover:text-teal-300">
              política de privacidad
            </a>
            .
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="pointer-events-none absolute left-1/4 top-1/4 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-1/4 top-3/4 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/20 blur-3xl" />
      </div>
    </div>
  )
}

