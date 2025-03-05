"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Smartphone, Monitor, Server } from "lucide-react"
import { useState } from "react"

export function ProjectsSection() {
  const [projectType, setProjectType] = useState("frontend")

  const projects = [
    {
      id: 1,
      title: "Oberon",
      description:
        "App pomodoro, integrado com o spotify",
      image: "/front1.png?height=400&width=600",
      tags: ["TypeScript", "Electron", "React.JS", "CSS", "Babel"],
      demoUrl: "#",
      githubUrl: "https://github.com/caduzz/oberon",
      projectType: "frontend"
    },
    {
      id: 2,
      title: "Bedrock Edit",
      description: "Um editor de texto web desenvolvido como um desafio pessoal, focado em evitar o uso de bibliotecas externas, garantindo um código mais leve e totalmente personalizado.",
      image: "/front3.png?height=400&width=600",
      tags: ["JavaScript", "HTML", "CSS"],
      demoUrl: "#",
      githubUrl: "https://github.com/caduzz/bedrock_edit",
      projectType: "frontend"
    },
    {
      id: 3,
      title: "Axiom",
      description: "Um site que desenvolvir para meu bot de `discord`",
      image: "/front2.png?height=400&width=600",
      tags: ["React.JS", "JavaScript", "Styled Components"],
      demoUrl: "https://axiom-ct0hevn51-caduzz.vercel.app",
      githubUrl: "https://github.com/caduzz/axiom",
      projectType: "frontend"
    },
    {
      id: 4,
      title: "Bot Dev",
      description: "Um bot de discord que desenvolvi para ajudar devs iniciantes com a ferramenta git",
      tags: ["JavaScript", "Discord.JS", "Node.JS"],
      demoUrl: "#",
      githubUrl: "https://github.com/caduzz/bot-dev",
      projectType: "backend"
    },
    {
      id: 5,
      title: "Auth Api",
      description: "Uma api de autenticação de usuario que acabou com funcionalidade de posts e upload de imagens",
      tags: ["Node.JS", "TypeScript", "Express", "Prisma", "Sqlite"],
      demoUrl: "#",
      githubUrl: "https://github.com/caduzz/auth-api-ts",
      projectType: "backend"
    },
    {
      id: 6,
      title: "Checkin",
      description: "Um sistema de checkin usado para validar a entrada e saida dos usuarios",
      tags: ["Node.JS", "TypeScript", "Express", "Prisma", "Sqlite"],
      demoUrl: "#",
      githubUrl: "https://github.com/caduzz/checkin-ts",
      projectType: "backend"
    },
    {
      id: 7,
      title: "Einfo",
      description: "Um app para um evento da faculdade",
      image: "/app2.png?height=400&width=600",
      tags: ["JavaScript", "Discord.JS", "Node.JS"],
      demoUrl: "#",
      githubUrl: "https://github.com/caduzz/bot-dev",
      projectType: "mobile"
    },
    {
      id: 8,
      title: "Appperimetro",
      description: "App usado para controle de irrigação",
      image: "/app1.png?height=400&width=600",
      tags: ["Node.JS", "TypeScript", "Express", "Prisma", "Sqlite"],
      demoUrl: "#",
      githubUrl: "https://github.com/caduzz/auth-api-ts",
      projectType: "mobile"
    },
    {
      id: 9,
      title: "Spotify clone",
      image: "/app3.png?height=400&width=600",
      description: "Um app clone do spotify",
      tags: ["Node.JS", "TypeScript", "Express", "Prisma", "Sqlite"],
      demoUrl: "#",
      githubUrl: "https://github.com/caduzz/checkin-ts",
      projectType: "mobile"
    },
  ]

  const filteredProjects = projects.filter((project) => {
    return project.projectType === projectType
  })

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">Meus Projetos</h2>

        <div className="flex justify-center mb-8 gap-4">
          <Button title="mobile?h" variant={projectType === "mobile" ? "default" : "outline"} onClick={() => setProjectType("mobile")}>
            <Smartphone className="h-4 w-4" />
          </Button>
          <Button title="frontend" variant={projectType === "frontend" ? "default" : "outline"} onClick={() => setProjectType("frontend")}>
            <Monitor className="h-4 w-4" />
          </Button>
          <Button title="backend" variant={projectType === "backend" ? "default" : "outline"} onClick={() => setProjectType("backend")}>
            <Server className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden flex flex-col h-full">
              {project.image && (
                <div className="relative h-48 w-full">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
              )}
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

