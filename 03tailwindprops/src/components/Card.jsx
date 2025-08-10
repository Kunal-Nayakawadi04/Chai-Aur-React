import React from 'react'


const Card = ({ Title , content}) => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src="https://cdn.pixabay.com/photo/2023/06/02/15/46/ai-generated-8035998_1280.png"
        alt="Card Image"
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">{Title}</h2>
        <p className="mt-2 text-gray-600 text-sm">
          {content}
        </p>
        <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Card
