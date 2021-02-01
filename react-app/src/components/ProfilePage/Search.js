import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProfilePage.css"
import { searchQuizByTitle } from "../../store/quiz"

const Search = () => {
    const [searchItem, setSearchItem] = useState("")
    const dispatch = useDispatch();
    const categories = useSelector(state => {
        return state.categories.categories
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchItem)
        dispatch(searchQuizByTitle(searchItem))
        setSearchItem("")
    }

    return (
        <div className="search-container">
            <form className="search-container__form" onSubmit={handleSubmit}>
                <label id="label" for="search"></label>
                <input 
                id="input" 
                name="search" 
                list="categories"
                placeholder="Search Quizzes by name or category..."
                value={searchItem}
                onChange={(e)=> {setSearchItem(e.target.value)}}></input>
                <datalist id="categories">
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