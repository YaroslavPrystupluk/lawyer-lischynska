import { useState, ReactNode } from "react";
import {NotificationContext, ToastType} from "./NotificationContext.ts";
import Toast from "../components/Taost/Toast.tsx";


interface Toast {
    type: ToastType;
    message: string;
}

interface NotificationProviderProps {
    children: ReactNode;
}

export const NotificationProvider = ({ children }: NotificationProviderProps) => {
    const [toast, setToast] = useState<Toast | null>(null);

    const showNotification = (type: ToastType, message: string) => {
        setToast({ type, message });
    };


    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}
            {toast && (
                <Toast
                    type={toast.type}
                    message={toast.message}
                    onClose={() => setToast(null)}
                />
            )}
        </NotificationContext.Provider>
    );
};
