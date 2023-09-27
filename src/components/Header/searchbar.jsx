import React from "react";
import '../../css/search.css'

function Search() {
    return (
        <div className="center">
            <h1 className="white"><b>Project-iON</b></h1>
            <p className="white">project your project</p>
            <div class="relative p-3 border rounded-lg w-full max-w-lg">
                <form action="/">

                    <input dusk="hero_search" type="text" class="rounded-md w-full p-3 pr-10 " name="term" placeholder="Search based on Topic or Description" />
                    <button type="submit" class="absolute right-6 top-6 rounded-lg search">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Search;