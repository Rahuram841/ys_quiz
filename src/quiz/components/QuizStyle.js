
import React, { Component } from 'react'
import styled from 'styled-components'
 
//styled component Li
const Li = styled.li`
  color : red;
  font-size : 23px
`
 
//Styled component Ul
const Ul = styled.ul`
  border : 2px solid green;
  width: 40%;
  list-style-type:none
`
 
const StudentList = (props) => {
  const {name, classNo, roll, addr} = props
  return(
    <Ul>
      <Li>Name : {name}</Li>
      <Li>Class: {classNo}</Li>
      <Li>Roll: {roll}</Li>
      <Li>Address : {addr}</Li>
    </Ul>
  )
}
 
export default StudentList