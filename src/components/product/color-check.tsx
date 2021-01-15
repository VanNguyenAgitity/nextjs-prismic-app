const ColorCheck = () => (
  <div className="block">
  <span className="text-gray-700 font-montserrat uppercase text-xs font-semibold">Color:</span>
  <div className="mt-4 flex w-24 justify-between">
      <label className="inline-flex items-center">
        <input type="checkbox" value="1" className="form-checkbox bg-white text-white h-5 w-5 rounded-full shadow border border-solid border-gray-200"/>
      </label>
      <label className="inline-flex items-center">
        <input type="checkbox" value="2" className="form-checkbox bg-orange text-orange h-5 w-5 shadow rounded-full"/>
      </label>
      <label className="inline-flex items-center">
        <input type="checkbox" value="3" className="form-checkbox bg-pink-600 text-pink-600 h-5 w-5 shadow rounded-full"/>
      </label>
      <label className="inline-flex items-center">
        <input type="checkbox" value="4" className="form-checkbox bg-green-600 text-green-600 h-5 w-5 shadow rounded-full"/>
      </label>
  </div>
</div>
)

export default ColorCheck