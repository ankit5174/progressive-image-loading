import React from 'react';

export default (Component) => {
    return class extends React.PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                isIntersecting: false
            };
            this.wrapper = null;
            this.mounted = false;
            this.options = props.options || {
                root: null,
                rootMargin: '0px',
                threshold: 0.2
            }
        }

        handleObserverUpdate = (entries) => {
            const {isIntersecting} = entries.filter(
                entry => entry.target === this.wrapper
            )[0];

            this.mounted && this.setState({ isIntersecting: isIntersecting })
        };

        componentDidMount() {
            this.mounted = true;
            this.observer = new IntersectionObserver(this.handleObserverUpdate, this.options);
            this.observer.observe(this.wrapper);
        }

        componentWillUnmount() {
            this.mounted = false;
            this.observer.disconnect();
        }

        render() {
            return (
                <div ref={wrapper => (this.wrapper = wrapper)}>
                    <Component isIntersecting={this.state.isIntersecting} {...this.props} />
                </div>
            )
        }
    }
}