import React from 'react'

function AddContest() {
  const handleSubmit = ()=>{

  }
  return (
    <div className=' w-full min-h-screen justify-center flex'>
      <div className=' md:w-[50%]  justify-center items-center flex p-4 h-full '>
        <div className='border w-full h-full flex-col flex items-center '>
          <h2>Add Contest</h2>
          <form onSubmit={handleSubmit}>
            <input type='text' name="title" className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Enter the Title'></input>
            <input type='text' name="description" className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Enter the description'></input>
            <input type='text' name="name" className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Enter the Title'></input>
            <input type='text' name="name" className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Enter the Title'></input>
            <input type='text' name="name" className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Enter the Title'></input>
            <input type='text' name="name" className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Enter the Title'></input>

          </form>
        </div>

      </div>
    </div>
  )
}

export default AddContest