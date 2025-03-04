import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Oberon",
      description:
        "App pomodoro, integrado com o spotify",
      image: "https://i.imgur.com/3fRDTQy.png",
      tags: ["TypeScript", "Electron", "React.JS", "CSS", "Babel"],
      demoUrl: "#",
      githubUrl: "https://github.com/caduzz/oberon",
    },
    {
      id: 2,
      title: "Bedrock Edit",
      description: "Um editor de texto web, desenvolvi esse projeto como um desafio de não usar libs",
      image: "https://i.imgur.com/XCdlacN.png",
      tags: ["JavaScript", "HTML", "CSS"],
      demoUrl: "#",
      githubUrl: "https://github.com/caduzz/bedrock_edit",
    },
    {
      id: 3,
      title: "Axiom",
      description: "Um site que desenvolvir para meu bot de `discord`",
      image: "https://i.imgur.com/c2EW63i.png",
      tags: ["React.JS", "JavaScript", "Styled Components"],
      demoUrl: "https://axiom-ct0hevn51-caduzz.vercel.app",
      githubUrl: "https://github.com/caduzz/axiom",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">Meus Projetos</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-1" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="gap-1" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

