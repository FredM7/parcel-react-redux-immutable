import React from "react";
import { Switch, Route } from "react-router-dom";
import { TextBox } from "../../controls/textbox/textbox";
import { SelectBox } from "../../controls/selectbox/selectbox";
import { CheckBox } from "../../controls/checkbox/checkbox";

import { IProps, IState } from "../../types/components/sample/sample";
import { SelectBoxItem } from "../../types/controls/selectbox/selectbox";

export class Sample extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            model: {
                textBox: "",
                selectBox: undefined,
                checkBox: false
            },
            selectBoxItems: []
        }
    }

    componentDidMount() {
        this.setState(prevState => ({
            selectBoxItems: [
                { key: 1, value: "One" },
                { key: 2, value: "Two" }
            ]
        }));
    }

    onControlChanged = (e) => {
        this.setState(prevState => ({
            ...prevState,
            model: {
                ...prevState.model,
                [e.target.name]: (e.target.value == "on" ? 
                                  e.target.checked : 
                                  e.target.value)
            }
        }), function() {
            console.log("SAMPLE STATE VALUE ==>");
            console.log(this.state);
        });
    }

    render() {
        return (
            <div className="components-sample">
                <TextBox
                    name="textBox"
                    text={this.state.model.textBox}
                    onChange={this.onControlChanged} />

                <SelectBox
                    name="selectBox"
                    selected={this.state.model.selectBox}
                    items={this.state.selectBoxItems}
                    onChange={this.onControlChanged} />

                <CheckBox
                    name="checkBox"
                    onChange={this.onControlChanged}
                    checked={this.state.model.checkBox}
                    text="Test" />
            </div>
        );
    }
}