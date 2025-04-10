import { motion } from 'framer-motion';

export default function ServiceCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <div className="p-5 rounded-2xl bg-black hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out shadow-lg">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-primary/30 transition-all 
                   border-white border-[1.5px] min-h-[200px] flex flex-col justify-between"
      >
        <div>
          <div className="mb-4 text-primary">
            <Icon size={36} />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </motion.div>
    </div>
  );
}
