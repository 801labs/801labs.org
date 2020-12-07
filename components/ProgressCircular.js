import React, {Component} from "react"

class ProgressCircular extends Component {
    static defaultProps = {
        rotate: 0,
        size: 32,
        value: 0,
        width: 4,
    }

    radius = 20;
    circumference = 2 * Math.PI * this.radius;
    strokeDashArray = Math.round(this.circumference * 1000) / 1000;

    normalizeValue(value) {
        return Math.max(0, Math.min(value, 100));
    }

    render() {
        const normalizedValue = this.normalizeValue(this.props.value);
        const viewBoxSize = this.radius / (1 - this.props.width / this.props.size);
        const strokeDashOffset = `${((100 - normalizedValue) / 100) * this.circumference}px`;
        const strokeWidth = this.props.width / this.props.size * viewBoxSize * 2;

        return <div
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={normalizedValue}
            style={{
                transform: `rotate(${this.props.rotate || 0}deg)`,
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={`${viewBoxSize} ${viewBoxSize} ${2 * viewBoxSize} ${2 * viewBoxSize}`}>
                <linearGradient
                    id="a"
                    gradientUnits="userSpaceOnUse"
                    x1={viewBoxSize}
                    y1={viewBoxSize * 1.5}
                    x2={viewBoxSize * 2}
                    y2={viewBoxSize * 1.5}>
                    <stop offset="0" stopColor="#fff" stopOpacity="0"/>
                    <stop offset="1" stopColor="#fff" stopOpacity=".2"/>
                </linearGradient>
                <circle
                    fill="transparent"
                    cx={2 * viewBoxSize}
                    cy={2 * viewBoxSize}
                    r={this.radius}
                    stroke="url(#a)"
                    strokeWidth={strokeWidth}
                    strokeDasharray={this.strokeDashArray}
                    strokeDashoffset={strokeDashOffset} />
            </svg>
        </div>
    }
}

export default ProgressCircular