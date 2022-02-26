import './button.scss'
import Button from '@material-ui/core/Button'
import React from 'react'

export type ButtonProps = {
  title?: string
  startIcon?: {}
  endIcon?: {}
  onClick?: any
}

const BasicButton: React.FC<ButtonProps> = (props) => {
  return (
    <div className="controlButtons">
      <Button
        variant="contained"
        onClick={props.onClick}
        size="large"
        startIcon={props.startIcon}
        endIcon={props.endIcon}
      >
        {props.title}
      </Button>
    </div>
  )
}

export default BasicButton
