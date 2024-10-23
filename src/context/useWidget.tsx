import { useContext, useState, createContext, ReactNode, useEffect } from "react";
import { WidgetType } from "../types";
import { WidgetMap } from "../utils/handleWidgetMap";

interface ContextType {
    widget: WidgetType[];
    resetWidget: () => void;
    addWidget: (widget: WidgetType) => void;
    removeWidget: (key: string) => void;
    updateWidget: (updatedWidget: WidgetType) => void;
}


const WidgetContext = createContext<ContextType | null>(null);

const WidgetProvider = ({ children }: { children: ReactNode }) => {
    const [widget, updateWidgetState] = useState<WidgetType[]>(
        JSON.parse(localStorage.getItem("analytic-widget") || "[]")
    );

    const resetWidget = () => {
        const storedWidgets = JSON.parse(localStorage.getItem("analytic-widget") || "[]");
        updateWidgetState(storedWidgets);
    };

    const addWidget = ({ key, title, element }: WidgetType) => {
        const newWidget: WidgetType = {
            key, element, title
        };

        updateWidgetState((prevWidgets) => {
            const existingWidget = prevWidgets.find((widget) => widget.key === newWidget.key);
            if (!existingWidget) {
                return [...prevWidgets, newWidget];
            }
            return prevWidgets;
        });
    };

    const removeWidget = (key: string) => {
        updateWidgetState((prevWidgets) => prevWidgets.filter((widget) => widget.key !== key));
    };

    // New update function
    const updateWidget = (updatedWidget: WidgetType) => {
        updateWidgetState((prevWidgets) =>
            prevWidgets.map((widget) => (widget.key === updatedWidget.key ? updatedWidget : widget))
        );
    };

    useEffect(() => {
        localStorage.setItem("analytic-widget", JSON.stringify(widget));
    }, [widget]);

    return (
        <WidgetContext.Provider value={{ widget, resetWidget, addWidget, removeWidget, updateWidget }}>
            {children}
        </WidgetContext.Provider>
    );
};

const useWidget = () => {
    const context = useContext(WidgetContext);
    if (!context) throw new Error("useWidget must be used within a WidgetProvider");
    return context;
};

export { useWidget };

export default WidgetProvider;
