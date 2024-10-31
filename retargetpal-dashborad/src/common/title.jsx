import React from 'react'
import styled from 'styled-components'
import Container from './container'

export default function Title({text}) {
    return (
        <Container>
            <Text>{text}</Text>
        </Container>
    )
}
const Text=styled.h2`
`
