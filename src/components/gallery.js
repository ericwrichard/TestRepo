import './gallery.css'; 
import LeyOne from '../leyimages/one.jpg';
import LeyTwo from '../leyimages/two.jpg';
import LeyThree from '../leyimages/three.jpg';
import LeyFour from '../leyimages/four.jpg';
import LeyFive from '../leyimages/five.jpg';
import LeySix from '../leyimages/six.jpg';
import LeySeven from '../leyimages/seven.jpg';
import LeyEight from '../leyimages/eight.jpg';

const Gallery = () => {
    return (
        <div className="responsive-grid-container">
            <img className='img grid-item' src={LeyOne}/> 
            <img className='img grid-item' src={LeyTwo}/> 
            <img className='img grid-item' src={LeyThree}/> 
            <img className='img grid-item' src={LeyFour}/> 
            <img className='img grid-item' src={LeyFive}/> 
            <img className='img grid-item' src={LeySix}/> 
            <img className='img grid-item' src={LeySeven}/> 
            <img className='img grid-item' src={LeyEight}/> 
        </div>
    );
}

export default Gallery;