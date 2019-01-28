import React from "react";
import { IProps, IState } from "../../types/controls/selectbox/selectbox";

export class SelectBox extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    onChange = (e) => {
        e.persist();
        this.props.onChange(e);
    }

    render() {
        return (
            <div className="controls-selectbox">
                <select
                    name={this.props.name}
                    onChange={this.onChange}>

                    <option value={-1}>[Select]</option>

                    {this.props.items.map(function(item, index) {

                        return (<option key={index} value={item.key}>{item.value}</option>);
                    
                    })}
                </select>
                <div className="fa fa-caret-down"></div>
            </div>
        );
    }
}