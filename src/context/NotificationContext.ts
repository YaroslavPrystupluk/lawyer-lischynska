import { createContext } from "react";

export type ToastType = "success" | "danger";

export interface NotificationContextProps {
    showNotification: (type: ToastType, message: string) => void;
}

export const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);
