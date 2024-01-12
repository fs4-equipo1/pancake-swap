import { useState, useEffect } from "react";
import axios from "axios";

const CoinPrice = () => {
  const [price, setPrice] = useState(null);

  const fetchCoinPrice = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/pancakeswap-token?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"
      );
      const marketPrice = response.data.market_data.current_price.usd;
      setPrice(marketPrice);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCoinPrice();
    const interval = setInterval(() => {
      fetchCoinPrice();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return price;
};

export default CoinPrice;
