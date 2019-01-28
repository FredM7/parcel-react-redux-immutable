import React from "react";
import { IProps, IState } from "../../types/controls/textbox/textbox";

export class CheckBox extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            //Use string for checked since we need to format the value
            //to fit with out controls.
            //Not using initial string will cause a double click problem.
            checked: this.props.checked,
            text: this.props.text
        }
    }

    componentWillReceiveProps(nextProps: IProps) {
        this.setState(prevState => ({
            ...prevState,
            text: nextProps.text,
            checked: nextProps.checked
        }));
    }

    onChange = (e) => {
        e.persist();
        this.setState(prevState => ({
            ...prevState,
            checked: e.target.checked
        }));

        //Set the value so that out parent setstate will
        //function as expected
        //e.target.value = e.target.checked;
        
        this.props.onChange(e);
    }

    render() {
        return (
            <div className={`controls-checkbox ${this.props.name}`}>
                <input
                    type="checkbox"
                    name={this.props.name}
                    className={this.props.name}
                    onChange={this.onChange}
                    checked={this.state.checked} />

                <label>{this.state.text ? this.state.text : ""}</label>
            </div>
        );
    }
}