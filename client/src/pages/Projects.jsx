import Card from '../Card.jsx'
import imgLogo1 from '../assets/assign1.png'
import imgLogo2 from '../assets/assign2.png'
import imgLogo3 from '../assets/assign3.png'

export default function Projects() {
  return (
    <div className="projects-container">
      <h1>Projects Page</h1>

      <Card 
        img={imgLogo1}
        title="Assignment 1"
        description="This project revolves around environmental matters."
      />

      <Card 
        img={imgLogo2}
        title="Assignment 2"
        description="This project displays a map with visual dots signifying product locations across Canada."
      />

      <Card 
        img={imgLogo3}
        title="Assignment 3"
        description="This project features an interactive user form designed for Centennial College purposes."
      />
    </div>
  )
}