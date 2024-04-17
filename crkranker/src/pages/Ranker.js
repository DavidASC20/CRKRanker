import React, { useState } from 'react';
import '../Ranker.css';

function Ranker() {
  // State to store the selected rank and number of trophies
  const [rank, setRank] = useState('');
  const [trophies, setTrophies] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you could add functionality to fetch or calculate percentile based on rank and trophies
    alert(`Rank: ${rank}, Trophies: ${trophies}`);
  };

  return (
    <div className="ranker-container">
      <h1>Rank Information</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="rank-select">Select Your Rank:</label>
        <select id="rank-select" value={rank} onChange={e => setRank(e.target.value)}>
          <option value="">--Please choose an option--</option>
          <option value="Master 5">Master 5</option>
          <option value="Master 4">Master 4</option>
          <option value="Master 3">Master 3</option>
          <option value="Master 2">Master 2</option>
          <option value="Master 1">Master 1</option>
          <option value="Elite 5">Elite 5</option>
          <option value="Elite 4">Elite 4</option>
          <option value="Elite 3">Elite 3</option>
          <option value="Elite 2">Elite 2</option>
          <option value="Elite 1">Elite 1</option>
        </select>

        <label htmlFor="trophies-input">Enter Your Trophies:</label>
        <input
          type="number"
          id="trophies-input"
          value={trophies}
          onChange={e => setTrophies(e.target.value)}
          placeholder="Number of Trophies"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Ranker;
