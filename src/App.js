
import './App.css';
import Lottie from 'lottie-react';
import lottieSrc from './fireworks.json';
import Button from './components/Button';
import { useEffect, useState } from 'react';
import Gallery from './components/gallery';
import Quote from './components/quote';
const MainContent = ({onClick}) => {
  return (
    <div className='page-container'>
        <div className='lottie-cont'>
          <Lottie 
          animationData={lottieSrc}
          loop={true}
          autoplay={true}
          style={{ width: 400, height: 400 }}
          />
        </div>

        <div className='form'>
          <h1> Hi Ley, will you be my <span className='ny-text'> New Years </span> kiss? 💋 </h1>
          <div className='btn-cont'>
            <Button click={onClick} label={'Yes'} />
            <Button click={onClick} label={'Yes but in red'} secondary={true}/>
          </div>
        </div>

      </div>
  );
}

const SecondContent = ({ back }) => {

  const [showOfficeQuotes, setShowOfficeQuotes] = useState(false);

  const onShow = () => setShowOfficeQuotes(true);
  const onHide = () => setShowOfficeQuotes(false)

  return (
    <div className='page-container'>
      {
        showOfficeQuotes ? <OfficeQuotes back={onHide}/> : 
        <div className='second-form'>
        <h1> Thank you for all the great memories in <span className='year'> 2023 </span>, looking forward to <span className='year'> 2024 </span> bringing even more ❤️</h1>
        <Gallery />
        <div className='btn-cont'>
          <Button label={'Fuck it - Office quotes'} click={onShow}/>
          <Button label={'Back'} click={back} secondary={true}/>
          <br />
          <br />
        </div>
      </div>
      }
    </div>
  );
}

const OfficeQuotes = ({ back }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling animation
    });
  }, [])

  return (
    <div className='quotes-page'>
      <h1>Why are you the way that you are?</h1>
      <br></br>
        <h2> (Which is a kind, generous, smart, beautiful, fun & successful Women 😘 - I am insanely proud of you ❤️ )  </h2>
      <div className="responsive-grid-container">
        <Quote quote={'It’s like a long book that you never want to end. And you’re fine with that because, you just never want to leave it.'} name={'Pam'} color={'pink'}/>
        <Quote quote={'One thing that will make you give up on everything you thought you know, every instinct, ever rational calculation. Love.'} name={'Jim'} color={'blue'}/>
        <Quote quote={'I just want to be friends, plus a little extra. Also, I love you.'} name={'Dwight'} color={'purple'}/>
        <Quote quote={'I think we all deserve someone who wants to be with us.'} name={'Phyllis'} color={'green'}/>
        <Quote quote={'You just gotta do everything you can to get the one woman who’s gonna make all this worth it. At the end of the day, you gotta jump.'} name={'Jim'} color={'gold'}/>
        <Quote quote={'You’re the nicest person I’ve ever met.'} name={'Andy'} color={'last'}/>
      </div>
      <Button label={'Back to Ley Gallery'} click={back}/>
    </div>
  );
}

function App() {

  const [showSecond, setShowSecond] = useState(false);

  const onClick = () => setShowSecond(true);
  const onBack = () => setShowSecond(false);

  return (
    <div className="app">
      {
        showSecond ? <SecondContent back={onBack}/> : <MainContent onClick={onClick} />
      }
    </div>
  );
}

export default App;
