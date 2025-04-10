import ServiceCard from '../components/ServiceCard';
import { Brain, Code, MonitorSmartphone, SearchCheck, Sparkles } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import FAQItem from '../components/FAQItem';

const services = [
  {
    icon: Brain,
    title: 'AI Consulting',
    description: 'Empowering businesses with intelligent automation and data-driven insights.',
  },
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Tailored software solutions using modern tech stacks.',
  },
  {
    icon: MonitorSmartphone,
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user experiences for web and mobile.',
  },
  {
    icon: SearchCheck,
    title: 'Data Analysis',
    description: 'Transforming raw data into actionable strategies.',
  },
  {
    icon: Sparkles,
    title: 'Brand Strategy',
    description: 'Helping brands stand out in the digital space with creative solutions.',
  },
];

const faqs = [
  {
    question: "Do we access your data?",
    answer:
      "We Hack into your system pretending to be you and steel it behind you back.",
  },
  {
    question: "How secure is the platform?",
    answer:
      "Eraah uses end-to-end encryption and industry-standard protocols to ensure your data is protected at all times.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach out through our support portal, email, or live chat anytime. We're available 24/7 for our partners.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-200 to-black text-white px-6 py-20">

      <AnimatedSection className="text-center mb-4 mt-2">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2.5 text-black">Our Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover how Eraah empowers your business with cutting-edge AI and digital solutions.
        </p>
      </AnimatedSection>

      <AnimatedSection className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">

        {services.map((service, i) => (
          <ServiceCard
            key={i}
            icon={service.icon}
            title={service.title}
            description={service.description}
            delay={i * 0.1}
          />
        ))}
      </AnimatedSection>
      <AnimatedSection className="max-w-3xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-primary text-center mb-6">FAQs</h2>
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </AnimatedSection>

    </div>
  );
}

