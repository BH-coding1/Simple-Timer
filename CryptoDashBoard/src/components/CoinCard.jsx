const CoinCard = ({key,coin}) => {
    return ( 
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-lg rounded-xl p-5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-200">
      <img src={coin?.image} alt={coin?.name} className="w-16 h-16 mb-3" />
      <h2 className="font-bold text-xl">{coin?.name || "N/A"}</h2>
      <p className="uppercase text-gray-400 mb-2">{coin?.symbol?.toUpperCase() || "N/A"}</p>
      
      <div className="mt-2">
        <p className="text-green-400 font-semibold text-lg">
          ${coin?.current_price?.toLocaleString() || "0"}
        </p>
        <p
          className={`mt-1 font-medium ${
            coin?.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {coin?.price_change_percentage_24h?.toFixed(2) || "0"}%
        </p>
        <p className="mt-1 text-gray-300 text-sm">
          Market Cap: ${coin?.market_cap?.toLocaleString() || "0"}
        </p>
      </div>
      
      
    </div>
  );
};


export default CoinCard;