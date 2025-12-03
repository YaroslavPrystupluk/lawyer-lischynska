import {type ComponentPropsWithoutRef, forwardRef} from "react";


type InputProps = {
    id: string;
    label: string;
    classNameLabel?: string;
    classNameInput?: string;
    error?: string;
} & ComponentPropsWithoutRef<"input">;


const Input = forwardRef<HTMLInputElement, InputProps>((
    {id, label, classNameLabel, classNameInput, error, ...props}
    , ref) => {
    const defaultClassNameLabel = "mb-1 text-sm text-slate-600";
    const defaultClassNameInput =
        "mb-4 w-full rounded border border-primary px-3 py-1 text-base outline-none focus:ring-1 focus:ring-primary";

    const defaultClassNameLabelError = "text-sm text-red-500 mt-1";
    const defaultClassNameInputError = "mb-4 w-full rounded border border-red px-3 py-1 text-base outline-none focus:ring-1 focus:ring-red";


    return (
        <>
            <label htmlFor={id}
                   className={error ? defaultClassNameLabelError : (classNameLabel ?? defaultClassNameLabel)}>
                {label}
            </label>
            <input
                id={id}
                name={id}
                className={error ? defaultClassNameInputError : (classNameInput ?? defaultClassNameInput)}
                ref={ref}
                {...props}
            />
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </>
    );
});

export default Input;
