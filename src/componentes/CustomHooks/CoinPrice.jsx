import { useState, useEffect } from "react";
import axios from "axios";

const CoinPrice = () => {
  const [price, setPrice] = useState(null);
  const [market, setMarket] = useState(null);
  const [circulating, setCirculating] = useState(null);
  const [total, setTotal] = useState(null);

  const fetchCoinPrice = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/pancakeswap-token?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=falsen"
      );
      const marketPrice = response.data.market_data.current_price.usd;
      const marketCap = response.data.market_data.market_cap.usd;
      const circulatingSupply = response.data.market_data.circulating_supply;
      const totalSupply = response.data.market_data.total_supply;
      setPrice(marketPrice);
      setMarket(marketCap)
      setCirculating(circulatingSupply)
      setTotal(totalSupply)
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

  const APInformation = [price, market, circulating, total]

  return APInformation;
};

export default CoinPrice;
