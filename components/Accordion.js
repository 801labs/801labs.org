import React, {createRef, Component} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

class Accordion extends Component {
    state = {
        isOpen: false,
    }

    detailsElement = createRef();

    toggle = () => {
        this.setState({isOpen: this.detailsElement.current.hasAttribute('open')});
    }

    componentDidMount() {
        this.setState({isOpen: !!this.props.initialOpen})

        if (this.props.initialOpen) {
            this.detailsElement.current.setAttribute('open', true);
        }
    }

    render() {
        return <details ref={this.detailsElement} className="bg-white text-black mb-8" onToggle={this.toggle}>
            <summary>
                <span className="py-5 px-10 fluid-text-lg font-bold flex justify-between items-center">
                    {this.props.title}
                    <FontAwesomeIcon
                        className="ml-5"
                        icon={this.state.isOpen ? faMinus : faPlus}
                    />
                </span>
            </summary>
            <div className="py-5 px-10 space-y-8">
                {this.props.children}
            </div>
        </details>
    }
}

export default Accordion