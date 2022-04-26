import React from 'react'
import './image.scss'
import Label from '../../components/Label/label'
import { useSelector } from 'react-redux'
import { MainState } from '../../models/models'

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
  value?: number
  unit?: string
  onCenter?: boolean
}

type Props = ImageProps & {

}

const Image: React.FC<Props> = (props) => {
  const [running, setRunning] = React.useState(true)
  const systemOn = useSelector((s: MainState) => s.systemOn)

  const handleToggleRunningMode = () => {
    setRunning(!running)
  }

  const renderStateIndicator = () => {
    switch (running && systemOn) {
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
    return <Label value={props.value} unit={props.unit} className="label info" />
  }

  const renderName = () => {
    return <div style={props.onCenter ? { marginLeft: "auto", marginRight: "auto" } : {}} className="component-name"> {props.componentName} </div>
  }

  return (
    <div>
      {props.hasStateIndicator && renderStateIndicator()}
      <img
        src={props.image}
        alt={props.altText}
        className={props.className}
        onClick={props.onClick}
      />
      {props.hasLabel && renderLabel()}
      {props.showComponentName && renderName()}
    </div>
  )
}

export default Image
