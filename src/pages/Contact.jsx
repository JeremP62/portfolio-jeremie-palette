function Contact() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#06B6D4] to-[#7C3AED] bg-clip-text text-transparent">
              Contactez-moi
            </span>
          </h1>
          <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
            Vous avez un projet ? Une opportunité ? N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Informations de contact */}
            <div className="space-y-6">
              <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Informations</h2>
                
                {/* Email */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#7C3AED]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Email</p>
                    <a href="mailto:palette.jeremie@live.fr" className="text-[#06B6D4] hover:text-[#22D3EE] transition-colors">
                      palette.jeremie@live.fr
                    </a>
                  </div>
                </div>

                {/* Localisation */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#06B6D4]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#06B6D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Localisation</p>
                    <p className="text-[#94A3B8]">Boulogne-sur-Mer (62200)</p>
                    <p className="text-[#64748B] text-sm">Mobilité : Lille et environs</p>
                  </div>
                </div>

                {/* Téléphone (optionnel) */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#10B981]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Disponibilité</p>
                    <p className="text-[#94A3B8]">Immédiate</p>
                    <p className="text-[#64748B] text-sm">Recherche CDI / Formation en alternance</p>
                  </div>
                </div>
              </div>

              {/* Liens sociaux */}
              <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">Réseaux</h2>
                <div className="space-y-3">
                  <a 
                    href="https://github.com/JeremP62" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#94A3B8] hover:text-[#06B6D4] transition-colors group"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  <a 
                    href="" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#94A3B8] hover:text-[#06B6D4] transition-colors group"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>LinkedIn</span>
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Message rapide */}
            <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Envoyez-moi un message</h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-[#94A3B8] mb-4 leading-relaxed">
                    Vous pouvez me contacter directement par email pour :
                  </p>
                  <ul className="space-y-2 text-[#94A3B8]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#06B6D4]">✓</span>
                      <span>Discuter d'une opportunité professionnelle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#06B6D4]">✓</span>
                      <span>Proposer un projet freelance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#06B6D4]">✓</span>
                      <span>Échanger sur une collaboration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#06B6D4]">✓</span>
                      <span>Poser une question technique</span>
                    </li>
                  </ul>
                </div>

                <a 
                  href="mailto:palette.jeremie@live.fr?subject=Contact depuis le portfolio"
                  className="block w-full text-center bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white font-semibold px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-[#7C3AED]/50 hover:-translate-y-1 transition-all"
                >
                  Ouvrir ma messagerie
                </a>

                <p className="text-center text-[#64748B] text-sm">
                  Je réponds généralement sous 24-48h
                </p>
              </div>
            </div>
          </div>

          {/* Call to action final */}
          <div className="bg-gradient-to-r from-[#7C3AED]/10 to-[#06B6D4]/10 border border-[#7C3AED]/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Vous cherchez un développeur front-end motivé ?
            </h3>
            <p className="text-[#94A3B8] mb-6 max-w-2xl mx-auto">
              Avec ma rigueur acquise dans l'industrie et ma passion pour le développement web, 
              je suis prêt à relever de nouveaux défis et à contribuer à vos projets innovants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:palette.jeremie@live.fr"
                className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-all"
              >
                Démarrons une conversation
              </a>
              <a 
                href="https://github.com/JeremP62"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#06B6D4] text-[#06B6D4] font-semibold px-8 py-3 rounded-lg hover:bg-[#06B6D4] hover:text-[#0F172A] transition-all"
              >
                Voir mon GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;