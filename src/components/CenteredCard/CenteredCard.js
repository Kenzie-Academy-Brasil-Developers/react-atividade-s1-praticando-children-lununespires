import "./style.css";
function CenteredCard({ children }) {
  return (
    <div className="card">
      <span>{children}</span>
    </div>
  );
}

export default CenteredCard;