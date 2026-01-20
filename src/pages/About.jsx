import Lottie from 'lottie-react';
import Businessman from "../assets/animations/Businessman.json";
import Timeline from "../assets/animations/Timeline.json";

function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#06B6D4] to-[#7C3AED] bg-clip-text text-transparent">
              À propos de moi
            </span>
          </h1>
          <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
            Mon parcours, mes valeurs et ma vision du développement web
          </p>
        </div>

        {/* Mon Parcours + Timeline */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Mon parcours */}
          <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Lottie animationData={Businessman} style={{ width: 250, height: 250 }} />
              Mon Parcours
            </h2>
            <div className="space-y-4 text-[#94A3B8] leading-relaxed">
              <p>
                Après <strong className="text-white">15 ans dans la métallurgie</strong> en tant qu'opérateur sur machine numérique, 
                j'ai opéré une reconversion professionnelle vers le développement web. Cette transition m'a permis 
                de découvrir ma véritable passion : transformer des maquettes en expériences web concrètes et fluides.
              </p>
              <p>
                Ma <strong className="text-[#7C3AED]">rigueur technique acquise dans l'industrie</strong> s'est naturellement 
                transposée dans la qualité et la précision de mon code. Chaque ligne de code est pensée comme une pièce 
                usinée : précise, fonctionnelle et durable.
              </p>
              <p>
                Je crois fermement qu'un code <strong className="text-[#06B6D4]">propre, bien structuré et accessible</strong> n'est 
                pas négociable. C'est la base d'un projet web réussi et maintenable sur le long terme.
              </p>
              <p>
                Mon objectif est d'intégrer une équipe dynamique, où je pourrais contribuer au développement de produits web innovants tout en continuant 
                à perfectionner mes compétences en React, TypeScript et l'écosystème JavaScript moderne.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Lottie animationData={Timeline} style={{ width: 250, height: 250 }} />
              Timeline Professionnelle
            </h2>
            <div className="space-y-6">
              {/* 2024-2025 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#06B6D4] ring-4 ring-[#06B6D4]/20"></div>
                  <div className="w-0.5 h-full bg-[#334155] mt-2"></div>
                </div>
                <div className="pb-6">
                  <p className="text-[#06B6D4] font-semibold mb-1">2024 - 2025</p>
                  <p className="text-white font-medium mb-1">🎓 Formation Développeur Web</p>
                  <p className="text-[#94A3B8] text-sm">OpenClassrooms - Parcours Intégrateur Web</p>
                  <p className="text-[#64748B] text-xs mt-2">React, Redux, API REST, Accessibilité, SEO</p>
                </div>
              </div>

              {/* 2020-2021 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#7C3AED] ring-4 ring-[#7C3AED]/20"></div>
                  <div className="w-0.5 h-full bg-[#334155] mt-2"></div>
                </div>
                <div className="pb-6">
                  <p className="text-[#7C3AED] font-semibold mb-1">2020 - 2021</p>
                  <p className="text-white font-medium mb-1">⚙️ Opérateur Fraiseuse Portique CN</p>
                  <p className="text-[#94A3B8] text-sm">VOSSLOH</p>
                  <p className="text-[#64748B] text-xs mt-2">Programmation CN, réglage, précision</p>
                </div>
              </div>

              {/* 2016-2020 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#64748B] ring-4 ring-[#64748B]/20"></div>
                  <div className="w-0.5 h-full bg-[#334155] mt-2"></div>
                </div>
                <div className="pb-6">
                  <p className="text-[#64748B] font-semibold mb-1">2016 - 2020</p>
                  <p className="text-white font-medium mb-1">📦 Magasinier Cariste & Logistique</p>
                  <p className="text-[#94A3B8] text-sm">SPECITUBES</p>
                  <p className="text-[#64748B] text-xs mt-2">Logistique : réception / expédition, contrôle qualité</p>
                </div>
              </div>

              {/* 2009-2015 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#64748B] ring-4 ring-[#64748B]/20"></div>
                </div>
                <div>
                  <p className="text-[#64748B] font-semibold mb-1">2009 - 2015</p>
                  <p className="text-white font-medium mb-1">🔧 Mécanicien Tourneur/Perceur/Ajusteur</p>
                  <p className="text-[#94A3B8] text-sm">ENSIVAL MORET FAPMO</p>
                  <p className="text-[#64748B] text-xs mt-2">Lecture de plans, usinage acier/inox, contrôle</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compétences transférables */}
        <div className="bg-gradient-to-r from-[#7C3AED]/10 to-[#06B6D4]/10 border border-[#7C3AED]/30 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            🔄 Compétences transférables : Métallurgie → Développement Web
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-[#06B6D4] text-xl flex-shrink-0">→</span>
              <div>
                <p className="font-semibold text-white mb-1">Rigueur technique</p>
                <p className="text-[#94A3B8] text-sm">Code propre, bien documenté et maintenable</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#06B6D4] text-xl flex-shrink-0">→</span>
              <div>
                <p className="font-semibold text-white mb-1">Lecture de plans</p>
                <p className="text-[#94A3B8] text-sm">Intégration fidèle des maquettes Figma</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#06B6D4] text-xl flex-shrink-0">→</span>
              <div>
                <p className="font-semibold text-white mb-1">Machines CN</p>
                <p className="text-[#94A3B8] text-sm">Logique de programmation et algorithmique</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#06B6D4] text-xl flex-shrink-0">→</span>
              <div>
                <p className="font-semibold text-white mb-1">Respect des procédures</p>
                <p className="text-[#94A3B8] text-sm">Bonnes pratiques et conventions de code</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#06B6D4] text-xl flex-shrink-0">→</span>
              <div>
                <p className="font-semibold text-white mb-1">Contrôle qualité</p>
                <p className="text-[#94A3B8] text-sm">Tests rigoureux et debugging méthodique</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#06B6D4] text-xl flex-shrink-0">→</span>
              <div>
                <p className="font-semibold text-white mb-1">Travail en équipe</p>
                <p className="text-[#94A3B8] text-sm">Collaboration Git/GitHub et code review</p>
              </div>
            </div>
          </div>
        </div>

        {/* Compétences techniques */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">
              Stack Technique
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Front-end */}
            <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">💻</span>
                Front-end
              </h3>
              <div className="flex flex-wrap gap-2">
                {['HTML5', 'CSS3', 'Sass/SCSS', 'JavaScript ES6+', 'React.js', 'Redux Toolkit', 'Tailwind CSS'].map((skill) => (
                  <span 
                    key={skill}
                    className="bg-[#7C3AED]/20 text-[#A78BFA] px-3 py-1.5 rounded-full text-sm font-medium border border-[#7C3AED]/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Outils */}
            <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🛠️</span>
                Outils
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Git / GitHub', 'Vite / npm', 'React Router', 'Figma', 'Swagger', 'VS Code'].map((skill) => (
                  <span 
                    key={skill}
                    className="bg-[#06B6D4]/20 text-[#22D3EE] px-3 py-1.5 rounded-full text-sm font-medium border border-[#06B6D4]/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Pratiques */}
            <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">✨</span>
                Pratiques
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Responsive Design', 'Accessibilité WCAG', 'SEO', 'Green Code', 'API REST', 'Agile'].map((skill) => (
                  <span 
                    key={skill}
                    className="bg-[#10B981]/20 text-[#34D399] px-3 py-1.5 rounded-full text-sm font-medium border border-[#10B981]/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;