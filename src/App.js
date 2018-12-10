import React, {Component} from 'react';
import './App.css';

import original_1 from './assets/1.jpg';
import thumb_1 from './assets/1.thumb.jpg';

import original_2 from './assets/2.jpg';
import thumb_2 from './assets/2.thumb.jpg';
import Cards from "./components/cards/cards";
import ProgressiveImage from "./components/progressive-image/progressive-image";

import original_3 from './assets/3.jpg'
import thumb_3 from './assets/3.thumb.jpg'

import original_4 from './assets/4.jpg'
import thumb_4 from './assets/4.thumb.jpg'

import original_5 from './assets/5.jpg'
import thumb_5 from './assets/5.thumb.jpg'

import original_6 from './assets/6.jpg'
import thumb_6 from './assets/6.thumb.jpg'

const images = [
    {src: original_1, thumb: thumb_1},
    {src: original_2, thumb: thumb_2},
    {src: original_3, thumb: thumb_3},
    {src: original_4, thumb: thumb_4},
    {src: original_5, thumb: thumb_5},
    {src: original_6, thumb: thumb_6},
];

class App extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    {images.map(({src, thumb}, index) => {
                        return (
                            <Cards key={index} title={src}>
                                <ProgressiveImage src={src} thumb={thumb}/>
                            </Cards>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default App;
