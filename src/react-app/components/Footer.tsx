import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400">
            Feito por{' '}
            <span className="font-semibold gradient-text">Ryann Victor</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
