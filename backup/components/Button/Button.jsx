import './button.scss'
const Button = props => {
  const color = props.color === 'light' ? 'btn__light' : 'btn__dark'
  const style = {
    width: props?.wFull ? '100%' : ''
  }
  return (
    <button
      type={props?.type ? `${props.type}` : 'text'}
      style={style}
      className={`btn ${color}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  )
}

export default Button
