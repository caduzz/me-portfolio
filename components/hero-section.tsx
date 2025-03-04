import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/50">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Ola, Sou <span className="text-primary">Carlos Eduardo</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">Desenvolvedor FullStack e Mobile</p>
          <p className="text-muted-foreground max-w-md">
            Estudante de Ciência da Computação e desenvolvedor fullstack com foco em backend.
            Trabalho para transformar ideias em soluções digitais robustas e funcionais.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">Ver Projetos</a>
            </Button>
          </div>
          <div className="flex gap-4 pt-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/caduzz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/cadu-dev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:eu.carlos.dev@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
            <Image src="/eu3.jpg" alt="Profile" fill className="object-cover object-center" priority />
          </div>
        </div>
      </div>
    </section>
  )
}

