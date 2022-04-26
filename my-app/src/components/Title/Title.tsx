export type TitleProps = {
  title: string
}

const Title: React.FC<TitleProps> = (props) => {
  return (
      <h2 style={{
        color: 'white',
        fontFamily: 'myFont',
        fontSize: '35px',
        letterSpacing: '2px',
      }}>
        {props.title}
      </h2>
  )
}

export default Title
