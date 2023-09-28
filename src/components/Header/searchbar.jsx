import React from "react";
import '../../css/search.css'
import Tags from './Tags'

function Search() {
    return (
        <div className="center">
            <h1 className="white">Project-iON</h1>
            <p className="white">project your project</p>
            <div class="relative p-3 border rounded-lg w-full max-w-lg">
                <Tags/>
            </div>
        </div>
    )
}

export default Search;