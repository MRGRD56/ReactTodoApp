export default interface IInputFormProps {
    /**
     * A function to be called when the form submitted.
     * @param text Input field value.
     */
    onSubmit?: (text: string) => void;
    /**
     * MDBRipple content ?? "submit".
     */
    buttonText?: string;
    /**
     * MDBInput.label.
     */
    inputLabel?: string;
    /**
     * MDBRipple.color ?? "primary".
     */
    buttonBootstrapColor?: string;
    /**
     * MDBRipple.outline ?? false.
     */
    buttonIsOutline?: boolean;
    /**
     * MDBInput.type ?? "text".
     */
    inputType?: string;
    /**
     * MDBRipple.rippleColor ?? "light".
     */
    buttonRippleColor?: string;
    /**
     * Submit the form even if the value in the input field is empty.
     */
    submitIfEmpty?: boolean;
}