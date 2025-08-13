import { Check } from "lucide-react"

export function WhyXpertino() {
  const reasons = [
    "12+ years of industry experience in high-assurance systems",
    "Security-first engineering approach across all verticals",
    "Senior-only Cairo-based consulting team",
    "Proven success in fintech, medtech, and decentralised platforms",
    "Trusted by global clients for critical software systems",
  ]

  return (
    <section id="why-xpertino" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Why <span className="text-green-600 dark:text-green-400">X</span>
              <span className="text-black dark:text-white">PERTINO</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              We combine deep technical expertise with a security-first mindset, delivering solutions that meet the
              highest standards of reliability and performance.
            </p>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-gray-700 dark:text-gray-300">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 text-white">
              <div className="h-full flex flex-col justify-center">
                <div className="text-6xl font-bold mb-4">12+</div>
                <div className="text-xl mb-6">Years of Excellence</div>
                <div className="text-sm opacity-90 leading-relaxed">
                  Delivering mission-critical solutions for regulated industries worldwide, from our base in Cairo to
                  clients across the globe.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
