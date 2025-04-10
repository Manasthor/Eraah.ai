import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-black text-white rounded-xl border-white border-1 shadow-md mb-4 transition-all duration-300 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center px-6 py-4 font-semibold text-lg">
        {question}
        {open ? <ChevronUp /> : <ChevronDown />}
      </div>
      {open && (
        <div className="px-6 pb-4 text-gray-300">
          {answer}
        </div>
      )}
    </div>
  );
}
