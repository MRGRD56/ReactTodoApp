import * as React from "react";
import IInputFormProps from "./IInputFormProps";
import IInputFormState from "./IInputFormState";
import {MDBInput, MDBInputGroup, MDBRipple} from "mdb-react-ui-kit";

/**
 * Represents an inline form with an input field and a submit button.
 */
export default class InputForm extends React.Component<IInputFormProps, IInputFormState> {
    constructor(props: IInputFormProps) {
        super(props);

        this.state = {
            inputValue: ""
        };
    }

    private onTextChange(event: React.FormEvent<HTMLInputElement>) {
        const text = event.currentTarget.value;
        this.setState({
            inputValue: text
        });
    }

    private onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const value = this.state.inputValue;

        if (this.props.submitIfEmpty !== true && !value.trim()) return;

        this.props.onSubmit?.(value);

        this.setState({
            inputValue: ""
        });
    }

    render() {
        return (
            <form style={{margin: "10px 5px 0 5px"}} onSubmit={event => this.onSubmit(event)}>
                <MDBInputGroup className="flex-nowrap">
                    <MDBInput wrapperClass="col"
                              label={this.props.inputLabel}
                              type={this.props.inputType ?? "text"}
                              value={this.state.inputValue}
                              onChange={(event: React.FormEvent<HTMLInputElement>) => this.onTextChange(event)}/>
                    <MDBRipple rippleColor={this.props.buttonRippleColor ?? "light"}
                               outline={this.props.buttonIsOutline ?? false}
                               color={this.props.buttonBootstrapColor ?? "primary"}
                               type="submit">
                        {this.props.buttonText ?? "submit"}
                    </MDBRipple>
                </MDBInputGroup>
            </form>
        );
    }
}