import './quote.css';

const Quote = ({quote, name, color}) => {
    return (
        <div className="quote-item">
            <div className={`bar ${color}`}></div>
            <div className='quote-content'>
            <p>
                "{ quote }"
            </p>
            <br></br>
            <p className='text'> - { name } </p>
            </div>
        </div>
    );
}

export default Quote;