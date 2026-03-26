"use client";
import { useState, useEffect } from "react";

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('button') || 
        target.closest('a') ||
        target.closest('.glass-card')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const techStack = [
    { name: "Java", icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg> },
    { name: "Python", icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
    { name: "HTML", icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg> },
    { name: "CSS", icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg> },
    { name: "Git", icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"/><path d="M12 15V9"/></svg> },
    { name: "JavaScript", icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><path d="M9 8v6a2 2 0 1 0 4 0"></path><path d="M15 14v-6"></path></svg> },
    { name: "React", icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)"/></svg> },
    { name: "Spring Boot", icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg> },
    { name: "Tailwind CSS", icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg> },
    { name: "MySQL", icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg> }
  ];

  // Added Pandas and Python certificates, omitted CVcorp (moved to internship section)
  const certificates = [
    { title: "Azure Administrator Associate", issuer: "Microsoft", image: "/certificates/Azure.png" },
    { title: "Python Essentials", issuer: "Cisco Networking Academy", image: "/certificates/CiscoPy.png" },
    { title: "AccentureDeveloper Job Simulation", issuer: "Forage", image: "/certificates/ForageAcc.png" },
    { title: "Java (Basic)", issuer: "HackerRank", image: "/certificates/HRjavab.png" },
    { title: "SQL (Intermediate)", issuer: "HackerRank", image: "/certificates/HRsqli.png" },
    { title: "Block Chain & Applications", issuer: "Pantech e Learning", image: "/certificates/PanBc.png" },
    { title: "C++ Programming Masterclass", issuer: "Pantech e Learning", image: "/certificates/PanC++.png" },
    { title: "Foundations of AI", issuer: "SkillUp Online", image: "/certificates/SkillupAI.png" },
    { title: "Git & GitHub", issuer: "APSSDC", image: "/certificates/ApssdcGit.png" },
    { title: "Python Programming", issuer: "APSSDC", image: "/certificates/ApssdcPy.png" },
    { title: "Data Analysis with Pandas", issuer: "Codefinity", image: "/certificates/Pandas.png" },
    { title: "Python Certification", issuer: "Codefinity", image: "/certificates/Python.png" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-300 font-sans selection:bg-indigo-500/30 overflow-x-hidden scroll-smooth">
      
      {/* --- COSMIC AURORA BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[40%] md:w-[40%] md:h-[40%] rounded-full bg-indigo-600/20 blur-[100px] md:blur-[120px] mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[40%] md:w-[40%] md:h-[40%] rounded-full bg-blue-600/20 blur-[100px] md:blur-[120px] mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[60%] w-[50%] h-[30%] md:w-[30%] md:h-[30%] rounded-full bg-violet-600/10 blur-[80px] md:blur-[100px] mix-blend-screen animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
        
        {/* Ambient Mouse Follow Glow (Stays strictly in the background) */}
        <div 
          className="hidden md:block absolute w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[100px] transition-opacity duration-300 z-0 pointer-events-none"
          style={{ 
            transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
            opacity: isHovering ? 0.6 : 0.2
          }}
        />
      </div>
      
      {/* --- PILL NAVBAR --- */}
      <nav className={`fixed top-4 md:top-6 w-full z-50 transition-all duration-500 flex justify-center px-4`}>
        <div className={`flex items-center justify-between px-6 md:px-8 py-3 rounded-full transition-all duration-300 ${scrolled ? "bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] w-full max-w-4xl" : "bg-transparent w-full max-w-6xl"}`}>
          <a href="#" className="text-xl font-bold text-white tracking-tighter">
            Y<span className="text-blue-400">M</span>
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#featured" className="hover:text-white hover:text-shadow-sm transition-colors">Work</a>
            <a href="#skills" className="hover:text-white hover:text-shadow-sm transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white hover:text-shadow-sm transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white hover:text-shadow-sm transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-white hover:text-shadow-sm transition-colors">Certs</a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 pt-20">
        
        {/* --- HERO SECTION --- */}
        <section className="max-w-5xl mx-auto px-6 py-20 md:py-32 flex flex-col items-center justify-center min-h-[80vh] md:min-h-[85vh] text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-[fadeIn_1s_ease-out]">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-medium text-blue-200 tracking-wide uppercase">Available for opportunities</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mb-4 md:mb-6">
            <span className="text-white">Yaswanth </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">Madala.</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-slate-400 mb-6 md:mb-8 max-w-3xl">
            Engineering elegant solutions for the modern web.
          </h2>
          <p className="text-sm md:text-lg text-slate-500 max-w-2xl mb-10 md:mb-12 leading-relaxed">
            I'm a software developer blending design and logic. Specializing in <span className="text-slate-300 font-medium">Java</span>, <span className="text-slate-300 font-medium">Spring Boot</span>, and <span className="text-slate-300 font-medium">React</span> to build scalable, user-centric applications.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto relative z-20">
            <a href="#contact" className="w-full sm:w-auto px-8 py-3 md:py-4 bg-white text-black rounded-full font-bold hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] transition-all duration-300">
              Get in Touch
            </a>
            <div className="flex gap-4">
              <a href="https://github.com/Yaswanth0690" target="_blank" rel="noreferrer" className="p-3 md:p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 backdrop-blur-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://www.linkedin.com/in/yaswanthmadala/" target="_blank" rel="noreferrer" className="p-3 md:p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 backdrop-blur-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
        </section>

        {/* --- FEATURED PROJECT --- */}
        <section id="featured" className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 scroll-mt-20">
          <div className="flex flex-col items-center text-center mb-10 md:mb-16">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">Featured Work</h3>
            <p className="text-sm md:text-base text-slate-400">A look into my most recent comprehensive build.</p>
          </div>
          
          <div className="glass-card relative rounded-2xl md:rounded-3xl overflow-hidden bg-white/[0.02] border border-white/10 flex flex-col lg:flex-row backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] group hover:bg-white/[0.04] transition-all duration-500">
            
            <div className="lg:w-1/2 relative min-h-[250px] md:min-h-[300px] lg:h-auto overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10 lg:hidden"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#030712] z-10 hidden lg:block"></div>
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out">
                <source src="/Demo.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="p-6 md:p-12 lg:w-1/2 flex flex-col justify-center relative z-20">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
                Latest Release
              </div>
              
              <a href="https://yaswanth-budget-management.vercel.app/" target="_blank" rel="noreferrer" className="text-2xl md:text-3xl font-bold text-white mb-4 hover:text-blue-400 transition-colors flex items-center gap-2 group/link">
                Full-Stack Budget App
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover/link:opacity-100 transition-all -translate-x-2 group-hover/link:translate-x-0 hidden md:block"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>

              <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-6 md:mb-8">
                A comprehensive budget management dashboard designed to help users track expenses, manage strict budgets, and crush savings goals. Features a clean, minimalist interface for absolute clarity over personal finances.
              </p>
              
              <div className="flex gap-2 mb-6 md:mb-8 flex-wrap">
                <span className="px-2 md:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[10px] md:text-xs hover:bg-white/10 transition-colors">Next.js</span>
                <span className="px-2 md:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[10px] md:text-xs hover:bg-white/10 transition-colors">React</span>
                <span className="px-2 md:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[10px] md:text-xs hover:bg-white/10 transition-colors">Tailwind CSS</span>
                <span className="px-2 md:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[10px] md:text-xs hover:bg-white/10 transition-colors">Spring Boot</span>
              </div>

              {/* GLASS DEMO CREDENTIALS BOX */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 md:mb-8 p-4 md:p-5 bg-black/40 border border-white/10 rounded-xl md:rounded-2xl backdrop-blur-md">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mb-1">Test Email</span>
                  <span className="font-mono text-xs md:text-sm text-white break-all">Test@123.com</span>
                </div>
                <div className="hidden sm:block w-px bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mb-1">Password</span>
                  <span className="font-mono text-xs md:text-sm text-white">Test@1</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 md:gap-4 relative z-20">
                <a href="https://yaswanth-budget-management.vercel.app/" target="_blank" rel="noreferrer" className="w-full sm:w-auto justify-center px-5 py-2.5 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg md:rounded-xl font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.8)] flex items-center gap-2 text-sm md:text-base">
                  <span>Live Demo</span>
                </a>
                <a href="https://github.com/Yaswanth0690" target="_blank" rel="noreferrer" className="w-full sm:w-auto justify-center px-5 py-2.5 md:px-6 md:py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg md:rounded-xl font-medium transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center gap-2 text-sm md:text-base">
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* --- GLASS SKILLS GRID (10 ITEMS, 5 COLUMNS) --- */}
        <section id="skills" className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24 scroll-mt-20">
          <div className="flex flex-col items-center text-center mb-10 md:mb-16">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">Core Technologies</h3>
            <p className="text-sm md:text-base text-slate-400">The tools and frameworks I use to build scalable systems.</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {techStack.map((tech, index) => (
              <div 
                key={index} 
                className="glass-card group flex flex-col items-center justify-center p-6 md:p-8 bg-white/[0.02] border border-white/10 rounded-xl md:rounded-2xl hover:bg-white/[0.06] hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 backdrop-blur-md cursor-pointer"
              >
                <div className="text-slate-500 group-hover:text-blue-400 transition-colors duration-300 mb-3 md:mb-4">
                  {tech.icon}
                </div>
                <span className="text-xs md:text-sm font-medium text-slate-400 group-hover:text-white transition-colors duration-300 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* --- NEW INTERNSHIP & EXPERIENCE SECTION --- */}
        <section id="experience" className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 scroll-mt-20">
          <div className="flex flex-col items-center text-center mb-10 md:mb-16">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">Internship Experience</h3>
            <p className="text-sm md:text-base text-slate-400">Professional training and applied project development.</p>
          </div>

          <div className="glass-card bg-white/[0.02] border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-12 backdrop-blur-md hover:bg-white/[0.04] hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] transition-all duration-500 group">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
              
              {/* Left Side: CV Corp Certificate */}
              <div className="w-full lg:w-5/12 rounded-xl overflow-hidden border border-white/10 bg-black/40 relative shadow-2xl">
                <img 
                  src="/certificates/CVcorp.png" 
                  alt="CV Corp Internship Certificate" 
                  className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>

              {/* Right Side: Details & Budget App Project */}
              <div className="w-full lg:w-7/12 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-4 w-fit border border-blue-500/20">
                  CV Corp Internship
                </div>
                
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">Java Developer Intern</h4>
                <p className="text-sm md:text-base text-slate-400 mb-6 leading-relaxed">
                  During my professional internship program at CV Corp, I strengthened my core programming logic and applied it to real-world software architecture.
                </p>

                <div className="bg-black/40 border border-white/5 rounded-2xl p-5 md:p-6 backdrop-blur-sm">
                  <h5 className="text-lg text-white mb-3 font-semibold flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                    Project: Console Budget App
                  </h5>
                  <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                    Designed and built a Java-based console application for tracking user expenses and managing active loans. The system was structured using a robust layered architecture and utilized JDBC-based CRUD operations for secure, persistent data management in MySQL.
                  </p>
                  
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 md:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[10px] md:text-xs">Java</span>
                    <span className="px-2 md:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[10px] md:text-xs">JDBC</span>
                    <span className="px-2 md:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[10px] md:text-xs">MySQL</span>
                    <span className="px-2 md:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[10px] md:text-xs">Layered Architecture</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- PROJECTS GRID (Remaining 2 Projects) --- */}
        <section id="projects" className="max-w-5xl mx-auto px-4 md:px-6 py-16 md:py-24 scroll-mt-20">
          <div className="flex flex-col items-center text-center mb-10 md:mb-16">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">Project Archive</h3>
            <p className="text-sm md:text-base text-slate-400">Other notable builds and academic work.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="glass-card bg-white/[0.02] border border-white/10 p-6 md:p-8 rounded-2xl md:rounded-3xl hover:-translate-y-2 hover:bg-white/[0.04] hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 backdrop-blur-md flex flex-col cursor-pointer">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4 md:mb-6 border border-blue-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6"><path d="M12 2S7.4 5.3 4 7v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7c-3.4-1.7-8-5-8-5z"></path></svg>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Student Info System</h4>
              <p className="text-xs md:text-sm text-slate-400 mb-4 md:mb-6 leading-relaxed flex-grow">A robust Java and MySQL application designed to streamline student enrollment, course management, and grading analytics.</p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 rounded bg-white/5 text-[9px] md:text-[10px] text-slate-300">Java</span>
                <span className="px-2 py-1 rounded bg-white/5 text-[9px] md:text-[10px] text-slate-300">MySQL</span>
                <span className="px-2 py-1 rounded bg-white/5 text-[9px] md:text-[10px] text-slate-300">Eclipse</span>
              </div>
            </div>

            <div className="glass-card bg-white/[0.02] border border-white/10 p-6 md:p-8 rounded-2xl md:rounded-3xl hover:-translate-y-2 hover:bg-white/[0.04] hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 backdrop-blur-md flex flex-col cursor-pointer">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-violet-500/20 flex items-center justify-center text-violet-400 mb-4 md:mb-6 border border-violet-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Iris Recognition CNN</h4>
              <p className="text-xs md:text-sm text-slate-400 mb-4 md:mb-6 leading-relaxed flex-grow">Built an advanced machine learning model utilizing Gabor filters and Convolutional Neural Networks (CNNs) to extract features.</p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 rounded bg-white/5 text-[9px] md:text-[10px] text-slate-300">Python</span>
                <span className="px-2 py-1 rounded bg-white/5 text-[9px] md:text-[10px] text-slate-300">MATLAB</span>
                <span className="px-2 py-1 rounded bg-white/5 text-[9px] md:text-[10px] text-slate-300">CNN</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- CAROUSEL (Updated to include Python/Pandas, removed CVcorp) --- */}
        <section id="certifications" className="max-w-5xl mx-auto px-4 md:px-6 py-16 md:py-24 scroll-mt-20">
          <div className="flex flex-col items-center text-center mb-10 md:mb-16">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">Certifications</h3>
            <p className="text-sm md:text-base text-slate-400">Verified credentials and ongoing education.</p>
          </div>

          <div className="bg-white/[0.02] border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-10 max-w-4xl mx-auto backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-shadow duration-500">
            
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-black/40 rounded-xl md:rounded-2xl overflow-hidden border border-white/5 group cursor-pointer">
              <div 
                className="flex w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {certificates.map((cert, index) => (
                  <div key={index} className="w-full h-full flex-shrink-0 flex items-center justify-center p-2 md:p-8">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-contain drop-shadow-2xl rounded-md md:rounded-lg"
                    />
                  </div>
                ))}
              </div>

              <button onClick={prevSlide} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all hover:bg-white/20 md:hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] z-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button onClick={nextSlide} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all hover:bg-white/20 md:hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] z-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>

            <div className="mt-6 md:mt-8 flex flex-col items-center">
              <h4 key={certificates[currentIndex].title} className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2 text-center animate-[fadeIn_0.5s_ease-out]">
                {certificates[currentIndex].title}
              </h4>
              <p key={certificates[currentIndex].issuer} className="text-xs md:text-sm text-blue-400 font-medium mb-6 md:mb-8 text-center animate-[fadeIn_0.5s_ease-out]">
                Issued by {certificates[currentIndex].issuer}
              </p>

              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {certificates.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`glass-card h-2 rounded-full transition-all duration-500 ${index === currentIndex ? "w-6 md:w-8 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" : "w-2 bg-white/20 hover:bg-white/40 hover:shadow-[0_0_8px_rgba(255,255,255,0.3)]"}`}
                    aria-label={`View certification ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- CONTACT CTA --- */}
        <section id="contact" className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-32 text-center scroll-mt-20">
          <div className="bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 md:w-1/2 h-1/2 bg-blue-500/20 blur-[60px] md:blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/30 transition-colors duration-700"></div>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 relative z-10">Let's build something.</h3>
            <p className="text-sm md:text-lg text-slate-400 mb-8 md:mb-10 max-w-xl mx-auto leading-relaxed relative z-10">
              I am actively seeking an entry-level Java Developer or Software Engineer role. Whether you have a question, a project idea, or just want to connect, my inbox is open!
            </p>
            <a 
              href="mailto:yash9133570690@gmail.com"
              className="inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-white text-black text-sm md:text-base font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] relative z-20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-5 md:h-5"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              Say Hello
            </a>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="max-w-6xl mx-auto px-6 py-10 md:py-12 flex flex-col items-center justify-center border-t border-white/10 text-center">
          <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 relative z-20">
            <a href="https://github.com/Yaswanth0690" target="_blank" rel="noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-5 md:h-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/yaswanthmadala/" target="_blank" rel="noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-5 md:h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 text-xs md:text-sm text-slate-500 mb-6 md:mb-8 font-medium">
            <div className="text-center">
              <p className="text-slate-300">B.Tech Computer Science</p>
              <p className="text-[10px] md:text-xs mt-1 text-slate-500">PACE Institute of Technology</p>
            </div>
          </div>
          
          <p className="text-[10px] md:text-xs text-slate-600 font-medium">
            Designed & Built by Yaswanth Madala &copy; {new Date().getFullYear()}
          </p>
        </footer>

      </div>

      <style jsx global>{`
        html, body {
          overflow-x: hidden;
          width: 100%;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}