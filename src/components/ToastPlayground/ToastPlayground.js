import React, { useState } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast from "../Toast";
import ToastShelf from "../ToastShelf";
import { ToastContext } from "../ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);
  const { toasts, setToasts } = React.useContext(ToastContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    popToast();
    resetForm();
  };

  const resetForm = () => {
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  };

  const popToast = () => {
    const nextToasts = [
      ...toasts,
      {
        message,
        variant,
        key: crypto.randomUUID(),
      },
    ];

    setToasts(nextToasts);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((currentVariant) => (
                <label
                  htmlFor={`variant-${currentVariant}`}
                  key={currentVariant}
                >
                  <input
                    id={`variant-${currentVariant}`}
                    type="radio"
                    name="variant"
                    value={currentVariant}
                    checked={variant === currentVariant}
                    onChange={(event) => setVariant(event.target.value)}
                  />
                  {currentVariant}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
