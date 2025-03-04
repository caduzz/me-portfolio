import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Layout, Palette, Server } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      id: 1,
      title: "Frontend",
      icon: <Layout className="h-6 w-6 text-primary" />,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Backend",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL"],
    },
    {
      id: 3,
      title: "Database",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Prisma"],
    },
    {
      id: 5,
      title: "Other Skills",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: ["Git", "GitHub", "Docker", "CI/CD", "Jest", "Cypress", "Webpack"],
    },
    {
      id: 6,
      title: "Languages",
      icon: <Globe className="h-6 w-6 text-primary" />,
      skills: ["Ingles (Basico)", "Espanhol (Intermediate)", "Portugues (Fluente)"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">Minhas Habilidades</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.id}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-medium">{category.title}</h3>
                </div>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

