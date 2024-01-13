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
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=pancakeswap-token&order=market_cap_asc&per_page=100&page=1&sparkline=false&locale=en"
      );
      const marketPrice = response.data.current_price;
      const marketCap = response.data.market_cap;
      const circulatingSupply = response.data.circulating_supply;
      const totalSupply = response.data.total_supply;
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
    }, 180000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  APInformation = [price, market, circulating, total]

  return APInformation;
};

export default CoinPrice;
