import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Image1 from '../assets/Image1.jpg';
import Image2 from '../assets/Image2.jpg';
import Image3 from '../assets/Image3.jpg';
import Image4 from '../assets/Image4.jpg';
import Image5 from '../assets/Image5.jpg';
import Image6 from '../assets/Image6.png';

export default function Home() {
  return (
    <div className=" text-black">

      {/* Hero Section */}
      <section className="h-[90vh] flex items-center justify-center px-6 bg-gradient-to-b from-white via-white to-neutral-400">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary py-5">
            Welcome to Eraah
          </h1>
          <p className="text-lg md:text-xl text-black mb-6 font-bold">
            We help you showcase the impact you create to your donors in just a<br />
            few clicks, reduces costs & boosts your marketing.
          </p>
          {/* <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-amber-300 font-semibold rounded-lg hover:bg-opacity-80 transition"
          >
            Explore Services <ArrowRight size={20} />
          </Link> */}
        </motion.div>
      </section>

      {/* What AI Can Do Section */}
      <section className="px-6 py-16 text-center bg-gradient-to-b from-neutral-400 via-neutral-700 to-neutral-800 text-black">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            What Can Eraah AI Help You With?
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-zinc-900 font-bold">
            Whether you're looking to streamline operations, make sense of complex data, or build smarter products —
            Eraah provides AI-driven tools that accelerate growth and efficiency.
          </p>
        </motion.div>

        {/* Placeholder for image grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mt-10">
          {[
            {
              title: 'Automate Money Management',
              description: 'Save time and reduce errors by letting AI handle routine operations.',
              image: Image1
            },
            {
              title: 'Smart Recommendations',
              description: 'Deliver personalized experiences powered by intelligent algorithms.',
              image: Image2
            },
            {
              title: 'Predictive Analytics',
              description: 'Make data-driven decisions with future insights at your fingertips.',
              image: Image3
            },
            {
              title: 'AI Chat Support',
              description: 'Boost customer service with 24/7 intelligent virtual assistants.',
              image: Image4
            },
            {
              title: 'Workflow Optimization',
              description: 'Enhance team efficiency with automated and intelligent workflows.',
              image: Image5
            },
            {
              title: 'Visual Data Insights',
              description: 'Get a clearer picture with visual dashboards and deep analysis.',
              image: Image6
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-black text-white rounded-xl shadow-lg overflow-hidden p-4 text-center flex flex-col items-center justify-between"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-semibold text-primary mb-2">{item.title}</h4>
              <p className="text-sm text-gray-100">{item.description}</p>
            </motion.div>

          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20 text-center bg-gradient-to-b from-neutral-800 via-neutral-900 to-black text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-4 text-primary">Ready to Experience the Power of AI?</h3>
          <p className="text-gray-300 mb-8">
            Let us help you unlock new possibilities with AI. Our team is ready to bring your vision to life.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-amber-50 font-semibold rounded-lg hover:bg-opacity-80 transition"
          >
            Enroll Now <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
