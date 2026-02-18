import { useState, useEffect, ReactNode } from "react";
import Toast from "../Taost/Toast.tsx";
import {NotificationContext, NotificationContextProps} from "../../context/NotificationContext.tsx";

type ToastType = "success" | "danger";

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
    const [toast, setToast] = useState<Notification | null>(null);

    const showNotification: NotificationContextProps["showNotification"] = (type: ToastType, message: string) => {
        setToast({ type, message });
    };

    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => setToast(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [toast]);

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
