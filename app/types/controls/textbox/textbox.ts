import React, { ChangeEventHandler } from "react";

export interface IProps {
    name: string;
    onChange: ChangeEventHandler<any>;
    text?: string;
    checked?: boolean;
}

export interface IState {
    checked?: boolean;
    text?: string;
}