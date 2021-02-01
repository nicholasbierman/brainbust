import React, {useState} from "react";
import { useSelector } from "react-dom";
import "./ProfilePage.css"

const Search = () => {
    const [searchItem, setSearchItem] = useState("")
    
    const categories = useSelector(state => {
        return state.categories.categories
    })
    
    const handleSubmit = () => {
        return null
    }

    return (
        <div className="search-container">
            <form className="search-container__form" onSubmit={handleSubmit}>
                <label id="label" for="search"></label>
                <input 
                id="input" 
                name="search" 
                placeholder="Search a Quiz by name..."
                value={searchItem}
                onChange={(e)=> {setSearchItem(e.target.value)}}></input>
                <datalist id="categories-container">
                    {categories && categories.map(category => {
                        return (
                            <option value={category.name} />
                        )
                    })}
                </datalist>
                <button type="submit" className="search-container__button">Search</button>
            </form>
        </div>
    )
}

export default Search;