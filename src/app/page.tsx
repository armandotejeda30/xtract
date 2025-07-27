import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronRight, Star, CheckCircle, Zap, Clock, DollarSign, TrendingUp, Users, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold">Lunova</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-purple-400 transition-colors">Home</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Acerca de</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contacto</a>
            </nav>

              <a href="https://wa.me/5216871717189?text=Hola%20%F0%9F%91%8B%20me%20interesa%20saber%20m%C3%A1s%20sobre%20las%20p%C3%A1ginas%20web%20que%20ofrecen.%20%C2%BFPodr%C3%ADan%20darme%20informaci%C3%B3n%20sobre%20los%20planes%20y%20c%C3%B3mo%20funciona%20el%20proceso%3F%20Gracias. " target="_blank" rel="noopener noreferrer">
                <Button className="gradient-purple hover:opacity-90 transition-opacity">
                  Contactar Ahora
                </Button>
              </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 gradient-purple-glow"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Badge className="mb-16 bg-purple-500/20 text-purple-300 border-purple-500/30">
            <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs mr-2">New</span>
            Diseño Web y Desarrollo de Software
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-12 leading-tight">
            Diseño Web Profesional para
            <br />
            <span className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#9d174d] via-[#d946ef] to-[#f0abfc] bg-clip-text text-transparent">Negocios Modernos.</span>
          </h1>

          <p className="text-xl text-gray-400 mb-24 max-w-3xl mx-auto">
            Lunova proporciona soluciones de diseño web y desarrollo de software a negocios modernos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/5216871717189?text=Hola%20%F0%9F%91%8B%20me%20interesa%20saber%20m%C3%A1s%20sobre%20las%20p%C3%A1ginas%20web%20que%20ofrecen.%20%C2%BFPodr%C3%ADan%20darme%20informaci%C3%B3n%20sobre%20los%20planes%20y%20c%C3%B3mo%20funciona%20el%20proceso%3F%20Gracias. " target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gradient-purple hover:opacity-90">
                  Contactar Ahora
                </Button>
              </a>
              <a href="#services">
                <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                  Ver Servicios
                </Button>
              </a>
          </div>

          <div className="mt-16 flex flex-col items-center">
            <p className="text-gray-400 mb-6">Más de 50+ empresas confían en nosotros</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-400 mb-4">Nuestros Servicios</p>
            <h2 className="text-4xl font-bold mb-6">
              Soluciones de Diseño Web y Desarrollo de Software
              <br />
              para Negocios Modernos
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Diseñamos, desarrollamos e implementamos herramientas que te ayudan a ser más eficiente.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Workflow Automation */}
            <div className="lg:col-span-2">
              <Card className="bg-gray-900/50 border-gray-800 h-full">
                <CardHeader>
                  <Badge className="w-fit bg-gray-800 text-gray-300">Presencia Digital</Badge>
                  <CardTitle className="text-2xl">Creamos tu presencia en línea</CardTitle>
                  <CardDescription className="text-gray-400">
                    Te ayudamos a construir una presencia en línea sólida y profesional que refleje tu marca y tus valores.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-black/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-400">Todas las Tareas</span>
                      <span className="text-sm text-gray-400">Esperando aprobación</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded">
                        <div>
                          <p className="text-sm font-medium">Creamos tu sitio web</p>
                          <p className="text-xs text-gray-400">Vence el 2 de julio</p>
                        </div>
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded">
                        <div>
                          <p className="text-sm font-medium">Despliegue de Aplicaciones</p>
                          <p className="text-xs text-gray-400">Hace 2 días</p>
                        </div>
                        <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Badge className="bg-purple-500/20 text-purple-300">Desarrollo de Aplicaciones</Badge>
                    <Badge className="bg-purple-500/20 text-purple-300">100+ Diseños Web</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Assistant */}
            <div>
              <Card className="bg-gray-900/50 border-gray-800 h-full">
                <CardHeader>
                  <Badge className="w-fit bg-gray-800 text-gray-300">E-commerce</Badge>
                  <CardTitle>Desarrollo de E-commerce</CardTitle>
                  <CardDescription className="text-gray-400">
                    Desarrollamos tiendas en línea personalizadas que se adaptan a tus necesidades y objetivos.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-black/50 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-center mb-2">Mas ventas de tu tienda en línea</h3>
                    <p className="text-center text-xs text-gray-400">
                      Mejora tus ventas en línea con nuestra ayuda.
                    </p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Badge className="bg-purple-500/20 text-purple-300">Deportes</Badge>
                    <Badge className="bg-purple-500/20 text-purple-300">Ropa</Badge>
                    <Badge className="bg-purple-500/20 text-purple-300">Mucho más</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sales & Marketing */}
            <div>
              <Card className="bg-gray-900/50 border-gray-800 h-full">
                <CardHeader>
                  <Badge className="w-fit bg-gray-800 text-gray-300">Ventas y Marketing</Badge>
                  <CardTitle>Acelera el Crecimiento de Ventas</CardTitle>
                  <CardDescription className="text-gray-400">
                    Herramientas de IA para generación de leads, comunicación personalizada y creación automatizada de contenido.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-black/50 rounded-lg p-4 mb-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-purple-400" />
                        <span className="text-sm">Jack Daniel</span>
                        <Badge className="bg-green-500/20 text-green-300 text-xs">Verificado</Badge>
                      </div>
                      <p className="text-xs text-gray-400">Fundador</p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Badge className="bg-purple-500/20 text-purple-300">Leads</Badge>
                    <Badge className="bg-purple-500/20 text-purple-300">Contenido</Badge>
                    <Badge className="bg-purple-500/20 text-purple-300">Publicaciones sociales</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Custom Projects */}
            <div className="lg:col-span-2">
              <Card className="bg-gray-900/50 border-gray-800 h-full">
                <CardHeader>
                  <Badge className="w-fit bg-gray-800 text-gray-300">Proyectos Personalizados</Badge>
                  <CardTitle className="text-2xl">Construye Sistemas más Inteligentes</CardTitle>
                  <CardDescription className="text-gray-400">
                    Ya sea que estés comenzando desde cero o mejorando un sistema existente, ofrecemos consultoría
                    estratégica y desarrollamos proyectos personalizados alineados con tus objetivos únicos.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-black/50 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium">¡Hola David!</h4>
                      <span className="text-xs text-gray-400">Aquí está tu proyecto personalizado y calendario</span>
                    </div>
                    <div className="bg-gray-800/50 rounded p-3 mb-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Chatbot de Atención al Cliente</p>
                          <p className="text-xs text-gray-400">90% Completado</p>
                        </div>
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-xs">
                      {['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'].map((day) => (
                        <div key={day} className="text-center text-gray-400 py-1">{day}</div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Badge className="bg-purple-500/20 text-purple-300">Estrategia</Badge>
                    <Badge className="bg-purple-500/20 text-purple-300">IA Personalizada</Badge>
                    <Badge className="bg-purple-500/20 text-purple-300">Consultoría</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Proceso */}
      <section className="py-20 px-6" id="process">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-400 mb-4">Nuestro Proceso</p>
            <h2 className="text-4xl font-bold mb-6">
              Un Proceso Simple, Inteligente y Escalable
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Diseñamos, desarrollamos e implementamos herramientas que te ayudan a trabajar de forma más inteligente.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "Paso 1",
                title: "Análisis Inteligente",
                description: "Evaluamos tus necesidades e identificamos soluciones para optimizar flujos de trabajo y mejorar la eficiencia.",
                features: ["Chequeo de sistema", "Chequeo de procesos", "Chequeo de velocidad", "Trabajo manual", "Tarea repetitiva"]
              },
              {
                step: "Paso 2",
                title: "Desarrollo",
                description: "Nuestro equipo construye sistemas adaptados a tus procesos de negocio.",
                features: ["Desarrollo de código", "Pruebas", "Integración"]
              },
              {
                step: "Paso 3",
                title: "Integración Sin Fricciones",
                description: "Integramos soluciones en tu infraestructura existente con mínima interrupción.",
                features: ["Nuestra solución", "Tu stack", "Integración", "Pruebas"]
              },
              {
                step: "Paso 4",
                title: "Optimización Continua",
                description: "Refinamos el rendimiento, analizamos resultados y mejoramos la automatización para un crecimiento a largo plazo.",
                features: ["Rendimiento", "Analítica", "Actualizaciones", "Crecimiento"]
              }
            ].map((item, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <Badge className="w-fit bg-gray-800 text-gray-300 mb-2">{item.step}</Badge>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-black/50 rounded-lg p-4">
                    <div className="space-y-2">
                      {item.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-purple-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Casos de Éxito */}
      <section className="py-20 px-6" id="case-studies">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-400 mb-4">Casos de Éxito</p>
            <h2 className="text-4xl font-bold mb-6">
              Descubre cómo la presencia en línea
              <br />
              Transforma Negocios
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Descubre cómo la presencia en línea optimiza operaciones, impulsa y acelera el crecimiento.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Caso TrailForge */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 bg-gray-700 rounded-lg flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1495573020741-8a2f372bbec3?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-purple-300">
                      "Una Landing Page profesional aumentó los contactos en un 220% para Dental Nova"
                    </h3>
                    <p className="text-gray-400 text-sm">
                     Dental Nova, una clínica dental en crecimiento, tenía solo presencia en redes sociales. Creamos una Landing Page clara, moderna y enfocada en agendar citas, integrada con WhatsApp y Google Maps.
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-purple-300 mb-3">Impacto :</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm">220% más solicitudes de cita en 3 semanas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-green-400" />
                      <span className="text-sm">3 veces más tráfico orgánico desde búsquedas locales</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm">Reducción del 100% en mensajes mal redactados o incompletos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-400" />
                      <span className="text-sm">Posicionamiento en Google Maps gracias a SEO local básico</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Caso MedixChain */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 bg-gray-700 rounded-lg flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-purple-300">
                      "Una tienda online aumentó las ventas mensuales en un 180% para Luma Cosmética"
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Luma vendía por Instagram pero perdía ventas por falta de organización. Le desarrollamos un e-commerce ligero con pasarela de pago y catálogo autogestionable.
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-purple-300 mb-3">Impacto :</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm">180% más ventas el primer mes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm">60% menos mensajes repetidos en redes sociales</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-400" />
                      <span className="text-sm">30% entregas más rápidas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-green-400" />
                      <span className="text-sm">60+ horas ahorradas</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Caso ScaleByte */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 bg-gray-700 rounded-lg flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-purple-300">
                      "Un menú digital redujo el tiempo de atención en un 50% y mejoró la imagen de marca para Las Brasas"
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Las Brasas, restaurante de parrilladas, solo usaba menús físicos. Desarrollamos una página web tipo app con menú visual, ingredientes, precios y botón directo a WhatsApp para pedidos.
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-purple-300 mb-3">Impacto :</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm">50% menos tiempo explicando el menú en mesa</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-400" />
                      <span className="text-sm">70% más pedidos a domicilio vía WhatsApp</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm">Mejora notable en comentarios de clientes sobre imagen profesional</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-green-400" />
                      <span className="text-sm">Compatible con código QR en todas las mesas</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FinSolve Case Study */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 bg-gray-700 rounded-lg flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-purple-300">
                      "Un sitio web profesional aumentó la credibilidad y generó 5 nuevos contratos en el primer mes para Impulso Consulting"
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Impulso Consulting, una firma de asesoría empresarial, no contaba con presencia digital profesional y perdía oportunidades por falta de confianza. Diseñamos un sitio web corporativo moderno con testimonios, portafolio y formulario de contacto personalizado.
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-purple-300 mb-3">Impacto :</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-green-400" />
                      <span className="text-sm">Fortalecimiento de marca y percepción profesional</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-400" />
                      <span className="text-sm">+5 contratos cerrados en el primer mes gracias al sitio web</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-400" />
                      <span className="text-sm">120% más solicitudes desde LinkedIn y Google</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm">Reducción del ciclo de ventas en un 30%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-400 mb-4">Beneficios</p>
            <h2 className="text-4xl font-bold mb-6">
              Los Beneficios Clave de la IA
              <br />
              para el Crecimiento de tu Negocio
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Descubre cómo la automatización con IA mejora la eficiencia, reduce costos e impulsa el
              crecimiento empresarial con procesos más inteligentes y rápidos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Mayor Productividad",
                description: "Obtén información procesable con análisis impulsados por IA para mejorar la toma de decisiones y la estrategia."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Mejor Experiencia del Cliente",
                description: "Las interacciones personalizadas con IA mejoran los tiempos de respuesta, el compromiso del cliente y la satisfacción general."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Disponibilidad 24/7",
                description: "Los sistemas impulsados por IA operan las 24 horas, garantizando soporte y ejecución sin interrupciones."
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Reducción de Costos",
                description: "La automatización con IA minimiza el trabajo manual, reduce costos operativos y optimiza la asignación de recursos."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Análisis Basado en Datos",
                description: "Aprovecha la IA para analizar grandes conjuntos de datos, identificar tendencias y tomar decisiones comerciales más inteligentes."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Escalabilidad y Crecimiento",
                description: "La IA se adapta a las necesidades de tu negocio, permitiéndote escalar eficientemente sin aumentar la carga de trabajo."
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors">
                <CardContent className="p-6">
                  <div className="text-purple-400 mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6" id="pricing">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-400 mb-4">Precios</p>
            <h2 className="text-4xl font-bold mb-6">
              El Mejor Diseño Web, al Precio Correcto
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Elige un plan que se ajuste a las necesidades de tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader className="text-center">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5" />
                  <span className="font-semibold">Inicial</span>
                </div>
                <div className="text-3xl font-bold">
                  $3499<span className="text-lg text-gray-400">/mxn</span>
                </div>
                <p className="text-gray-400">Perfecto para pequeñas empresas que comienzan con su presencia en línea.</p>
              </CardHeader>
              <CardContent>
                  <a href="https://wa.me/5216871717189?text=Hola%20%F0%9F%91%8B%20me%20interesa%20el%20Plan%20B%C3%A1sico%20de%20p%C3%A1ginas%20web.%20%C2%BFPodr%C3%ADas%20darme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20lo%20que%20incluye%20y%20c%C3%B3mo%20contratarlo%3F " target="_blank" rel="noopener noreferrer">
                    <Button className="w-full mb-6 border border-gray-600 bg-transparent hover:bg-gray-800">
                      Elegir este plan
                    </Button>
                  </a>
                <div className="space-y-3">
                  <p className="font-medium mb-3">Qué incluye:</p>
                  {[
                    "Diseño de una Landing Page de 1 sección",
                    "Estilo moderno y responsive (PC y móvil)",
                    "Botón de WhatsApp o formulario de contacto",
                    "Integración con redes sociales",
                    "Entrega en 7-10 días hábiles"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="bg-gray-900/50 border-purple-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-500 text-white">Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-purple-400" />
                  <span className="font-semibold">Profesional</span>
                </div>
                <div className="text-3xl font-bold">
                  $4999<span className="text-lg text-gray-400">/mxn</span>
                </div>
                <p className="text-gray-400">Para negocios que quieren destacar con una web más robusta, visual y adaptable.</p>
              </CardHeader>
              <CardContent>
                  <a href="https://wa.me/5216871717189?text=Hola%20%F0%9F%91%8B%20estoy%20interesado%20en%20el%20Plan%20Pro%20para%20mi%20p%C3%A1gina%20web.%20%C2%BFPodr%C3%ADas%20contarme%20m%C3%A1s%20sobre%20lo%20que%20incluye%20y%20los%20siguientes%20pasos%3F" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full mb-6 gradient-purple hover:opacity-90">
                      Elegir este plan
                    </Button>
                  </a>
                <div className="space-y-3">
                  <p className="font-medium mb-3">Qué incluye:</p>
                  {[
                    "Diseño de sitio web de hasta 3 secciones",
                    "Diseño personalizado adaptado a tu marca",
                    "Formulario de contacto y botón a WhatsApp",
                    "Optimización SEO básica + rendimiento móvil",
                    "Entrega en 7-10 días hábiles"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader className="text-center">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-5 h-5" />
                  <span className="font-semibold">Empresarial</span>
                </div>
                <div className="text-3xl font-bold">Personalizado</div>
                <p className="text-gray-400">Diseñado a la medida para marcas que buscan destacar y escalar digitalmente.</p>
              </CardHeader>
              <CardContent>
                  <a href="https://wa.me/5216871717189?text=Hola%20%F0%9F%91%8B%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20el%20Plan%20Custom%20para%20una%20p%C3%A1gina%20web%20a%20medida.%20%C2%BFPodemos%20hablar%20de%20los%20detalles%20y%20precios%3F " target="_blank" rel="noopener noreferrer">
                  <Button className="w-full mb-6 border border-gray-600 bg-transparent hover:bg-gray-800">
                    Elegir este plan
                  </Button>
                  </a>
                <div className="space-y-3">
                  <p className="font-medium mb-3">Qué incluye:</p>
                  {[
                    "Sitio web 100% personalizado",
                    "Diseño visual avanzado",
                    "Optimización SEO inicial para posicionamiento local",
                    "Capacitación 1 a 1 o por videollamada para gestionar el sitio",
                    "Integraciones IA"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-violet-600/10 rounded-2xl p-12 border border-purple-500/20">
            <h2 className="text-4xl font-bold mb-6">
              Impulsa tu Negocio con una
              <br />
              Presencia Web Profesional
            </h2>
            <p className="text-gray-400 mb-8">Agenda una llamada hoy y comienza a destacar en línea</p>
              <a href="http://wa.me/5216871717189?text=Hola%20%F0%9F%91%8B%20me%20interesa%20saber%20m%C3%A1s%20sobre%20las%20p%C3%A1ginas%20web%20que%20ofrecen.%20%C2%BFPodr%C3%ADan%20darme%20informaci%C3%B3n%20sobre%20los%20planes%20y%20c%C3%B3mo%20funciona%20el%20proceso%3F%20Gracias. " target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gradient-purple hover:opacity-90">
                  Contactar Ahora
                </Button>
              </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">X</span>
                </div>
                <span className="text-xl font-bold">Lunova</span>
              </div>
              <p className="text-gray-400 mb-6">
                Impulsa tu Negocio con una Presencia Web Profesional.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">Process</a></li>
                <li><a href="#case-studies" className="hover:text-white transition-colors">Case studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Benefits</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Pages</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">404</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Socials</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a target="_blank" href="https://instagram.com/lunova_mx" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a target="_blank" href="https://www.facebook.com/profile.php?id=61577931126970" className="hover:text-white transition-colors">Facebook</a></li>

              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Visioned and Crafted by Lunova</span>
            </div>
            <span className="text-sm text-gray-400">© All right reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
