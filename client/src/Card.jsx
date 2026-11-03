export default function Card(props) {
  return (
    <div className="project-card">
      <img src={props.img} alt={props.title} />
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}