import './Container.css'
import img from './view.jpeg'

function Container() {
    return(
        <section className="container">
            <div className="images">
                <img src={img}></img>
            </div>
            <div className="overlay">
            <h1>Sankranti</h1>
            <p>Makar Sankranti is a Hindu harvest festival which 
                falls on a fixed Gregorian date of January 14th every 
                year with an exception of a few years when the festival 
                is celebrated on January 15-th; <b> Makar Sankranti 
                2021 will be celebrated on 14-th January 2021. </b> </p>
            </div>
            <div className="info">
                <h2>Know more about Sankranti!!</h2>
            </div>
        </section>
    );
}

export default Container;
