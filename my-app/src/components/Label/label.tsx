import './label.css'

export type LabelProps = {
  value?: string
  unit?: string
  className?: string
}
const Label: React.FC<LabelProps> = (props) => {
  return <div className={props.className}>{props.value + ' ' + props.unit}</div>
}

export default Label
