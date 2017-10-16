import React from 'react';
import {
    unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer,
    unmountComponentAtNode
} from 'react-dom';

export default class Modal extends React.Component {
    /* static displayName = 'ReactPortal'; */

/*     static propTypes = {
        isRendered: PropTypes.bool,
        children: PropTypes.node,
        portalContainer: PropTypes.node
    }; */

    static defaultProps = {
        isRendered: true
    };

    state = {
        mountNode: null
    };

    componentDidMount() {
            this._renderPortal();

    }
/* 
    componentDidUpdate(prevProps) {
        if (prevProps.isRendered && !this.props.isRendered ||
            (prevProps.portalContainer !== this.props.portalContainer &&
                prevProps.isRendered)) {
            this._unrenderPortal();
        }

        if (this.props.isRendered) {
            this._renderPortal();
        }
    } */

    componentWillUnmount() {
        this._unrenderPortal();
    }

    _getMountNode = () => {
         if (!this.state.mountNode) { 
            const portalContainer = this.props.portalContainer || document.body;
            const mountNode = document.createElement('div');
            portalContainer.appendChild(mountNode);
             this.setState({
                mountNode
            }); 
 
             return mountNode;
       } 

         return this.state.mountNode; 
    };

    _renderPortal = () => {
        const mountNode = this._getMountNode();
        renderSubtreeIntoContainer(
            this,
            (
                <div>
                    {this.props.children}
                </div>
            ),
            mountNode,
        );
    };

    _unrenderPortal = () => {
        if (this.state.mountNode) {
            unmountComponentAtNode(this.state.mountNode);
            this.state.mountNode.parentElement.removeChild(this.state.mountNode);
            this.setState({
                mountNode: null
            });
        }
    };

    render() {
        return null;
    }
};