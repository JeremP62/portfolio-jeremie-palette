function ProjectCard({ title, description, tags, emoji, link }) {
  return (
    <article className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 hover:border-[#7C3AED] hover:-translate-y-2 transition-all duration-300 group">
      {/* Image/Emoji placeholder */}
      <div className="aspect-video bg-gradient-to-br from-[#7C3AED]/20 to-[#06B6D4]/20 rounded-lg mb-6 flex items-center justify-center">
        <span className="text-6xl group-hover:scale-110 transition-transform">{emoji}</span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#7C3AED] transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#94A3B8] mb-4 leading-relaxed">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="bg-[#7C3AED]/20 text-[#A78BFA] px-3 py-1 rounded-full text-sm font-medium border border-[#7C3AED]/30"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Link */}
      {link && (
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#06B6D4] hover:text-[#22D3EE] transition-colors font-medium"
        >
          Voir le projet
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      )}
    </article>
  );
}

export default ProjectCard;