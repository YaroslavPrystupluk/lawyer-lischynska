import { FC, useEffect } from "react";

type ToastProps = {
    type: string;
    message: string;
    onClose: () => void;
}

const Toast: FC<ToastProps> = ({ type, message, onClose }) => {
    useEffect(() => {
        const closeToast = setTimeout(() => onClose(), 5000);
        return () => clearTimeout(closeToast);
    }, [onClose]);

    return (
        <div
            id={`toast-${type}`}
            className={`fixed bottom-4 left-4 flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg z-50 bg-white 
              border-l-4
              ${type === "danger" ? "border-red-500 text-red-800" : "border-green-500 text-green-800"}`}
        >
            <div
                className={`flex items-center justify-center w-8 h-8 rounded-full
                    ${type === "danger" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
            >
                {type === "danger" ? (
                    <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                    </svg>
                ) : (
                    <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                )}
            </div>
            <div className="text-sm font-medium">{message}</div>
        </div>
    );
};

export default Toast;
