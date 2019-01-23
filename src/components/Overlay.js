import React, {Component} from 'react';
export default class Overlay extends Component{
    
    getOverlayClass(overlayStatus){
        let showOverlay = overlayStatus ? "overlay" : "hiddenOverlay";
        return showOverlay;
    }

    render(){
        return (
            <div className={this.getOverlayClass(this.props.showOverlay)}>
                <div className="modal">
                {this.props.children}
                </div>
                <div onClick={()=>this.props.hideOverlay()} className="bg"></div>
            </div>
        )
    }
}