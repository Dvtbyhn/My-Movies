import React from 'react'
import { Link } from 'react-router-dom'

const Movielist = (props) => {

  const lengthOverview = (string, maxLenght) => {
    if (!string) return null;
    if (string.lenght <= maxLenght) return string
    return `${string.substring(0, maxLenght)} ...`

  }
  return (
    <div>
      <div className='mt-10 grid  grid-cols-3'>
        {
          props.movies.map((movie, i) => (


            <div key={i}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={movie.imageURL} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{movie.name}</div>
                  <p className="text-gray-700 text-base">
                    {lengthOverview(movie.overview, 100)}
                  </p>
                </div>
                <div className="mr">
                  <button onClick={() => props.deleteMovieProp(movie)} className="bg-red-500 hover:bg-red-700 text-white
                 font-bold py-2 px-4 rounded">Delete</button>
                  <Link type="button"
                    className='bg-blue-500 hover:bg-yellow-700 text-white font-bold rounded ml-20 py-1 w-20 mr-20 text-center'
                    to={`edit/${movie.id}`}
                  >Edit</Link>

                  <span className="bg-yellow-500  text-white font-bold py-2 px-4  rounded  mb-10" >{movie.rating}</span>


                </div>
              </div>
            </div>


          ))
        }
      </div>
    </div>
  )
}

export default Movielist