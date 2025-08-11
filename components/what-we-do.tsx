import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Shield, Layers } from "lucide-react"

export function WhatWeDo() {
  const services = [
    {
      icon: <Cpu className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "Embedded Systems",
      description:
        "Firmware & secure communications for regulated devices with industry-leading reliability and performance.",
    },
    {
      icon: <Layers className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "Blockchain & Crypto",
      description:
        "Secure wallets, smart contract infrastructure, and seamless blockchain integrations for Web3 platforms.",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "Security Engineering",
      description:
        "Threat modeling, cryptographic architecture, and secure protocol implementation for critical systems.",
    },
  ]

  return (
    <section id="what-we-do" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Do</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We deliver precision-engineered solutions across three core verticals, ensuring security and scalability at
            every level.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
