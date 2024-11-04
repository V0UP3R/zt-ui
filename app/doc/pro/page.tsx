'use client'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type FeatureItemProps = {
  title: string;
  description: string;
};

type PriceCardProps = {
  title: string;
  price: string;
  description: string;
};

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
};

type ComparisonFeatureProps = {
  feature: string;
  basic: boolean;
  pro: boolean;
};

export default function EnhancedPricingPage(): JSX.Element {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="min-h-screen min-w-full bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text">
      <header className="relative bg-default-blue text-default-white py-16 px-4 text-center rounded-b-lg shadow-md mb-12 overflow-hidden">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-5xl font-bold">ZT-UI Library - Plano Pro</h1>
          <p className="text-xl mt-4">Desbloqueie todo o potencial de suas aplicações com nossa biblioteca de componentes premium.</p>
        </motion.div>
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-default-blue to-transparent"
        />
      </header>

      <main className="max-w-7xl mx-auto px-4">
        <motion.section
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          className="p-8 rounded-lg shadow-lg mb-12 bg-light-secondary dark:bg-dark-secondary"
        >
          <h2 className="text-4xl font-semibold mb-6">Por que escolher o Plano Pro?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureItem title="Componentes Exclusivos" description="Explore uma vasta gama de componentes avançados para acelerar seu desenvolvimento." />
            <FeatureItem title="Atualizações Regulares" description="Mantenha-se à frente com melhorias constantes e novos recursos." />
            <FeatureItem title="Suporte Prioritário" description="Receba ajuda rápida e eficiente de nossa equipe de especialistas." />
            <FeatureItem title="Documentação Completa" description="Acesse guias detalhados e exemplos práticos para cada componente." />
          </div>
        </motion.section>

        <motion.section
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          className="p-8 rounded-lg shadow-lg mb-12 bg-light-secondary dark:bg-dark-secondary"
        >
          <h2 className="text-4xl font-semibold mb-6">Planos de Preços</h2>
          <div className="flex flex-col md:flex-row justify-around items-center gap-8">
            <PriceCard title="Mensal" price="$15" description="Cobrança mensal recorrente" />
            <PriceCard title="Anual" price="$150" description="Cobrança anual com desconto de 20%" />
            <PriceCard title="Empresarial" price="Sob Consulta" description="Planos personalizados para grandes equipes e empresas." />
          </div>
        </motion.section>

        <motion.section
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          className="p-8 rounded-lg shadow-lg mb-12 bg-light-secondary dark:bg-dark-secondary"
        >
          <h2 className="text-4xl font-semibold mb-6">O que nossos usuários dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Testimonial quote="ZT-UI mudou a maneira como desenvolvemos nossos projetos. Componentes incríveis e fáceis de usar!" author="João Silva" role="Desenvolvedor Frontend" />
            <Testimonial quote="Com o plano Pro, nossa produtividade aumentou significativamente. Recomendo a todos!" author="Maria Fernandes" role="Líder de Projetos" />
          </div>
        </motion.section>

        <motion.section
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          className="p-8 rounded-lg shadow-lg mb-12 bg-light-secondary dark:bg-dark-secondary"
        >
          <h2 className="text-4xl font-semibold mb-6">Comparação de Planos</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-200 dark:border-gray-700">
              <thead>
                <tr>
                  <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">Recursos</th>
                  <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">Plano Básico</th>
                  <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">Plano Pro</th>
                </tr>
              </thead>
              <tbody>
                <ComparisonFeature feature="Componentes Básicos" basic={true} pro={true} />
                <ComparisonFeature feature="Componentes Avançados" basic={false} pro={true} />
                <ComparisonFeature feature="Suporte Prioritário" basic={false} pro={true} />
                <ComparisonFeature feature="Atualizações Frequentes" basic={true} pro={true} />
                <ComparisonFeature feature="Documentação Detalhada" basic={true} pro={true} />
              </tbody>
            </table>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

function FeatureItem({ title, description }: FeatureItemProps): JSX.Element {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-light-accent dark:bg-dark-accent p-6 rounded-lg shadow-md transition-transform"
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}

function PriceCard({ title, price, description }: PriceCardProps): JSX.Element {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-light-accent dark:bg-dark-accent p-6 rounded-lg shadow-md text-center transition-transform"
    >
      <h3 className="text-3xl font-bold mb-2">{title}</h3>
      <p className="text-5xl font-bold text-default-blue mb-4">{price}</p>
      <p className="text-lg mb-6">{description}</p>
      <button className="bg-default-blue text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition">
        Assinar Agora
      </button>
    </motion.div>
  );
}

function Testimonial({ quote, author, role }: TestimonialProps): JSX.Element {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-light-accent dark:bg-dark-accent p-6 rounded-lg shadow-md transition-transform"
    >
      <blockquote className="text-lg italic mb-4">“{quote}”</blockquote>
      <cite className="block text-right">— {author}, <span className="not-italic">{role}</span></cite>
    </motion.div>
  );
}

function ComparisonFeature({ feature, basic, pro }: ComparisonFeatureProps): JSX.Element {
  return (
    <tr>
      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">{feature}</td>
      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-center">{basic ? '✔️' : '❌'}</td>
      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-center">{pro ? '✔️' : '❌'}</td>
    </tr>
  );
}
