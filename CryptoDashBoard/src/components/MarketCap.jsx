const MarketCapFilter = ({sortBy,onMarketCapChange}) => {
    return ( 
     <div className="flex items-center gap-2">
        <label htmlFor="marketCap" className="text-gray-300 font-medium">
          Sort:
        </label>
        <select
          value={sortBy}
          id="marketcap"
          onChange = {(e) => onMarketCapChange((e.target.value))}
          className="bg-gray-800 text-white border border-gray-600 p-2 rounded"
        >
          <option value="market_cap_desc">By Market cap desc</option>
          <option value="market_cap_asc">By Market cap asc</option>
          <option value="volume_asc">By Volume asc</option>
          <option value="volume_desc">By Volume desc</option>
          <option value="id_asc">By Id asc</option>
          <option value="id_desc"> By Id desc</option>
        </select>
      </div>  );
}
 
export default MarketCapFilter;