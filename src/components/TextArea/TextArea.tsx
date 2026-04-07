import {ComponentPropsWithoutRef, forwardRef} from "react";


type TextareaProps = {
    id: string;
    label: string;
    classNameLabel?: string;
    classNameTextArea?: string;
    rows?: number;
    cols?: number;
    error?: string;
} & ComponentPropsWithoutRef<"textarea">;

const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>((
    {id, label, classNameLabel, classNameTextArea, error, ...props}
    , ref) => {
    const defaultClassNameLabel = "mb-1 text-sm text-slate-600";
    const defaultClassNameTextArea =
        "mb-4 w-full rounded border resize-none border-primary px-3 py-1 text-base outline-none focus:ring-1 focus:ring-primary";

    const defaultClassNameLabelError = "text-sm text-red-500 mt-1";
    const defaultClassNameTextAreaError = "mb-1 w-full resize-none rounded border border-red-500 px-3 py-1 text-base outline-none focus:ring-1 focus:ring-red";

    return (
        <>
            <label htmlFor={id} className={error ? defaultClassNameLabelError : (classNameLabel ?? defaultClassNameLabel)}>
                {label}
            </label>
            <textarea
                id={id}
                name={id}
                ref={ref}
                className={error ? defaultClassNameTextAreaError : (classNameTextArea ?? defaultClassNameTextArea)}
                {...props}
            ></textarea>
            {error && <p className="text-sm text-red-500 mb-4">{error}</p>}
        </>
    );
});

export default TextArea;