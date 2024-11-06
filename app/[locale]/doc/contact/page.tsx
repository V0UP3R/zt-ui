'use client'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function ContactPage(): JSX.Element {
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
      <header className="bg-default-blue text-default-white py-16 px-4 text-center rounded-b-lg shadow-md mb-12">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold"
        >
          Entre em Contato
        </motion.h1>
        <p className="text-xl mt-4">Estamos aqui para ajudar! Preencha o formulário abaixo.</p>
      </header>

      <main className="max-w-7xl mx-auto px-4">
        <motion.section
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          className="p-8 rounded-lg shadow-lg mb-12 bg-light-secondary dark:bg-dark-secondary"
        >
          <h2 className="text-4xl font-semibold mb-6">Formulário de Contato</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Seu Nome"
              className="border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-default-blue dark:focus:ring-default-blue"
              required
            />
            <input
              type="email"
              placeholder="Seu Email"
              className="border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-default-blue dark:focus:ring-default-blue"
              required
            />
            <textarea
              placeholder="Sua Mensagem"
              className="border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-default-blue dark:focus:ring-default-blue md:col-span-2"
              rows={4}
              required
            />
            <button
              type="submit"
              className="bg-default-blue text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition md:col-span-2"
            >
              Enviar Mensagem
            </button>
          </form>
        </motion.section>

        <motion.section
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          className="p-8 rounded-lg shadow-lg mb-12 bg-light-secondary dark:bg-dark-secondary"
        >
          <h2 className="text-4xl font-semibold mb-6">Informações de Contato</h2>
          <div className="space-y-4">
            <p><strong>Email:</strong> contato@zt-ui.com</p>
            <p><strong>Telefone:</strong> (11) 1234-5678</p>
            <p><strong>Endereço:</strong> Rua Exemplo, 123 - São Paulo, SP</p>
          </div>
        </motion.section>

        <motion.section
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          className="p-8 rounded-lg shadow-lg mb-12 bg-light-secondary dark:bg-dark-secondary"
        >
          <h2 className="text-4xl font-semibold mb-6">Localização</h2>
          <div className="h-96">
            <iframe
              title="Localização"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9004202086493!2d-46.6575976848833!3d-23.56168738468183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59bc0b3cc1f7%3A0x834c7ef15a2f2347!2sRua%20Exemplo%2C%20123%20-%20Centro%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001234-567!5e0!3m2!1spt-BR!2sbr!4v1609999999999!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen={false}
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
