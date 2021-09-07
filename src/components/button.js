import { useState } from "react"

const Button = ({
  handleClick,
  primaryText,
  primaryColor,
}) => {
  const [text, setText] = useState(primaryText);
  const [backgroundColor, setColor] = useState(primaryColor);
  const handleMouseClick = e => {
    e.preventDefault();
    setText('I am clicked');
    setColor('red');
    handleClick(e);
  }
  const handleMouseLeave = e => {
    e.preventDefault();
    setText(primaryText);
    setColor(primaryColor)
  }
  return (
    <div className="container">
      <button
        onClick={handleMouseClick}
        onMouseLeave={handleMouseLeave}
        style={{ backgroundColor }}
      >
        {text}
      </button>
    </div>

  )
}

export default Button;
