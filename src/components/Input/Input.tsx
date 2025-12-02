import type { ComponentPropsWithoutRef, FC } from "react";

type InputBaseProps = {
  label: string;
  classNameLabel?: string;
  classNameTextArea?: string;
  classNameTextInput?: string;
};

type InputProps = InputBaseProps & {
  rows?: never;
  cols?: never;
} & ComponentPropsWithoutRef<"input">;

type TextareaProps = InputBaseProps & {
  rows?: number;
  cols?: number;
} & ComponentPropsWithoutRef<"textarea">;

const isTextAreaProps = (
  props: InputProps | TextareaProps
): props is TextareaProps => {
  return "rows" in props || "cols" in props;
};

const Input: FC<InputProps | TextareaProps> = (props) => {
  const defaultClassNameLabel = "mb-1 text-sm text-slate-600";
  const defaultClassNameInput =
    "mb-4 w-full rounded border border-primary px-3 py-1 text-base outline-none focus:ring-1 focus:ring-primary";

  if (isTextAreaProps(props)) {
    const { id, label, classNameLabel, classNameTextArea, ...textareaProps } =
      props;
    const textAreaClassName = classNameTextArea
      ? `${defaultClassNameInput} ${classNameTextArea}`
      : defaultClassNameInput;
    return (
      <>
        <label htmlFor={id} className={classNameLabel ?? defaultClassNameLabel}>
          {label}
        </label>
        <textarea
          id={id}
          name={id}
          className={textAreaClassName}
          {...textareaProps}
        ></textarea>
      </>
    );
  }

  const { id, label, classNameLabel, classNameTextInput, ...inputProps } =
    props;

  return (
    <>
      <label htmlFor={id} className={classNameLabel ?? defaultClassNameLabel}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        className={classNameTextInput ?? defaultClassNameInput}
        {...inputProps}
      />
    </>
  );
};

export default Input;
