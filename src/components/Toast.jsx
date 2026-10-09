import React, { useEffect } from "react";
import { useHotel } from "../context/HotelContext";
import { CheckIcon, CloseIcon, ShieldCheckIcon } from "./Icons";

export const Toast = () => {
  const { toast, closeToast } = useHotel();

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        closeToast();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  if (!toast) return null;

  const isSuccess = toast.type === "success";
  const isWarning = toast.type === "warning";

  return (
    <div
      style={{
        position: "fixed",
        top: "24px",
        right: "24px",
        zIndex: 9999,
        animation: "toastSlideIn 0.3s ease-out",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "14px 20px",
        borderRadius: "var(--radius-md)",
        backgroundColor: "var(--bg-card)",
        color: "var(--text-main)",
        border: `1px solid ${isSuccess ? "var(--accent-emerald)" : isWarning ? "var(--accent-danger)" : "var(--accent-gold)"}`,
        boxShadow: "var(--shadow-lg)",
        maxWidth: "420px"
      }}
    >
      <div
        style={{
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: isSuccess
            ? "rgba(16, 185, 129, 0.2)"
            : isWarning
            ? "rgba(239, 68, 68, 0.2)"
            : "rgba(217, 119, 6, 0.2)",
          color: isSuccess
            ? "var(--accent-emerald)"
            : isWarning
            ? "var(--accent-danger)"
            : "var(--accent-gold-light)",
          flexShrink: 0
        }}
      >
        {isSuccess ? <CheckIcon size={16} /> : <ShieldCheckIcon size={16} />}
      </div>
      <p style={{ fontSize: "0.9rem", fontWeight: 600, flex: 1, margin: 0 }}>
        {toast.message}
      </p>
      <button
        onClick={closeToast}
        style={{
          background: "none",
          border: "none",
          color: "var(--text-muted)",
          cursor: "pointer",
          padding: "4px",
          display: "flex",
          alignItems: "center"
        }}
      >
        <CloseIcon size={16} />
      </button>
    </div>
  );
};
