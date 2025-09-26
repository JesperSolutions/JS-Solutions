import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Zap, Target, CheckCircle, ArrowRight } from 'lucide-react';

const AnimatedServices = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const services = [
    {
      icon: Code,
      title: "IT-rådgivning",
      description: "Strategisk rådgivning om digitalisering, systemarkitektur og teknologivalg der passer til din virksomheds behov.",
      features: [
        "Systemarkitektur og design",
        "Teknologivalg og roadmap",
        "Performance optimering"
      ],
      color: "primary"
    },
    {
      icon: Target,
      title: "ESG-implementering",
      description: "Hjælp med at implementere bæredygtighedsstrategier og overholde nye reguleringer som L193-loven.",
      features: [
        "ESG-rapportering og compliance",
        "Bæredygtighedsstrategier",
        "Stakeholder management"
      ],
      color: "secondary"
    },
    {
      icon: Zap,
      title: "AI Integration",
      description: "Implementering af AI-løsninger der skaber reel værdi og effektiviserer dine forretningsprocesser.",
      features: [
        "ChatGPT og AI-værktøjer",
        "Automatisering af processer",
        "Dataanalyse og insights"
      ],
      color: "primary"
    }
  ];

  const getColorClasses = (color: string) => {
    if (color === 'primary') {
      return {
        bg: 'bg-primary-100',
        text: 'text-primary-600',
        border: 'border-primary-200',
        hover: 'hover:border-primary-300'
      };
    }
    return {
      bg: 'bg-secondary-100',
      text: 'text-secondary-600',
      border: 'border-secondary-200',
      hover: 'hover:border-secondary-300'
    };
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            Hvad kan jeg hjælpe dig med?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Med erfaring fra blockchain, ESG-implementering og AI-integration, 
            hjælper jeg virksomheder med at navigere i den digitale transformation.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = getColorClasses(service.color);
            
            return (
              <motion.div
                key={service.title}
                className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent ${colors.hover}`}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className={`${colors.bg} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className={`h-6 w-6 ${colors.text}`} />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.2 + idx * 0.1 + 0.5 }}
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  className={`${colors.text} font-medium text-sm flex items-center group`}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Læs mere
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Animated CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full font-medium shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Kom i gang med dit projekt</span>
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedServices;
