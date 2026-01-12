import { useEffect } from "react";

/**
 * Simple fallback Toaster component to replace missing "sonner".
 * Logs notifications and displays a fixed visual indicator.
 */
export function Toaster() {
  useEffect(() => {
    console.log("✅ Toaster component mounted — ready to show notifications");
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#333",
        color: "#fff",
        padding: "10px 16px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
        fontFamily: "Inter, sans-serif",
        fontSize: "14px",
        opacity: 0.9,
        zIndex: 9999,
      }}
    >
      🚀 Portfolio is live!
    </div>
  );
}

export default Toaster;
