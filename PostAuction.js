import React, { useState } from 'react';
import axios from 'axios';

function PostAuction() {
  const [itemName, setItemName] = useState('');
  const [startingBid, setStartingBid] = useState('');

  const handlePostAuction = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    try {
      await axios.post(
        'http://localhost:5001/auctions',
        { itemName, startingBid },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // Optionally, redirect or notify user of successful posting
    } catch (error) {
      console.error('Error posting auction:', error);
    }
  };

  return (
    <div className="post-auction">
      <h2>Post New Auction</h2>
      <form onSubmit={handlePostAuction}>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item Name"
        />
        <input
          type="number"
          value={startingBid}
          onChange={(e) => setStartingBid(e.target.value)}
          placeholder="Starting Bid"
        />
        <button type="submit">Post Auction</button>
      </form>
    </div>
  );
}

export default PostAuction;
