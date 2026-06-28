import "./Stats.css";

function Stats() {
  return (
    <section className="stats">

      <div className="box">
        <div className="icon5">
          👥
        </div>
        <div>
          <h2>1,000+</h2>
          <p>Workers</p>
        </div>
      </div>

      <div className="box">
        <div className="icon5">
          💼
        </div>
        <div>
          <h2>500+</h2>
          <p>Jobs Posted</p>
        </div>
      </div>

      <div className="box">
        <div className="icon5">
          🏬
        </div>
        <div>
          <h2>250+</h2>
          <p>Companies</p>
        </div>
      </div>

      <div className="box">
        <div className="icon5">
          ♥️
        </div>
        <div>
          <h2>90%</h2>
          <p>Success Rate</p>
        </div>
      </div>

    </section>
  );
}

export default Stats;