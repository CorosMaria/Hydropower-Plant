import React from 'react'
import './image.scss'
import Label from '../../components/Label/label'

export type ImageProps = {
  image: string
  className?: string
  altText?: string
  onClick?: any
  mode?: string
  hasStateIndicator?: boolean
  hasLabel?: boolean
  showComponentName?: boolean
  componentName?: string
}

const Image: React.FC<ImageProps> = (props) => {
  const [running, setRunning] = React.useState(true)

  const handleToggleRunningMode = () => {
    setRunning(!running)
  }

  const renderStateIndicator = () => {
    switch (running) {
      case true:
        return (
          <img
            src="run.png"
            alt="Run Mode"
            className="mode-Images"
            onClick={handleToggleRunningMode}
          />
        )
      case false:
        return (
          <img
            src="stop.png"
            alt="Stop Mode"
            className="mode-Images"
            onClick={handleToggleRunningMode}
          />
        )
    }
  }

  const renderLabel = () => {
    return <Label value="20" unit="MWh" className="label info" />
  }

  const renderName = () => {
    return <div className="component-name"> {props.componentName} </div>
  }

  return (
    <div className="container">
      {props.hasLabel && renderLabel()}
      {props.hasStateIndicator && renderStateIndicator()}
      <img
        src={props.image}
        alt={props.altText}
        className={props.className}
        onClick={props.onClick}
      />
      {props.showComponentName && renderName()}
    </div>
  )
}

export default Image
