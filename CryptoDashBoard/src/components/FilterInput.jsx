const FilterInput = ({filter,onfilterChange,coins}) => {
    return ( 
    <div className="flex items-center  rounded-lg px-3 py-2 ">
        <input className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-200" 
        type='text' placeholder="Filter by name or symbol" value={filter} onChange={(e) => onfilterChange(e.target.value)}/>
    </div> );
}
 
export default FilterInput;