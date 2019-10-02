import styled from "styled-components";

//App.js
//div("app")
const Body = styled.div `
    border: 25px dashed magenta;
    background: rgb(49, 49, 49);
    margin: 50px;
    padding: 50px;
    max-height: 100%;
`
//h1
const Title = styled.h1 `
    border: black dotted 5px;
    background: hotpink;
`
//div("followersGrid")
const Grid = styled.div `
    border: black solid 3px;
    background: teal;
    margin: 50px;
`
//DataFetch.js
//div("tracker")
const Card = styled.div `
    border: white solid 3px;
    background: green;
    padding: 50px;
    margin: 50px;
`

const MyData = styled.div `
    border: blue solid 3px;
    background: purple;
`

const TheirData = styled.p `
    background: red;
    width: 90%;
    padding: 10px;
    text-align: center;
`

const Box = styled.div `
  margin: 0 auto;
`

const CardTitle = styled.h3 `
    background: yellow;
    width: 30%;
`

//div("userData")
// const MyData = styled.div `
//     border: purple solid 3px;
//     background: purple;
// `
//div("userData")
// const MyData = styled.div `
//     border: purple solid 3px;
//     background: purple;
// `

export { Body, Title, Grid, Card, MyData, TheirData, Box, CardTitle };