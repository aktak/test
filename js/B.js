import React from 'react';
import ReactDOM from 'react-dom';

export default class B extends React.Component {

	constructor(props) {
		super(props);
		console.log('B constructor');
	}

	render() {
		console.log('B render');

		return (
			<div style={{ border: 'solid 1px red', float: 'left' }}>
				<svg width="500" height="500" style={{ padding: '50px' }}>

					<path d="M 10 10 L 500 500" stroke="red" />
					<TooltipBg padding={5.0}>
			   		    <text x={this.props.x} y={this.props.y} fill="blue">daniel</text>
					</TooltipBg>

				</svg>
			</div>
		);

	}

}

class TooltipBg extends React.Component {

	constructor(props) {
		super(props);
		this.state = { x: 0, y: 0, w: 0, h: 0 };
	}

	recountState() {

		var s = this.dom.getBBox();
		var dim = { x: s.x, y: s.y, w: s.width, h: s.height };

		if ((dim.x !== this.state.x) || (dim.y !== this.state.y) || (dim.w !== this.state.w) || (dim.h !== this.state.h)) {
			this.setState(dim);
		}

	}

	componentDidMount() {
		this.recountState();
	}

	componentDidUpdate() {
		this.recountState();
	}

	render() {

		//console.log('BG render');

		var bg = null;

		var padding = ('padding' in this.props) ? this.props.padding : 3.0;
		var stroke = ('stroke' in this.props) ? this.props.stroke : '#909090';

		if (this.state.w > 0) {

			// zarovnavam na 0.5px
			var x = Math.floor(this.state.x - 0.5) + 0.5;
			var y = Math.floor(this.state.y - 0.5) + 0.5;
			var w = Math.ceil(this.state.w);
			var h = Math.ceil(this.state.h);

			bg = <rect x={x - padding} y={y - padding} 
					   width={w + padding * 2} height={h + padding * 2} 
					   fill="white" fillOpacity={0.85} 
					   rx={5} ry={5} 
					   stroke={stroke} strokeWidth={1.0} />;
		}

		return (<g>
			{bg}
			<g ref={(element) => { this.dom = element; }}>
				{this.props.children}
			</g>
		</g>
		);
	}
}


window.reactRenderB = function (props, id) {
	ReactDOM.render(<B x={10} y={10} />, document.getElementById(id));
	//alert('a');
	ReactDOM.render(<B x={50} y={50} />, document.getElementById(id));
};
