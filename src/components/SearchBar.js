import React from 'react'
import {Link} from 'react-router-dom'

class SearchBar extends React.Component {
    render() {
        return (
              
             <div className='grid grid-cols-2'>  
            <input className="placeholder:italic placeholder:text-slate-400 block ml-24 mt-7 mb-4 bg-white  border
              border-slate-300 rounded-md
             py-2 pl-9 pr-3 shadow-sm focus:outline-none
             focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
             placeholder="Search Movie" type="text" name="search"   onChange={this.props.searchMovieProp}/>
             <Link  to="/add" type='button'
              className="bg-red-500 hover:bg-red-700 text-white font-bold h-10  text-center ml-3 mt-6 py-2 px-2 rounded w-2/6">Add</Link>
             
</div>  
       
        )
    }

}

export default SearchBar