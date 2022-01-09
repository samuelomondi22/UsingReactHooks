import React, {useState} from 'react'

const Search = (props) => {
    const [words, setWords] = useState("")
    return (
        <div>
            <h5>{props.title}</h5>
            <input placeholder="Enter text here...." onChange={(e) => setWords(e.target.value)}/>
            <br/>
            {words}
        </div>
    )
}

export default Search;      