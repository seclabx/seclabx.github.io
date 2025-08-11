import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhatWeDo } from "@/components/what-we-do"
import { WhySecLabX } from "@/components/why-seclabx"
import { ExpertiseSnapshot } from "@/components/expertise-snapshot"
import { EngagementModel } from "@/components/engagement-model"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <WhySecLabX />
        <ExpertiseSnapshot />
        <EngagementModel />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
