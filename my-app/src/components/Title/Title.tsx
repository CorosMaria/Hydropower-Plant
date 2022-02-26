export type TitleProps = {
  title: string
}

const Title: React.FC<TitleProps> = (props) => {
  return (
    <div
      style={{
        color: 'white',
        textAlign: 'center',
        fontFamily: 'myFont',
        fontSize: 'large',
      }}
    >
      <h2>{props.title}</h2>
    </div>
  )
}

export default Title
