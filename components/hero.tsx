"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Precision Engineering for <span className="text-green-600 dark:text-green-400">Secure & Scalable</span>{" "}
            Systems
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
            Cairo-based consulting firm delivering expert solutions in Embedded Systems, Security, and Blockchain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-medium"
              onClick={() => (window.location.href = "mailto:seclabx.team@gmail.com?subject=Consultation Inquiry")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Speak to an Expert
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-medium border-gray-300 dark:border-gray-700 bg-transparent"
              onClick={() => document.getElementById("what-we-do")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
