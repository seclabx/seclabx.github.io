import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ExpertiseSnapshot() {
  const expertise = {
    industries: ["Fintech", "Medtech", "Web3", "IoT", "Automotive", "Aerospace"],
    technologies: ["ARM Cortex", "BLE", "HSMs", "Secure Firmware", "RTOS", "Cryptographic Libraries"],
    blockchains: ["Ethereum", "Bitcoin", "Solana", "Cardano", "TON", "Polygon"],
    tooling: ["MetaMask", "Ledger SDK", "Infura", "QuickNode", "Hardhat", "Foundry"],
    standards: ["ERC20", "SPL", "X.509", "FDA Compliance", "ISO 27001", "Common Criteria"]
  }

  return (
    <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Expertise Snapshot</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our comprehensive technical expertise spans multiple industries, cutting-edge technologies, and regulatory standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-green-600 dark:text-green-400">Industries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {expertise.industries.map((item, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-green-600 dark:text-green-400">Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {expertise.technologies.map((item, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-green-600 dark:text-green-400">Blockchains</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {expertise.blockchains.map((item, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-green-600 dark:text-green-400">Tooling</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {expertise.tooling.map((item, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-green-600 dark:text-green-400">Standards</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {expertise.standards.map((item, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
