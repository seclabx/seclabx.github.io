import { Card, CardContent } from '@/components/ui/card'
import { Target, Search, Users } from 'lucide-react'

export function EngagementModel() {
  const models = [
    {
      icon: <Target className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "Project-Based Delivery",
      description: "Clear milestones, defined deliverables, and transparent progress tracking for focused outcomes."
    },
    {
      icon: <Search className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "Architecture Reviews & Audits",
      description: "Comprehensive security assessments and architectural evaluations for existing systems."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "Long-Term Technical Advisory",
      description: "Ongoing strategic guidance and technical leadership for complex, evolving projects."
    }
  ]

  return (
    <section id="engagement" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Engagement Model</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Flexible engagement options designed to meet your specific needs, from focused projects to ongoing partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  {model.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {model.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
