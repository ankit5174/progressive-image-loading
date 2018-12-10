import React, {Component} from 'react';
import './progressive-image.css';
import withIntersectionObserver from '../withIntersectionObserver/withIntersectionObserver';

class ProgressiveImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ready: false
        }
    }

    componentDidMount() {
        this.mounted = true;
    }

    componentWillUnmount() {
        this.mounted = false
    }

    componentWillReceiveProps(props) {
        if(this.mounted && !this.fetched && props.isIntersecting) {
            this.fetched = true;
            const buffer = new Image();
            buffer.onload = () => {this.setState({ ready: true })};
            buffer.src = this.props.src;
        }
    }

    render() {
        const {src, thumb} = this.props;
        const {ready} = this.state;
        return (
            <div className="progressive-loading">
                <div className="progressive-loading-wrapper">
                    {ready ? <img alt="insta" className="original" src={src}/> : null}
                    {<img alt="placeholder" src={thumb} className={ready?"hide":"thumb blur"}/>}
                </div>
            </div>
        )
    }
}

export default withIntersectionObserver(ProgressiveImage);
