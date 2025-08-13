export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-green-600 dark:text-green-400">X</span>
              <span className="text-black dark:text-white">PERTINO</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Precision engineering for secure and scalable systems. Trusted by global clients for critical software
              solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>Embedded Systems</li>
              <li>Blockchain & Crypto</li>
              <li>Security Engineering</li>
              <li>Architecture Reviews</li>
              <li>Technical Advisory</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <div>info@expertino.io</div>
              <div>Cairo, Egypt</div>
              <div>Available Worldwide</div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 dark:border-gray-700 mt-12 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 XPERTINO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
