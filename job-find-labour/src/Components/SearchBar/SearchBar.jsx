import "./SearchBar.css";


function SearchBar() {
  return (
    <div className="search-container">

      <div className="search-box">
        🔎
        <input
          type="text"
          placeholder="Search Jobs, Skills..."
        />
      </div>

      <div className="search-box">
        👷
        <select>
          <option>Select Category</option>
          <option>Electrician</option>
          <option>Plumber</option>
          <option>Painter</option>
          <option>Welder</option>
          <option>Carpenter</option>
          <option>House Help</option>
        </select>
      </div>

      <div className="search-box">
        📍
        <select>
          <option>Select Location</option>
          <option>Delhi</option>
          <option>Noida</option>
          <option>Lucknow</option>
          <option>Jaipur</option>
          <option>Gurgaon</option>
        </select>
      </div>

      <button className="search-btn">
        Search Jobs
      </button>

    </div>
  );
}

export default SearchBar;