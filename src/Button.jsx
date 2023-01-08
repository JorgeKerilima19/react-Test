import PropTypes from "prop-types"

export function Button({text,name}) {
  return <button onClick={(e)=>{
    console.log("The event target is", e.target)
    console.log("The event value is", e.target.value)//null bc this is for inputs
  }}>{text}- {name}</button>;
}

Button.propTypes={
    text:PropTypes.string.isRequired
}
Button.defaultProps={
    name:"Some user"
}