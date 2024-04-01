import './Button.css'
export const Button = (props) => {
  return (
    <button className='button' {...props} style={{ ...props.style }}></button>
  )
}
