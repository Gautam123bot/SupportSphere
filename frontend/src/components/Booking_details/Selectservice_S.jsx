import React from 'react'

function Selectservice_S({data, setData}) {
  return (
    <div className="space-y-6">
      {/* Phone Number Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Select option below: 
        </label>
        {/* <input
        onChange={(e) => setData({...data, phone: e.target.value})}
        value={data.phone}
          type="text"
          id="firstName"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        /> */}
        <select name="services" id="services"
          value={data.services}
          onChange={(e) => setData({...data, services: e.target.value})}
          className='block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
        >
          <option value="" disabled>
            Choose from below: 
          </option>
          <option value="maid">Maid</option>
          <option value="lab_worker">Lab workers</option>
          <option value="office_servent">Office servent</option>
          <option value="library_maintener">Library maintener</option>
          <option value="electrician">Electrician</option>
          <option value="others">Others</option>
        </select>
      </div>
      {/* Favorite Food Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Number of Staffs required: 
        </label>
        <input
      onChange={(e) => setData({...data, noofstaff: e.target.value})}
      value={data.noofstaff}
          type="text"
          id="noofstaff"
          name='noofstaff'
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  )
}

export default Selectservice_S
