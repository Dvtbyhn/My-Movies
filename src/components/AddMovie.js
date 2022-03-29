import React from 'react'
import serialize from 'form-serialize'

class AddMovie extends React.Component {
  handleFromSubmit = (e) => {
    e.preventDefault()
    const newMovie = serialize(e.target, { hash: true })

    this.props.onAddMovie(newMovie)
  }
  render() {
    return (
      <div className="w-2/4 ml-80">
        <form onSubmit={this.handleFromSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Movie Name
            </label>
            <input className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3
             text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name='name'
             type="text" />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              İmage Url
            </label>
            <input className="shadow appearance-none border border-gray-500 
            rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" name='imageURL' />


            <label className="block text-gray-700 text-sm font-bold mb-2" >
              Rating
            </label>
            <input className="shadow appearance-none border border-gray-500 rounded 
            w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" name='rating'/>

            <label className="block text-gray-700 text-sm font-bold mb-2" >
              İnfo
            </label>

            <textarea className="shadow appearance-none border border-gray-500
             rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="texterea" name='overview' />
          </div>

          <div className="flex items-center justify-between">
            <button className="bg-blue-500  w-3/6 hover:bg-blue-700 text-white 
             font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Add
            </button>

          </div>
        </form>

      </div>
    )
  }
}



export default AddMovie
