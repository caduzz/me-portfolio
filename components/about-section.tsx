import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, GraduationCap, Briefcase } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">Sobre mim</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quem eu sou</h3>
            <p className="text-muted-foreground mb-4">
            Olá, sou Carlos Eduardo, tenho 21 anos e sou estudante de Ciência da Computação na FACAPE.
            Desde jovem, sempre fui fascinado por tecnologia e como ela pode transformar o mundo ao nosso redor.
            Foi essa curiosidade que me levou a seguir o caminho da programação.
            </p>
            <p className="text-muted-foreground mb-6">
            Ao longo dos últimos 2 anos, tive a oportunidade de aprofundar meus conhecimentos como desenvolvedor,
            tanto no front-end quanto no back-end, e me especializar em mobile.
            </p>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">Education</h4>
                    <p className="text-muted-foreground mt-2">
                      Estudante de Ciência da Computação
                      <br />
                      FACAPE, 2022
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">Experiência</h4>
                    <p className="text-muted-foreground mt-2">
                      Estagio de desenvolvedor fullstack e mobile
                      <br />
                      Softhub, 2024-Remoto
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">Experiência</h4>
                    <p className="text-muted-foreground mt-2">
                      Estagio de desenvolvedor fullstack
                      <br />
                      Plansanear, 2025-Presencial
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

