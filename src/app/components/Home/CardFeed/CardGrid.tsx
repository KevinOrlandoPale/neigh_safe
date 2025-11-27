import React from "react";

export default function CardsGrid() {
  // Placeholders para simulação de cards
  const placeholders = Array.from({ length: 9 });

  return (
    <section className="w-full px-4 mt-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {placeholders.map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm h-60 border border-[#e8e8e8] relative">
            {/* Parte de cima para imagem ou área de alerta */}
            <div className="h-1/2 w-full bg-[#f4f4f4] rounded-t-2xl"></div>

            {/* Parte de baixo */}
            <div className="p-4">
              <div className="w-32 h-4 bg-[#e8e8e8] rounded-md mb-3"></div>
              <div className="w-20 h-3 bg-[#e8e8e8] rounded-md mb-2"></div>
              <div className="w-24 h-3 bg-[#e8e8e8] rounded-md"></div>
            </div>

            {/* Bolinha flutuante igual ao design */}
            <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#e8e8e8]">
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
