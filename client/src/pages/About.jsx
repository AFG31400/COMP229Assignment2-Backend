import logoImg from '../assets/me.png';
export default function About() {
  return (
    <div>
      <h1>About me</h1>
      <p>I am Naqshband Musafer, a Software Engineering student at Centennial College currently enrolled in Ajiboye Blessing's class regarding Web Application Development. <br></br>My student number is 301538509, and an image of my appearance is also attached.</p>
      <img src={logoImg} alt="Naqshband Musafer" style={{height: '400px', width: '210px', borderRadius: '10px'}} />
    </div>
  );
}