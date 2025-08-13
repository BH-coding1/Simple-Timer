const LimitSelector = ({onLimitchange,limit}) => {
    return ( 
    <div className="flex items-center gap-2">
        <label htmlFor="limit" className="text-gray-300 font-medium">
          Show:
        </label>
        <select
          value={limit}
          id="limit"
          onChange = {(e) => onLimitchange(Number(e.target.value))}
          className="bg-gray-800 text-white border border-gray-600 p-2 rounded"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div> );
}
 
export default LimitSelector;