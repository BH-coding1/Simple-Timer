import { useState ,useEffect, use} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CoinCard from './components/CoinCard'
import LimitSelector from './components/limitSelector'
import FilterInput from './components/FilterInput'
import MarketCapFilter from './components/MarketCap'
import {BrowserRouter,Routes,Route} from 'react-router'
const API_URL = import.meta.env.VITE_API_URL

function App() {
  
  

  const [limit,setLimit] = useState(10)
  const [coins,setCoins] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)
  const [filter,setFilter] = useState('')
  const [sortBy,setSortBy] = useState('market_cap_desc')

  
  
 


  
  useEffect(() => {  
   
    const fetchCoins = async () => { 
      
     
      const fullUrl = `${API_URL}&order=${sortBy}&page=1&per_page=${limit}`;
      try {
        const response = await fetch(fullUrl);
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setCoins(data); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, [limit,sortBy]); 
  const filteredCoins = 
    coins.filter((coin)=>{
      return coin.name.toLowerCase().includes(filter.toLowerCase()) || coin.symbol.toLowerCase().includes(filter.toLowerCase())
    })
  

  
  return (
<div className="min-h-screen bg-gray-900 text-white">
    <div className="flex justify-between items-center mb-6">
      <h1 className="ml-5 text-3xl font-bold">live Crypto Dashboard 🪙</h1>
      
      
    </div>
    <div className="mx-4 flex justify-between items-center gap-4 mb-6 bg-gray-800 p-4 rounded-lg shadow-md">
        <FilterInput filter={filter} onfilterChange={setFilter} coins={coins}/>
        <MarketCapFilter sortBy={sortBy} onMarketCapChange={setSortBy}/>
        <LimitSelector limit={limit} onLimitchange={setLimit}/>
    </div>

    {loading && <p>Loading...</p>}
    {error && <p className="text-red-400">{error}</p>}

    {!loading && !error && (
      <main className="mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCoins.length > 0 ? filteredCoins.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        )):(<p>No matching coins</p>)}
      </main>
    )}
  </div>
  );
}

export default App
