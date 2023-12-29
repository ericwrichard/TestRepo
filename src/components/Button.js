import './Button.css';

const Button = ({ label, secondary, click }) => {
    return (
        <button onClick={click} className={`btn ${secondary ? 'secondary' : 'primary'}`}> { label } </button>
    )
}

export default Button