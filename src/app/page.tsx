"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Bot, 
  BarChart3, 
  Users, 
  Settings, 
  Zap, 
  MessageSquare, 
  TrendingUp, 
  Shield, 
  Database,
  Workflow,
  DollarSign,
  FileText,
  Bell,
  Search,
  Menu,
  X,
  ChevronRight,
  Play,
  CheckCircle,
  Star,
  Globe,
  Smartphone,
  Monitor,
  ArrowRight,
  Sparkles,
  Brain,
  Cpu,
  Lock,
  Cloud,
  Target,
  Briefcase,
  PieChart,
  Activity,
  Layers,
  Rocket,
  Award,
  Eye,
  MousePointer,
  Headphones
} from "lucide-react";

export default function SyntraLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  // Animação automática dos recursos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Bot,
      title: "IA Conversacional GPT-5",
      description: "Assistente inteligente que aprende com seus dados corporativos",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Workflow,
      title: "Automação Visual",
      description: "Crie fluxos automatizados com drag & drop intuitivo",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Dashboards Inteligentes",
      description: "Relatórios em tempo real com insights automáticos",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Criptografia AES-256 e conformidade LGPD/ISO 27001",
      color: "from-orange-500 to-red-500"
    }
  ];

  const modules = [
    {
      name: "Syntra Core",
      description: "Automação empresarial com fluxos visuais 3D",
      icon: Zap,
      features: ["Drag & drop visual", "Processos 3D", "Onboarding IA", "Alertas inteligentes"]
    },
    {
      name: "Syntra AI",
      description: "Chat corporativo com GPT-5 personalizado",
      icon: Bot,
      features: ["Comandos por voz", "Aprendizado contínuo", "Personas customizadas", "Execução automática"]
    },
    {
      name: "CRM & ERP",
      description: "Gestão completa de clientes e operações",
      icon: Users,
      features: ["Gestão de vendas", "Controle de estoque", "Notas fiscais", "KPIs automáticos"]
    },
    {
      name: "Marketplace",
      description: "Extensões e integrações de terceiros",
      icon: Globe,
      features: ["Apps externos", "Desenvolvedores parceiros", "Integrações sob demanda", "Gestão modular"]
    }
  ];

  const plans = [
    {
      name: "Start",
      price: "R$ 2.000",
      period: "/mês",
      description: "Ideal para pequenas empresas iniciando a automação",
      features: ["Automação básica", "CRM essencial", "Relatórios simples", "Suporte por email"],
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Pro",
      price: "R$ 3.500",
      period: "/mês",
      description: "Perfeito para empresas em crescimento",
      features: ["ERP completo", "IA avançada", "Suporte prioritário", "Integrações básicas"],
      popular: true,
      color: "border-[#00C2FF] border-2"
    },
    {
      name: "Business",
      price: "R$ 6.000",
      period: "/mês",
      description: "Para empresas que precisam de máxima performance",
      features: ["Multiusuários", "Integrações externas", "Dashboard inteligente", "Suporte 24h"],
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Enterprise",
      price: "Sob consulta",
      period: "",
      description: "Solução personalizada para grandes corporações",
      features: ["Personalização total", "Suporte dedicado", "Infraestrutura customizada", "SLA garantido"],
      popular: false,
      color: "border-gray-200"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      company: "TechCorp Solutions",
      role: "CEO",
      content: "O SYNTRA revolucionou nossa operação. Automatizamos 80% dos processos e aumentamos a produtividade em 150%.",
      rating: 5
    },
    {
      name: "Ana Costa",
      company: "Inovação Digital",
      role: "Diretora de Operações",
      content: "A IA do SYNTRA é impressionante. Ela antecipa problemas e sugere soluções antes mesmo que percebamos.",
      rating: 5
    },
    {
      name: "Roberto Lima",
      company: "Crescimento Ltda",
      role: "Gerente Geral",
      content: "Interface intuitiva e resultados imediatos. Nossa equipe adotou a plataforma em apenas 2 dias.",
      rating: 5
    }
  ];

  const integrations = [
    "Google Workspace", "Slack", "Microsoft Teams", "WhatsApp Business", 
    "Stripe", "Mercado Pago", "Salesforce", "HubSpot"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Aqui você implementaria o envio do formulário
    alert("Obrigado pelo interesse! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3 lasy-highlight">
              {/* SYNTRA Logo - Ícone circular azul brilhante com design futurista, apresentando um círculo dividido por uma linha diagonal e um círculo menor centralizado, sobre um fundo azul escuro. Ideal para representar o aplicativo SYNTRA, destacando-se pela sua simplicidade e modernidade. */}
              <div className="relative w-8 h-8 bg-[#0A1A2F] rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/20baa02d-1d2e-4a76-999f-142b98cdaa41.png" 
                  alt="SYNTRA Logo - Ícone circular azul brilhante com design futurista" 
                  className="w-8 h-8 object-contain lasy-highlight"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-[#0A2540] to-[#00C2FF] bg-clip-text text-transparent">SYNTRA</h1>
                <p className="text-xs text-gray-500 hidden sm:block">Inteligência que impulsiona negócios</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#solucoes" className="text-gray-700 hover:text-[#00C2FF] transition-colors">Soluções</a>
              <a href="#precos" className="text-gray-700 hover:text-[#00C2FF] transition-colors">Preços</a>
              <a href="#sobre" className="text-gray-700 hover:text-[#00C2FF] transition-colors">Sobre</a>
              <a href="#contato" className="text-gray-700 hover:text-[#00C2FF] transition-colors">Contato</a>
              <Button variant="outline" className="border-[#00C2FF] text-[#00C2FF] hover:bg-[#00C2FF] hover:text-white">
                Login
              </Button>
              <Button className="bg-gradient-to-r from-[#00C2FF] to-[#00FFE0] text-white hover:opacity-90">
                Teste Grátis
              </Button>
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#solucoes" className="text-gray-700 hover:text-[#00C2FF] transition-colors">Soluções</a>
                <a href="#precos" className="text-gray-700 hover:text-[#00C2FF] transition-colors">Preços</a>
                <a href="#sobre" className="text-gray-700 hover:text-[#00C2FF] transition-colors">Sobre</a>
                <a href="#contato" className="text-gray-700 hover:text-[#00C2FF] transition-colors">Contato</a>
                <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
                  <Button variant="outline" className="border-[#00C2FF] text-[#00C2FF]">Login</Button>
                  <Button className="bg-gradient-to-r from-[#00C2FF] to-[#00FFE0] text-white">Teste Grátis</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0A2540] via-[#0B0F19] to-[#0A2540] text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00C2FF] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00FFE0] rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-[#00C2FF]/20 text-[#00FFE0] border-[#00FFE0]/30">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Powered by GPT-5
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white to-[#00FFE0] bg-clip-text text-transparent">
                    Inteligência que
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-[#00C2FF] to-[#00FFE0] bg-clip-text text-transparent">
                    impulsiona negócios
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Plataforma completa de automação empresarial com IA conversacional, CRM, ERP e fluxos inteligentes que integram, gerenciam e otimizam operações corporativas em tempo real.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-[#00C2FF] to-[#00FFE0] text-white hover:opacity-90 text-lg px-8">
                  <Rocket className="w-5 h-5 mr-2" />
                  Começar Agora
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8">
                  <Play className="w-5 h-5 mr-2" />
                  Ver Demo
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#00FFE0]">500+</p>
                  <p className="text-sm text-gray-400">Empresas</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#00FFE0]">150%</p>
                  <p className="text-sm text-gray-400">Produtividade</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#00FFE0]">24/7</p>
                  <p className="text-sm text-gray-400">Automação</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#00FFE0] rounded-full animate-pulse"></div>
                    <span className="text-[#00FFE0] font-medium">IA Syntra Online</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4 border-l-4 border-[#00C2FF]">
                      <p className="text-sm text-gray-300">💡 Identifiquei uma oportunidade de otimização no seu processo de vendas...</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border-l-4 border-[#00FFE0]">
                      <p className="text-sm text-gray-300">📊 Relatório financeiro gerado automaticamente. Receita aumentou 23% este mês.</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border-l-4 border-green-400">
                      <p className="text-sm text-gray-300">✅ 15 automações executadas com sucesso hoje.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-4">
                    <Input 
                      placeholder="Digite seu comando..." 
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                    <Button size="sm" className="bg-[#00C2FF] hover:bg-[#00A8E6]">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50" id="solucoes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#00C2FF]/10 text-[#00C2FF] mb-4">
              <Brain className="w-4 h-4 mr-2" />
              Recursos Inteligentes
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-4">
              Tecnologia que transforma empresas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra como nossa plataforma revoluciona a gestão empresarial com automação inteligente e IA conversacional
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                      activeFeature === index
                        ? 'border-[#00C2FF] bg-[#00C2FF]/5 shadow-lg'
                        : 'border-gray-200 hover:border-[#00C2FF]/50'
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#0A2540] mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-[#0A2540]">Dashboard Executivo</h3>
                    <Badge className="bg-green-100 text-green-800">
                      <Activity className="w-3 h-3 mr-1" />
                      Ao Vivo
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Receita Mensal</p>
                      <p className="text-2xl font-bold text-[#0A2540]">R$ 125.4K</p>
                      <p className="text-sm text-green-600">+12.5%</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Automações</p>
                      <p className="text-2xl font-bold text-[#0A2540]">23</p>
                      <p className="text-sm text-green-600">+15.0%</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm">Relatório financeiro gerado</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Bot className="w-5 h-5 text-[#00C2FF]" />
                      <span className="text-sm">IA identificou oportunidade</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Users className="w-5 h-5 text-purple-500" />
                      <span className="text-sm">3 novos leads cadastrados</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 mb-4">
              <Layers className="w-4 h-4 mr-2" />
              Módulos Integrados
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-4">
              Ecossistema completo para sua empresa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada módulo trabalha em perfeita harmonia para criar uma solução empresarial única e poderosa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#00C2FF]/50">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-r from-[#00C2FF] to-[#00FFE0] rounded-lg group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-[#0A2540] text-xl">{module.name}</CardTitle>
                        <CardDescription className="text-gray-600">{module.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {module.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-gradient-to-r from-[#00C2FF] to-[#00FFE0] text-white hover:opacity-90">
                      Explorar Módulo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50" id="precos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 mb-4">
              <DollarSign className="w-4 h-4 mr-2" />
              Planos Flexíveis
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-4">
              Escolha o plano ideal para sua empresa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções escaláveis que crescem junto com seu negócio, desde startups até grandes corporações
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.color} ${plan.popular ? 'scale-105 shadow-2xl' : 'hover:shadow-lg'} transition-all duration-300`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#00C2FF] to-[#00FFE0] text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Mais Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-[#0A2540] text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-[#0A2540]">{plan.price}</span>
                    {plan.period && <span className="text-gray-500 text-sm">{plan.period}</span>}
                  </div>
                  <CardDescription className="text-gray-600 mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-[#00C2FF] to-[#00FFE0] text-white hover:opacity-90' 
                        : 'border-[#00C2FF] text-[#00C2FF] hover:bg-[#00C2FF] hover:text-white'
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.name === "Enterprise" ? "Falar com Vendas" : "Começar Agora"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Todos os planos incluem:</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-green-500" />
                Segurança LGPD
              </span>
              <span className="flex items-center gap-1">
                <Cloud className="w-4 h-4 text-blue-500" />
                Backup Automático
              </span>
              <span className="flex items-center gap-1">
                <Headphones className="w-4 h-4 text-purple-500" />
                Suporte Técnico
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-4 h-4 text-[#00C2FF]" />
                Acesso Multi-plataforma
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">
              <Award className="w-4 h-4 mr-2" />
              Depoimentos
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empresas de todos os tamanhos confiam no SYNTRA para transformar suas operações
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#00C2FF] to-[#00FFE0] rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-[#0A2540]">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role} - {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">
              <Globe className="w-4 h-4 mr-2" />
              Integrações
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-4">
              Conecte-se com suas ferramentas favoritas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mais de 100 integrações disponíveis para maximizar sua produtividade
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00C2FF] to-[#00FFE0] rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <p className="font-medium text-[#0A2540]">{integration}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-[#00C2FF] to-[#00FFE0] text-white hover:opacity-90">
              Ver Todas as Integrações
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contato">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Badge className="bg-[#00C2FF]/10 text-[#00C2FF] mb-4">
                <MessageSquare className="w-4 h-4 mr-2" />
                Fale Conosco
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-4">
                Pronto para transformar sua empresa?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Nossa equipe está pronta para mostrar como o SYNTRA pode revolucionar seus processos empresariais.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#00C2FF]/10 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-[#00C2FF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A2540]">Chat com IA</h3>
                    <p className="text-gray-600">Converse com nossa IA para tirar dúvidas</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#00C2FF]/10 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-[#00C2FF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A2540]">Demo Personalizada</h3>
                    <p className="text-gray-600">Veja o SYNTRA funcionando na sua empresa</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#00C2FF]/10 rounded-lg flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-[#00C2FF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A2540]">Suporte Especializado</h3>
                    <p className="text-gray-600">Consultoria gratuita para implementação</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-[#0A2540]">Solicite uma demonstração</CardTitle>
                <CardDescription>Preencha o formulário e entraremos em contato em até 24h</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Seu email corporativo"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Nome da sua empresa"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Conte-nos sobre seus desafios empresariais..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-[#00C2FF] to-[#00FFE0] text-white hover:opacity-90">
                    <Rocket className="w-4 h-4 mr-2" />
                    Solicitar Demonstração
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A2540] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 lasy-highlight">
                <div className="relative w-8 h-8 bg-[#0A1A2F] rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/20baa02d-1d2e-4a76-999f-142b98cdaa41.png" 
                    alt="SYNTRA Logo" 
                    className="w-8 h-8 object-contain lasy-highlight"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-white to-[#00FFE0] bg-clip-text text-transparent">SYNTRA</h3>
                  <p className="text-xs text-gray-400">Inteligência que impulsiona negócios</p>
                </div>
              </div>
              <p className="text-gray-400">
                Plataforma completa de automação empresarial com IA conversacional para transformar sua empresa.
              </p>
              <div className="flex items-center gap-4">
                <Badge className="bg-green-500/20 text-green-400">
                  <Shield className="w-3 h-3 mr-1" />
                  LGPD
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-400">
                  <Award className="w-3 h-3 mr-1" />
                  ISO 27001
                </Badge>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#00FFE0]">Soluções</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#00C2FF] transition-colors">Syntra Core</a></li>
                <li><a href="#" className="hover:text-[#00C2FF] transition-colors">Syntra AI</a></li>
                <li><a href="#" className="hover:text-[#00C2FF] transition-colors">CRM & ERP</a></li>
                <li><a href="#" className="hover:text-[#00C2FF] transition-colors">Marketplace</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#00FFE0]">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#00C2FF] transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-[#00C2FF] transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-[#00C2FF] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#00C2FF] transition-colors">Parceiros</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#00FFE0]">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#00C2FF] transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-[#00C2FF] transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-[#00C2FF] transition-colors">Status do Sistema</a></li>
                <li><a href="#" className="hover:text-[#00C2FF] transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 lasy-highlight">
              © 2025 SYNTRA. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#00C2FF] transition-colors">Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-[#00C2FF] transition-colors">Termos</a>
              <a href="#" className="text-gray-400 hover:text-[#00C2FF] transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}