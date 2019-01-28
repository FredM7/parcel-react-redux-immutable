import { ChangeEventHandler } from "react";

export interface IProps {
    name: string;
    onChange: ChangeEventHandler<any>;
    items?: SelectBoxItem[];
    selected?: SelectBoxItem;
}

export interface IState {
    
}

export class SelectBoxItem {
    key: any;
    value: string;
}