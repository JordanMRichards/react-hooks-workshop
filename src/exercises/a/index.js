import React from 'react'
import ExerciseContainer from '../../ExerciseContainer'

import MultiplierClass from './Multiplier/class'
import MultiplierFunctional from './Multiplier/functional'

const description = (
  <div>
    Welcome to multiplier! You are given two default props (<b>initialNum</b> & <b>initialMultiplyBy</b>) and two input fields.
    Multiply the numbers together and display the result.
    The class version has been created for you.
    <hr />
    Implement hooks to the functional component to make it function the same as the class version.
    <hr />
    It should cleanup on unmount.
    <hr />
    <b>The files for this exercise can be found in src/exercises/a/Multiplier</b>
  </div>)

export default () => (
  <ExerciseContainer
    exerciseKey='a'
    title="Number Multiplier"
    description={description}
    ClassVersion={MultiplierClass}
    FunctionalVersion={MultiplierFunctional}
  />
)
