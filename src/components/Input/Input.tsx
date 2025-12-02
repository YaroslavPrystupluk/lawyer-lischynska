import type {ComponentPropsWithoutRef, FC} from 'react';


type InputProps = {
       rows?: never;
    id: string;
    label: string;
    classNameLabel?: string,
    classNameTextArea?: string,
    classNameTextInput?: string,
} & ComponentPropsWithoutRef<'input'>;

type TextareaProps = {
    id: string;
    label: string;
    classNameLabel?: string,
    classNameTextArea?: string,
    classNameTextInput?: string,
    rows?: string;

} & ComponentPropsWithoutRef<'textarea'>;

const isTextAreaProps = (props: InputProps | TextareaProps): props is TextareaProps => {
    return "rows" in props ;
}

const Input: FC<InputProps | TextareaProps> = ({id, label, classNameLabel, classNameTextArea, classNameTextInput, ...props}) => {
    const defaultClassNameLabel = "mb-1 text-sm text-slate-600";
    const defaultClassNameInput = "mb-4 w-full rounded border border-primary px-3 py-1 text-base outline-none focus:ring-1 focus:ring-primary";
    const defaultClassNameTextArea = "mb-4 h-32 w-full resize-none rounded border border-primary px-3 py-1 text-base outline-none focus:ring-1 focus:ring-primary"


    if (isTextAreaProps(props))
        return (
            <>
                <label className={classNameLabel ?? defaultClassNameLabel}>{label}</label>
                <textarea id={id} name={id} className={classNameTextArea ?? defaultClassNameTextArea} {...props}></textarea>
            </>
        )

    return (
        <>
            <label htmlFor={id} className={classNameLabel ?? defaultClassNameLabel}>{label}</label>
            <input id={id} name={id} className={classNameTextInput ?? defaultClassNameInput} {...props}/>
        </>
    );
};

export default Input;