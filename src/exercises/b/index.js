import React from 'react'
import ExerciseContainer from '../../ExerciseContainer'

import CrazyCounterClass from './CrazyCounter/class'
import CrazyCounterFunctional from './CrazyCounter/functional'

const description = (
  <div>
    Welcome to Crazy Counter! You are given two default props (<b>initialInterval</b> & <b>colours</b>) and an input field which controls the active interval speed the timer counts up with.
    <hr />
    Implement hooks to the functional component to make it function the same as the class version.
    <hr />
    The timer should incrememnt by the interval specified via the input.
    <hr />
    Make the count text change colour by choosing a random colour from the colours array.
    <hr/>
    There should also be a button to reset the timer to 0.
    <hr />
    It should cleanup on unmount.
    <hr />
    <b>The files for this exercise can be found in src/exercises/b/CrazyCounter</b>
  </div>)

export default () => (
  <ExerciseContainer
    exerciseKey='b'
    title="Crazy Counter"
    description={description}
    ClassVersion={CrazyCounterClass}
    FunctionalVersion={CrazyCounterFunctional}
  />
)
