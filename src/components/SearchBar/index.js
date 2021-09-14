import React, { Component, useState, useEffect, useRef } from 'react'
import { Wrapper, Content } from '../SearchBar/SearchBar.styles'

//Image
import searchIcon from "../../images/search-icon.svg"



const SearchBar = ({ setSearchTerm }) => {
    const [state, setstate] = useState("")

    const initial = useRef(true)

    useEffect(() => {
        if (initial.current) {
            initial.current = false
            return 
        }
        
        const timer = setTimeout(() => {
            setSearchTerm(state)
        }, 500)
        
        return () => clearTimeout(timer)
    }, [setSearchTerm, state])

    return(
        <Wrapper>
        <Content>
            <img src={searchIcon} alt="search-icon" />
            <input type="text" 
            placeholder="Search Movie"
            onChange={e => setstate(e.currentTarget.value)}
            value={state}
            />
        </Content>
    </Wrapper>
    )
    
}

export default SearchBar