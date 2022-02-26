import Canvas from '../Canvas/canvas'

export type LoadingProps = {}

const Loading: React.FC<LoadingProps> = (props) => {
  const drawLoading = (context: CanvasRenderingContext2D) => {
    var sin = Math.sin(Math.PI / 6)
    var cos = Math.cos(Math.PI / 6)
    context.translate(100, 100)
    var c = 0
    for (var i = 0; i <= 12; i++) {
      c = Math.floor((255 / 12) * i)
      context.fillStyle = 'rgb(' + c + ', ' + c + ', ' + c + ')'
      context.fillRect(0, 0, 100, 10)
      context.transform(cos, sin, -sin, cos, 0, 0)
    }
  }

  return (
    <div>
      <Canvas draw={drawLoading} width={'200px'} height={'200px'} />
    </div>
  )
}

export default Loading
