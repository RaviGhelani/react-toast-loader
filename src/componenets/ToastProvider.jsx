import React, { createContext, useContext, useState } from "react";
import Toast from "./Toast";
import AnimatedLoader from "./AnimatedLoader";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState({ open: false, message: "", severity: "success" });
    const [loadingOpen, setLoadingOpen] = useState(false);

    const showToast = (message, severity = "success") => {
        setToast({ open: true, message, severity });
        setTimeout(() => setToast((prev) => ({ ...prev, open: false })), 3000);
    };

    const showLoading = (isLoading) => setLoadingOpen(isLoading);

    return (
        <ToastContext.Provider value={{ showToast, showLoading }}>
            {children}
            <Toast {...toast} />
            <AnimatedLoader loadingOpen={loadingOpen} />
        </ToastContext.Provider>
    );
};

export const useToast = () => useContext(ToastContext);
