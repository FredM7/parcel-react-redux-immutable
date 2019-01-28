import { SelectBoxItem } from "../../controls/selectbox/selectbox";

export interface IProps {
    
}

export interface IState {
    model: SampleComponentModel;
    selectBoxItems: SelectBoxItem[];
}

export class SampleComponentModel {
    textBox: string;
    selectBox: SelectBoxItem;
    checkBox: boolean;
}