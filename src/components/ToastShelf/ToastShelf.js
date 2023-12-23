import React, { useState } from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, onToastClose }) {
  return (
    <ol className={styles.wrapper}>
      {toasts &&
        toasts.map((toast) => (
          <li key={toast.key} className={styles.toastWrapper}>
            <Toast
              variant={toast.variant}
              onClose={() => onToastClose(toast.key)}
            >
              {toast.message}
            </Toast>
          </li>
        ))}
    </ol>
  );
}

export default ToastShelf;
