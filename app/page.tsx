import portfolioData from '../data/portfolio.json'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      <Hero personal={portfolioData.personal} stats={portfolioData.stats} />
      <About personal={portfolioData.personal} />
      <Experience experience={portfolioData.experience} />
      <Projects projects={portfolioData.projects} />
      <Skills skills={portfolioData.skills} techIcons={portfolioData.techIcons} />
      <Education education={portfolioData.education} publications={portfolioData.publications} />
      <Contact personal={portfolioData.personal} />
      <Footer name={portfolioData.personal.name} />
    </main>
  )
}