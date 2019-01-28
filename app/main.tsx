import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { Sample } from "./components/sample/sample";

import { ReduxProps } from "./types/redux-props";

interface IProps extends ReduxProps {
    name: string;
    count: number;
}

interface IState {
    
}

const mapStateToProps = (state: any) => ({
    name: state.name,
    count: state.count
})

export default connect(mapStateToProps)(
    class Main extends React.Component<IProps, IState> {
        constructor(props) {
            super(props);
        }

        increment = () => {
            console.log(this.props);
            this.props.dispatch({
                type: "Increment"
            });
            //There's also:
            //getState()
            //dispatch(action)
            //subscribe(listener)
            //replaceReducer(nextReducer)
        }

        render() {
            return (
                <div>
                    Main {this.props.name}

                    <div>
                        {this.props.count}
                    </div>
                    <input type="button" value="Increment" 
                        onClick={this.increment} />

                    <Switch>
                        <Route exact path="/" 
                            render={() => (<Sample/>)} />

                        <Route path="/new" 
                            render={() => (<div>New</div>)} />

                    </Switch>
                </div>
            );
        }
    }
)