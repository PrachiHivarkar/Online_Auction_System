import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function AuctionItem() {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/auctions/${id}`);
        setItem(res.data);
      } catch (error) {
        console.error('Error fetching auction item:', error);
      }
    };
    fetchItem();
  }, [id]);

  return (
    <div className="auction-item">
      <h2>{item.itemName}</h2>
      <p>Current Bid: ${item.currentBid}</p>
      <p>{item.isClosed ? 'This auction is closed.' : 'This auction is open.'}</p>
      {/* Implement bidding functionality as needed */}
    </div>
  );
}

export default AuctionItem;
