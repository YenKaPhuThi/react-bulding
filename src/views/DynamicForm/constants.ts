export interface DynamicFormModel {
    schema?: object,
    formData?: object,
    onChange?: (event: any) => void,
    onSubmit?: (event: any) => void,
}