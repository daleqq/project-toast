import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  const { toasts, setToasts } = React.useContext(ToastContext);

  const closeToast = (key) => {
    const nextToasts = toasts.filter((toast) => toast.key !== key);
    setToasts(nextToasts);
  };

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="notification"
    >
      {toasts &&
        toasts.map((toast) => (
          <li key={toast.key} className={styles.toastWrapper}>
            <Toast
              variant={toast.variant}
              onClose={() => closeToast(toast.key)}
            >
              {toast.message}
            </Toast>
          </li>
        ))}
    </ol>
  );
}

export default ToastShelf;
