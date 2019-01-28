import React from "react";
import { IProps, IState } from "../../types/controls/textbox/textbox";

export class TextBox extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.text
        }
    }

    componentWillReceiveProps(nextProps: IProps) {
        this.setState(prevState => ({
            ...prevState,
            text: nextProps.text
        }));
    }

    onChange = (e) => {
        e.persist();
        this.props.onChange(e);
    }

    render() {
        return (
            <div className={`controls-textbox ${this.props.name}`}>
                <input
                    type="text"
                    name={this.props.name}
                    className={this.props.name}
                    onChange={this.onChange}
                    value={this.state.text ? this.state.text : ""} />
            </div>
        );
    }
}