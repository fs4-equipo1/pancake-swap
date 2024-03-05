import { useState, useEffect } from "react";
import axios from "axios";

const useCoinPrice = () => {
  const [price, setPrice] = useState(null);
  const [market, setMarket] = useState(null);
  const [circulating, setCirculating] = useState(null);
  const [total, setTotal] = useState(null);

  const fetchCoinPrice = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/pancakeswap-token?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"
      );
      const marketPrice = response.data.market_data.current_price.usd;
      const marketCap = response.data.market_data.market_cap.usd;
      const circulatingSupply = response.data.market_data.circulating_supply;
      const totalSupply = response.data.market_data.total_supply;

      setPrice(marketPrice);
      setMarket(marketCap);
      setCirculating(circulatingSupply);
      setTotal(totalSupply);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCoinPrice();
    const interval = setInterval(() => {
      fetchCoinPrice();
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return { price, market, circulating, total };
};

export default useCoinPrice;
