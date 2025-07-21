import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronRight, Star, CheckCircle, Zap, Clock, DollarSign, TrendingUp, Users, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">X</span>
              </div>
              <span className="text-xl font-bold">XTRACT</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-purple-400 transition-colors">Home</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">About</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Blog</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
            </nav>

            <Button className="gradient-purple hover:opacity-90 transition-opacity">
              Book a call
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 gradient-purple-glow"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
            <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs mr-2">New</span>
            Automated Lead Generation
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Intelligent Automation for Modern
            <br />
            <span className="gradient-purple bg-clip-text text-transparent">Businesses.</span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Xtract brings AI automation to your fingertips & streamline tasks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-purple hover:opacity-90">
              Get in touch
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
              View services
            </Button>
          </div>

          <div className="mt-16 flex flex-col items-center">
            <p className="text-gray-400 mb-6">Over 50+ business trust us</p>
            <div className="flex items-center space-x-8 opacity-50">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-600 rounded"></div>
                <span className="text-gray-500">Logoipsum</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-600 rounded"></div>
                <span className="text-gray-500">Logoipsum</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-600 rounded"></div>
                <span className="text-gray-500">Logoipsum</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-400 mb-4">Our Services</p>
            <h2 className="text-4xl font-bold mb-6">
              AI Solutions That Take Your Business to
              <br />
              the Next Level
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              We design, develop, and implement automation tools that help you work smarter, not harder
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Workflow Automation */}
            <div className="lg:col-span-2">
              <Card className="bg-gray-900/50 border-gray-800 h-full">
                <CardHeader>
                  <Badge className="w-fit bg-gray-800 text-gray-300">Workflow Automation</Badge>
                  <CardTitle className="text-2xl">Automate repetitive tasks</CardTitle>
                  <CardDescription className="text-gray-400">
                    We help you streamline internal operations by automating manual workflows like data entry,
                    reporting, and approval chains saving time and cutting down errors.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-black/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-400">All Tasks</span>
                      <span className="text-sm text-gray-400">Waiting for approval</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded">
                        <div>
                          <p className="text-sm font-medium">Payroll management</p>
                          <p className="text-xs text-gray-400">Due on 2nd july</p>
                        </div>
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded">
                        <div>
                          <p className="text-sm font-medium">Employee Tracking</p>
                          <p className="text-xs text-gray-400">2 days ago</p>
                        </div>
                        <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Badge className="bg-purple-500/20 text-purple-300">Internal Task Bots</Badge>
                    <Badge className="bg-purple-500/20 text-purple-300">100+ Automations</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Assistant */}
            <div>
              <Card className="bg-gray-900/50 border-gray-800 h-full">
                <CardHeader>
                  <Badge className="w-fit bg-gray-800 text-gray-300">AI Assistant</Badge>
                  <CardTitle>Delegate Daily Tasks</CardTitle>
                  <CardDescription className="text-gray-400">
                    From managing calendars to drafting emails and summarizing meetings, our AI assistants work around the clock.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-black/50 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-center mb-2">What can I help with?</h3>
                    <p className="text-center text-xs text-gray-400">
                      Weather you want help in customer handling or make changes in your system just give me command
                    </p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Badge className="bg-purple-500/20 text-purple-300">Summaries</Badge>
                    <Badge className="bg-purple-500/20 text-purple-300">Scheduling</Badge>
                    <Badge className="bg-purple-500/20 text-purple-300">Many more</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sales & Marketing */}
            <div>
              <Card className="bg-gray-900/50 border-gray-800 h-full">
                <CardHeader>
                  <Badge className="w-fit bg-gray-800 text-gray-300">Sales & Marketing</Badge>
                  <CardTitle>Accelerate Sales Growth</CardTitle>
                  <CardDescription className="text-gray-400">
                    AI tools for lead generation, personalized outreach, and automated content creation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-black/50 rounded-lg p-4 mb-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-purple-400" />
                        <span className="text-sm">Jack Daniel</span>
                        <Badge className="bg-green-500/20 text-green-300 text-xs">Verified</Badge>
                      </div>
                      <p className="text-xs text-gray-400">Founder</p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Badge className="bg-purple-500/20 text-purple-300">Leads</Badge>
                    <Badge className="bg-purple-500/20 text-purple-300">Content</Badge>
                    <Badge className="bg-purple-500/20 text-purple-300">Social post</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Custom Projects */}
            <div className="lg:col-span-2">
              <Card className="bg-gray-900/50 border-gray-800 h-full">
                <CardHeader>
                  <Badge className="w-fit bg-gray-800 text-gray-300">Custom Projects</Badge>
                  <CardTitle className="text-2xl">Build Smarter Systems</CardTitle>
                  <CardDescription className="text-gray-400">
                    Whether you're starting from scratch or enhancing an existing system, we offer strategic
                    consulting and develop custom AI projects aligned with your unique goals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-black/50 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium">Hey David!</h4>
                      <span className="text-xs text-gray-400">Here is your Custom project & schedule</span>
                    </div>
                    <div className="bg-gray-800/50 rounded p-3 mb-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Customer Support Chatbot</p>
                          <p className="text-xs text-gray-400">90% Finished</p>
                        </div>
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-xs">
                      {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
                        <div key={day} className="text-center text-gray-400 py-1">{day}</div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Badge className="bg-purple-500/20 text-purple-300">Strategy</Badge>
                    <Badge className="bg-purple-500/20 text-purple-300">Custom AI</Badge>
                    <Badge className="bg-purple-500/20 text-purple-300">Consulting</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6" id="process">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-400 mb-4">Our Process</p>
            <h2 className="text-4xl font-bold mb-6">
              Our Simple, Smart, and Scalable Process
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              We design, develop, and implement automation tools that help you work smarter, not harder
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "Step 1",
                title: "Smart Analyzing",
                description: "We assess your needs and identify AI solutions to streamline workflows and improve efficiency.",
                features: ["System check", "Process check", "Speed check", "Manual work", "Repetitive task"]
              },
              {
                step: "Step 2",
                title: "AI Development",
                description: "Our team builds intelligent automation systems tailored to your business processes.",
                features: ["Code Development", "AI Training", "Testing", "Integration"]
              },
              {
                step: "Step 3",
                title: "Seamless Integration",
                description: "We smoothly integrate AI solutions into your existing infrastructure with minimal disruption.",
                features: ["Our solution", "Your stack", "Integration", "Testing"]
              },
              {
                step: "Step 4",
                title: "Continuous Optimization",
                description: "We refine performance, analyze insights, and enhance automation for long-term growth.",
                features: ["Performance", "Analytics", "Updates", "Growth"]
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

      {/* Case Studies Section */}
      <section className="py-20 px-6" id="case-studies">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-400 mb-4">Case Studies</p>
            <h2 className="text-4xl font-bold mb-6">
              See How Smart AI Automation
              <br />
              Transforms Businesses
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              See how AI automation streamlines operations, boosts and drives growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* TrailForge Case Study */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 bg-gray-700 rounded-lg flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-purple-300">
                      "AI-driven forecasting cut inventory waste by 40% for TrailForge"
                    </h3>
                    <p className="text-gray-400 text-sm">
                      TrailForge, a suitcase brand, faced stock issues and inefficiencies. Our AI forecasting optimized inventory and production cycles, helping them save costs and deliver faster.
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-purple-300 mb-3">Impact :</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm">40% Less Inventory Waste</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-green-400" />
                      <span className="text-sm">35% Faster Production</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm">20% More Accurate Forecasting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-400" />
                      <span className="text-sm">25% Faster Fulfillment</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* MedixChain Case Study */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 bg-gray-700 rounded-lg flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-purple-300">
                      "AI-powered workflows reduced error rate by 80% in daily operations"
                    </h3>
                    <p className="text-gray-400 text-sm">
                      MedixChain, a healthcare logistics company, was dealing with frequent data errors and delays. We introduced AI validation and live tracking to improve accuracy and speed.
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-purple-300 mb-3">Impact :</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm">80% Error reduction</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm">90% Accuracy in Data Logs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-400" />
                      <span className="text-sm">30% Faster Delivery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-green-400" />
                      <span className="text-sm">60+ Hours Saved</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* ScaleByte Case Study */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 bg-gray-700 rounded-lg flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-purple-300">
                      "AI integration helped ScaleByte close 3x more deals in less time"
                    </h3>
                    <p className="text-gray-400 text-sm">
                      ScaleBytes sales team struggled with follow-up delays. Our AI sales assistant automated outreach, lead scoring, and CRM updates resulting in faster responses.
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-purple-300 mb-3">Impact :</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm">3x More Deals</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-400" />
                      <span className="text-sm">40% Faster Responses</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm">95% Lead Accuracy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-green-400" />
                      <span className="text-sm">CRM Fully Synced</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FinSolve Case Study */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 bg-gray-700 rounded-lg flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-purple-300">
                      "Automating 50% of operations saved 20% in costs in 2 months"
                    </h3>
                    <p className="text-gray-400 text-sm">
                      FinSolve, a financial services firm, was overloaded with repetitive tasks. By automating workflows and integrating data systems, they streamlined operations.
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-purple-300 mb-3">Impact :</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-green-400" />
                      <span className="text-sm">50% Operations Automated</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-400" />
                      <span className="text-sm">20% Cost Reduction</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-400" />
                      <span className="text-sm">70+ Hours Saved/Month</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm">2x Faster Client Onboarding</span>
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
            <p className="text-purple-400 mb-4">Benefits</p>
            <h2 className="text-4xl font-bold mb-6">
              The Key Benefits of AI
              <br />
              for Your Business Growth
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Discover how AI automation enhances efficiency, reduces costs, and drives business
              growth with smarter, faster processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Increased Productivity",
                description: "Gain actionable insights with AI-driven analytics to improve decision-making and strategy."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Better Customer Experience",
                description: "Personalized AI interactions improve response times, customer engagement, and overall satisfaction."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "24/7 Availability",
                description: "AI-powered systems operate around the clock, ensuring seamless support and execution without downtime."
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Cost Reduction",
                description: "AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Data-Driven Insights",
                description: "Leverage AI to analyze vast data sets, identify trends, and make smarter business decisions."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Scalability & Growth",
                description: "AI adapts to your business needs, allowing you to scale efficiently without increasing workload."
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
            <p className="text-purple-400 mb-4">Pricing</p>
            <h2 className="text-4xl font-bold mb-6">
              The Best AI Automation, at the Right Price
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Choose a plan that fits your business needs and start automating with AI
            </p>

            <div className="flex items-center justify-center mt-8 gap-4">
              <span className="text-gray-400">Monthly</span>
              <div className="relative">
                <div className="w-12 h-6 bg-purple-500 rounded-full flex items-center justify-end pr-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <span className="text-white">Annually</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader className="text-center">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5" />
                  <span className="font-semibold">Starter</span>
                </div>
                <div className="text-3xl font-bold">
                  $37<span className="text-lg text-gray-400">/month</span>
                </div>
                <p className="text-gray-400">Perfect for small businesses starting with AI automation.</p>
              </CardHeader>
              <CardContent>
                <Button className="w-full mb-6 border border-gray-600 bg-transparent hover:bg-gray-800">
                  Choose this plan
                </Button>
                <div className="space-y-3">
                  <p className="font-medium mb-3">What's Included:</p>
                  {[
                    "Basic workflow automation",
                    "AI-powered personal assistant",
                    "Standard analytics & reporting",
                    "Email & chat support",
                    "Up to 3 AI integrations"
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
                  <span className="font-semibold">Professional</span>
                </div>
                <div className="text-3xl font-bold">
                  $75<span className="text-lg text-gray-400">/month</span>
                </div>
                <p className="text-gray-400">Perfect for small businesses starting with AI automation.</p>
              </CardHeader>
              <CardContent>
                <Button className="w-full mb-6 gradient-purple hover:opacity-90">
                  Choose this plan
                </Button>
                <div className="space-y-3">
                  <p className="font-medium mb-3">What's Included:</p>
                  {[
                    "Advanced workflow automation",
                    "AI-driven sales & marketing tools",
                    "Enhanced data analytics & insights",
                    "Priority customer support",
                    "Up to 10 AI integrations"
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
                  <span className="font-semibold">Enterprise</span>
                </div>
                <div className="text-3xl font-bold">Custom</div>
                <p className="text-gray-400">Perfect for small businesses starting with AI automation.</p>
              </CardHeader>
              <CardContent>
                <Button className="w-full mb-6 border border-gray-600 bg-transparent hover:bg-gray-800">
                  Schedule a call
                </Button>
                <div className="space-y-3">
                  <p className="font-medium mb-3">What's Included:</p>
                  {[
                    "Fully customizable AI automation",
                    "Dedicated AI business consultant",
                    "Enterprise-grade compliance",
                    "24/7 VIP support",
                    "Unlimited AI integrations"
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

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-400 mb-4">Testimonials</p>
            <h2 className="text-4xl font-bold mb-6">
              Why Businesses Love Our AI Solutions
            </h2>
            <p className="text-gray-400">Real businesses, real results with AI automation.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                rating: 5,
                text: "AI automation transformed our operations by eliminating repetitive tasks and improving efficiency. Scaling our workflow has never been easier!",
                author: "James Carter",
                role: "CEO at TechFlow Solutions"
              },
              {
                rating: 5,
                text: "With AI, we cut manual work and improved accuracy. Our team now focuses on high-impact tasks while automation handles the rest!",
                author: "Sophia Martinez",
                role: "Operations Manager at NexaCorp"
              },
              {
                rating: 5,
                text: "AI-driven insights doubled our sales efficiency. We now engage leads at the right time with smarter, data-backed decisions!",
                author: "David Reynolds",
                role: "Head of Sales at GrowthPeak"
              },
              {
                rating: 5,
                text: "Customer support is now seamless. Our response time improved drastically, and satisfaction levels are at an all-time high, thanks to xtract",
                author: "Emily Wong",
                role: "Customer Success Lead at SupportHive"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-400 mb-4">FAQs</p>
            <h2 className="text-4xl font-bold mb-6">
              We've Got the Answers
              <br />
              You're Looking For
            </h2>
            <p className="text-gray-400">Quick answers to your AI automation questions.</p>
          </div>

          <div className="space-y-4">
            {[
              "How can AI automation help my business?",
              "Is AI automation difficult to integrate?",
              "What industries can benefit from AI automation?",
              "Do I need technical knowledge to use AI automation?",
              "What kind of support do you offer?"
            ].map((question, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{question}</span>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-violet-600/10 rounded-2xl p-12 border border-purple-500/20">
            <h2 className="text-4xl font-bold mb-6">
              Let AI do the Work so
              <br />
              you can Scale Faster
            </h2>
            <p className="text-gray-400 mb-8">Book a Call Today and Start Automating</p>
            <Button size="lg" className="gradient-purple hover:opacity-90">
              Book a free call
            </Button>
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
                <span className="text-xl font-bold">XTRACT</span>
              </div>
              <p className="text-gray-400 mb-6">
                Xtract - Automate Smarter, Optimize Faster, and Grow Stronger.
              </p>
              <div>
                <p className="text-sm text-gray-400 mb-2">Join our newsletter</p>
                <div className="flex gap-2">
                  <Input
                    placeholder="name@email.com"
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                  <Button className="gradient-purple">Subscribe</Button>
                </div>
              </div>
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
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">404</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Socials</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Logo by flaticon</span>
              <span>Visioned and Crafted by Kanishk Dubey</span>
            </div>
            <span className="text-sm text-gray-400">© All right reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
