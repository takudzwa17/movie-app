import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Content } from '../HeroImage/HeroImage.styles'

import { Wrapper } from './BreadCrumb.styles'

const BreadCrumb = ({ movieTitle }) => {
    return(
        <Wrapper>
        <Content>
            <Link to="/">
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
    )
    
}

export default BreadCrumb