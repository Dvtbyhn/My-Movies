import axios from 'axios';
import React, { Component } from 'react'

class EditMovie extends Component {

    state = {
        name: "",
        imageURL: "",
        rating: "",
        overview: ""

    }

    async componentDidMount() {


        const id = this.props.match.params.id;

        const response = await axios.get(`http://localhost:3002/movies/${id}`)
        const movie = response.data
        this.setState({
            name: movie.name,
            imageURL: movie.imageURL,
            rating: movie.rating,
            overview: movie.overview
        })
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFromSubmit = (e) => {
        e.preventDefault()

        const { name, imageURL, rating, overview } = this.state

        const id = this.props.match.params.id;

        const updatedMovie = {
            name,
            imageURL,
            rating,
            overview
        }

        this.props.onEditMovie(id, updatedMovie)
        this.props.history.push("/")
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
             text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name = "name"
                            value={this.state.name} onChange={this.onInputChange}
                            type="text" />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            İmage Url
                        </label>
                        <input className="shadow appearance-none border border-gray-500 
            rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            value={this.state.imageURL} onChange={this.onInputChange}
                            type="text" name='imageURL' />


                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Rating
                        </label>
                        <input className="shadow appearance-none border border-gray-500 rounded 
            w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            value={this.state.rating} onChange={this.onInputChange}
                            type="text" name='rating' />

                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            İnfo
                        </label>

                        <textarea className="shadow appearance-none border border-gray-500
             rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="texterea" name='overview'
                            value={this.state.overview} onChange={this.onInputChange} />
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



export default EditMovie
