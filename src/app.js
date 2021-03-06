import React from 'react';
import {createUseStyles} from 'react-jss'

import Button from '@lib/button/button.com'
const useStyles = createUseStyles({
  container: {
    width: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
  },

})

export default function App () {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <h1></h1>
      <Button styles={{
        spacing: '20px',
        labelColor: 'red',
        fontWeight: 'bold',
        fontStyle: 'italic',
      }}/>
    </div>
  )
}
