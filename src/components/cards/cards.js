import React, {Component} from 'react';
import './cards.css';

class Cards extends Component {

    render() {
        const {title, children} = this.props;
        return (
            <div className="card">
                <div className="card-image">{children}</div>
                <div className="card-content">
                    <p className="title is-4">{title}</p>
                </div>
            </div>
        )
    }
}

export default Cards;
