import { Link } from 'react-router-dom';
import { projects } from '../data/projects.js';

function Home() {
  return (
    <div className="pt-16">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 via-[#06B6D4]/10 to-transparent" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#7C3AED]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#06B6D4]/20 rounded-full blur-3xl animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#1E293B] border border-[#7C3AED]/30 px-4 py-2 rounded-full mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#06B6D4]"></span>
              </span>
              <span className="text-sm text-[#94A3B8]">Disponible pour nouvelles opportunités</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
              Bonjour, je suis{' '}
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">
                Jérémie Palette
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-[#94A3B8] mb-4">
              Intégrateur Web
            </p>

            <p className="text-lg text-[#64748B] max-w-2xl mx-auto mb-10 leading-relaxed">
              Passionné par la création d'interfaces utilisateur{' '}
              <span className="text-[#06B6D4] font-semibold">modernes</span>,{' '}
              <span className="text-[#7C3AED] font-semibold">accessibles</span> et{' '}
              <span className="text-[#22D3EE] font-semibold">performantes</span>.
              <br />
              De la métallurgie au développement web : une reconversion réussie.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link 
                to="/projects" 
                className="w-full sm:w-auto bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-[#7C3AED]/50 hover:-translate-y-1 transition-all"
              >
                Voir mes projets
              </Link>
              <Link 
                to="/contact" 
                className="w-full sm:w-auto border-2 border-[#06B6D4] text-[#06B6D4] font-semibold px-8 py-3 rounded-lg hover:bg-[#06B6D4] hover:text-[#0F172A] transition-all"
              >
                Me contacter
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {['HTML5', 'CSS3', 'JavaScript', 'React', 'Redux', 'Git'].map((tech) => (
                <span 
                  key={tech}
                  className="bg-[#7C3AED]/20 text-[#A78BFA] px-4 py-2 rounded-full text-sm font-medium border border-[#7C3AED]/30 hover:bg-[#7C3AED]/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APERÇU PROJETS */}
<section className="py-20 bg-[#0A0F1E]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-black text-center mb-4">
      <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">
        Projets Récents
      </span>
    </h2>
    <p className="text-center text-[#94A3B8] mb-12">
      Découvrez mes dernières réalisations
    </p>

    <div className="grid md:grid-cols-2 gap-8 mb-12">
      {projects.slice(0, 2).map((project) => (
        <div 
          key={project.id}
          className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 hover:border-[#7C3AED] transition-all"
        >
          <div className="aspect-video bg-gradient-to-br from-[#7C3AED]/20 to-[#06B6D4]/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-contain"
              />
            ) : (
              <span className="text-6xl">{project.emoji}</span>
            )}
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-[#94A3B8] mb-4 text-sm">{project.description}</p>
          <div className="flex gap-2 flex-wrap">
            {project.tags.slice(0, 2).map((tag) => (
              <span 
                key={tag}
                className="bg-[#7C3AED]/20 text-[#A78BFA] px-3 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="text-center">
      <Link 
        to="/projects"
        className="inline-block bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-all"
      >
        Voir tous les projets
      </Link>
    </div>
  </div>
</section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Intéressé par mon profil ?
          </h2>
          <p className="text-[#94A3B8] mb-8">
            Je suis disponible pour des opportunités dans la région de Boulogne-sur-Mer et Lille
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/about"
              className="border-2 border-[#7C3AED] text-[#7C3AED] font-semibold px-8 py-3 rounded-lg hover:bg-[#7C3AED] hover:text-white transition-all"
            >
              En savoir plus sur moi
            </Link>
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-all"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;