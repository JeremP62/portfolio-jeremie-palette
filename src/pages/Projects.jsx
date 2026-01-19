import { projects } from '../data/projects.js';

function Projects() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#06B6D4] to-[#7C3AED] bg-clip-text text-transparent">
              Mes Projets
            </span>
          </h1>
          <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
            Découvrez mes réalisations en React, Redux et développement web moderne
          </p>
        </div>

        {/* Liste des projets */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <article 
              key={project.id}
              className="bg-[#1E293B] border border-[#334155] rounded-xl p-8 hover:border-[#7C3AED] transition-all"
            >
              <div className={`grid lg:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

              {/* Image */} 
                <div className={`aspect-video bg-gradient-to-br ${
                  index % 2 === 0 
                     ? 'from-[#7C3AED]/20 to-[#06B6D4]/20' 
                     : 'from-[#06B6D4]/20 to-[#7C3AED]/20'
                } rounded-lg flex items-center justify-center overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                 {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                     <span className="text-8xl">{project.emoji}</span>
                   )}
        </div>

                {/* Contenu */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
                  
                  {/* Contexte */}
                  <div className="mb-6">
                    <h3 className="text-[#7C3AED] font-semibold mb-2">📌 Contexte</h3>
                    <p className="text-[#94A3B8] leading-relaxed">
                      {project.fullDescription.context}
                    </p>
                  </div>

                  {/* Objectifs */}
                  <div className="mb-6">
                    <h3 className="text-[#06B6D4] font-semibold mb-2">🎯 Objectifs</h3>
                    <ul className="text-[#94A3B8] space-y-1 text-sm">
                      {project.fullDescription.objectives.map((obj, i) => (
                        <li key={i}>• {obj}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack Technique */}
                  <div className="mb-6">
                    <h3 className="text-white font-semibold mb-2">🛠️ Stack Technique</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.fullDescription.stack.map((tech, i) => (
                        <span 
                          key={i}
                          className={`px-3 py-1 rounded-full text-sm border ${
                            index % 2 === 0
                              ? 'bg-[#7C3AED]/20 text-[#A78BFA] border-[#7C3AED]/30'
                              : 'bg-[#06B6D4]/20 text-[#22D3EE] border-[#06B6D4]/30'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Résultats */}
                  <div className="mb-6">
                    <h3 className="text-[#10B981] font-semibold mb-2">✅ Résultats</h3>
                    <ul className="text-[#94A3B8] space-y-1 text-sm">
                      {project.fullDescription.results.map((result, i) => (
                        <li key={i}>• {result}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Lien GitHub */}
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all ${
                      index % 2 === 0
                        ? 'bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]'
                        : 'bg-gradient-to-r from-[#06B6D4] to-[#7C3AED]'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Voir sur GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;