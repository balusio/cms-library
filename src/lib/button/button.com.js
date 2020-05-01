import React from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  myLabel: props => ({
    padding: props.styles.spacing,
    display: 'block',
    color: props.styles.labelColor,
    fontWeight: props.styles.fontWeight,
    fontStyle: props.styles.fontStyle
  })
})

export default (props) => {
  const classes = useStyles(props)
  return (
    <button className={classes.myLabel}>
      click me!
    </button>
  )
}
