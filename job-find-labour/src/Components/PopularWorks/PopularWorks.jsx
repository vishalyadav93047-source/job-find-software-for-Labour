import "./PopularWorks.css"

function PopularWorks() {
  return (
    <section className="popular">
      <h2>Popular Categories</h2>

      <div className="category-container">

        <div className="category-card">
          <p className="icon">⚡</p>
          <h4>Electrician</h4>
        </div>

        <div className="category-card">
          <p className="icon">🧑‍🔧</p>
          <h4>Plumber</h4>
        </div>

        <div className="category-card">
          <p className="icon">🔨</p>
          <h4>Mason</h4>
        </div>

        <div className="category-card">
          <p className="icon">🎨</p>
          <h4>Painter</h4>
        </div>

        <div className="category-card">
          <p className="icon">🪚</p>
          <h4>Carpenter</h4>
        </div>

        <div className="category-card">
          <p className="icon">👷</p>
          <h4>Welder</h4>
        </div>

        <div className="category-card">
          <p className="icon">🙍‍♀️</p>
          <h4>House Help</h4>
        </div>

        <div className="category-card">
          <p className="icon">🚗</p>
          <h4>Driver</h4>
        </div>

        <div className="category-card">
          <p className="icon">🚛</p>
          <h4>AC Technician</h4>
        </div>

        <div className="category-card">
          <p className="icon">🧑‍🍳</p>
          <h4>Cook</h4>
        </div>

      </div>
    </section>
  );
}

export default PopularWorks;