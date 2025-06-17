import React, { useState, useEffect } from 'react';

// Main App component
function App() {
  const [activeSection, setActiveSection] = useState('home'); // State to manage active section
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility

  // Function to scroll to a section smoothly
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id); // Update active section state
      setIsMobileMenuOpen(false); // Close mobile menu after selection
    }
  };

  // Effect to handle initial scroll if a hash is present in the URL
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      scrollToSection(hash);
    }
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-gray-50 antialiased min-h-screen">
      {/* Tailwind CSS CDN script for styling */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Font Awesome CDN for icons (optional, but good for social media) */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      {/* Google Fonts for Inter (primary font) */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>

      {/* Header/Navigation */}
      <header className="fixed w-full bg-white shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo/Name */}
          <a href="#home" onClick={() => scrollToSection('home')} className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition duration-300">
            Ranjan Appanna
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <NavLink id="home" label="Home" activeSection={activeSection} onClick={scrollToSection} />
            <NavLink id="about" label="About" activeSection={activeSection} onClick={scrollToSection} />
            <NavLink id="projects" label="Projects" activeSection={activeSection} onClick={scrollToSection} />
            <NavLink id="app-demo" label="App Demo" activeSection={activeSection} onClick={scrollToSection} />
            <NavLink id="contact" label="Contact" activeSection={activeSection} onClick={scrollToSection} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-2"
              aria-label="Toggle mobile menu"
            >
              <i className={`${isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg py-2">
            <NavLink id="home" label="Home" activeSection={activeSection} onClick={scrollToSection} mobile />
            <NavLink id="about" label="About" activeSection={activeSection} onClick={scrollToSection} mobile />
            <NavLink id="projects" label="Projects" activeSection={activeSection} onClick={scrollToSection} mobile />
            <NavLink id="app-demo" label="App Demo" activeSection={activeSection} onClick={scrollToSection} mobile />
            <NavLink id="contact" label="Contact" activeSection={activeSection} onClick={scrollToSection} mobile />
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="pt-20"> {/* Padding top to account for fixed header */}
        {/* Home/Hero Section */}
        <section id="home" className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
              Hi, I'm <span className="text-indigo-600">Ranjan Ottemada Appanna</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              A passionate <span className="font-semibold text-indigo-500">Senior Digital Twin Engineer</span>
              focused on building innovative simulation and optimization solutions.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300 transform hover:scale-105 shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-50 hover:text-indigo-700 transition duration-300 transform hover:scale-105"
              >
                Get in Touch
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Placeholder for your profile image */}
            <img
              src="https://placehold.co/400x400/667EEA/ffffff?text=Ranjan+Appanna"
              alt="Ranjan Ottemada Appanna"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl border-4 border-indigo-200"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/667EEA/ffffff?text=Image+Not+Found"; }}
            />
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">About Me</h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Hello! I'm <span className="font-semibold text-indigo-600">Ranjan Ottemada Appanna</span>, a dedicated Senior Digital Twin Engineer with over 14 years of experience in process simulation, digital twins, and engineering optimization. My passion lies in leveraging data-driven engineering to optimize industrial operations and build sustainable, high-performance solutions.
              </p>
              <p>
                In my current role as Lead Engineer at Innomotics (Siemens LDA), I deliver simulation solutions for the minerals industry. Previously, as a Senior Solution Engineer at IntelliSense.io, I led the implementation of AI-driven optimization solutions for mining processes. My tenure at ANDRITZ focused on developing high-fidelity dynamic process models for complex industrial operations.
              </p>
              <p>
                My key expertise includes Digital Twin Development, Simulation & Engineering Optimization, Software & Programming Skills (especially Python for simulation applications, database management, visualization tools, and process modeling), and Cross-functional Collaboration. I thrive on challenges and am always eager to contribute to impactful projects.
              </p>
              <p>
                Feel free to explore my projects below, especially my latest app!
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">My Projects & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Project Card 1: Digital Twin Development */}
              <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
                <img
                  src="https://placehold.co/600x400/4F46E5/ffffff?text=Digital+Twin+Project"
                  alt="Digital Twin Development Project"
                  className="w-full h-48 object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/4F46E5/ffffff?text=Image+Not+Found"; }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Digital Twin Development</h3>
                  <p className="text-gray-700 mb-4">
                    Led multiple projects in developing digital twins for industrial processes, ensuring data-driven decision-making and operational optimization across various industries.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Process Simulation</span>
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Optimization</span>
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Data-driven Solutions</span>
                  </div>
                  <a
                    href="#app-demo"
                    onClick={() => scrollToSection('app-demo')}
                    className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition duration-300"
                  >
                    Explore More
                  </a>
                </div>
              </div>

              {/* Project Card 2: Simulation & Engineering Optimization */}
              <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
                <img
                  src="https://placehold.co/600x400/10B981/ffffff?text=Simulation+Optimization"
                  alt="Simulation & Engineering Optimization Project"
                  className="w-full h-48 object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/10B981/ffffff?text=Image+Not+Found"; }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Simulation & Engineering Optimization</h3>
                  <p className="text-gray-700 mb-4">
                    Extensive experience in process simulation across mining, pulp & paper, and power. Successfully built and deployed operator training simulators and optimization frameworks.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Process Modeling</span>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Operator Training</span>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">AI-driven Solutions</span>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-800 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-900 transition duration-300"
                  >
                    View Details
                  </a>
                </div>
              </div>

              {/* Project Card 3: Software & Programming Skills */}
              <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
                <img
                  src="https://placehold.co/600x400/EF4444/ffffff?text=Python+Development"
                  alt="Software & Programming Skills"
                  className="w-full h-48 object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/EF4444/ffffff?text=Image+Not+Found"; }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Software & Programming Skills</h3>
                  <p className="text-gray-700 mb-4">
                    Required experience in Python for simulation applications, alongside expertise in database management, visualization tools, and process modeling.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Python</span>
                    <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Database Management</span>
                    <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Visualization</span>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-800 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-900 transition duration-300"
                  >
                    View Skills
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* App Demo Section */}
        <section id="app-demo" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Run My App Demo</h2>
            <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-lg shadow-inner">
              <p className="text-lg text-gray-700 text-center mb-6">
                Here you can embed your developed web application.
                If your app is a standalone HTML/JS/CSS file or another React component,
                you can either embed it directly using an iframe or integrate its code here.
              </p>

              <div className="w-full aspect-video bg-gray-200 rounded-md overflow-hidden border border-gray-300 flex items-center justify-center">
                <p className="text-gray-500 text-center">
                  <i className="fas fa-desktop text-4xl mb-4"></i><br/>
                  Your App will be embedded here.
                </p>
                {/*
                <iframe
                  src="https://your-app-url.com" // Replace with your app's live URL
                  title="My Developed App"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-md"
                ></iframe>
                */}
              </div>

              <p className="text-sm text-gray-500 text-center mt-4">
                *Note: For the best experience, ensure your app is publicly accessible if using an external URL.*
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Get in Touch</h2>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl">
              <p className="text-center text-lg text-gray-700 mb-8">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300 transform hover:scale-105 shadow-md"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="flex justify-center space-x-6 mt-12 text-gray-600">
              <a href="https://linkedin.com/in/ranjanoa" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition duration-300">
                <i className="fab fa-linkedin text-3xl"></i>
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition duration-300">
                <i className="fab fa-github text-3xl"></i>
              </a>
              <a href="mailto:ranjanoa@gmail.com" className="hover:text-indigo-600 transition duration-300">
                <i className="fas fa-envelope text-3xl"></i>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Ranjan Ottemada Appanna. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

// NavLink Component for cleaner navigation
const NavLink = ({ id, label, activeSection, onClick, mobile }) => {
  const baseClasses = "block text-gray-600 hover:text-indigo-600 transition duration-300";
  const desktopClasses = "px-3 py-2 rounded-md font-medium text-lg";
  const mobileClasses = "px-4 py-2 text-base";
  const activeClasses = "text-indigo-600 font-bold";

  return (
    <a
      href={`#${id}`}
      onClick={() => onClick(id)}
      className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses} ${activeSection === id ? activeClasses : ''}`}
    >
      {label}
    </a>
  );
};

export default App;
