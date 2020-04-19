import React from 'react'
import Part from './part';

const Content = (props) => (
    <>
        <Part part = {props.part1} exercises = {props.exercises1}/>
        <Part part = {props.part2} exercises = {props.exercises2}/>
        <Part part = {props.part3} exercises = {props.exercises3}/>
    </>
)

export default Content;