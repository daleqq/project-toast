import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ children, variant, onClose }) {
  const filteredVariant = Object.hasOwn(ICONS_BY_VARIANT, variant)
    ? variant
    : "notice";
  const Tag = ICONS_BY_VARIANT[filteredVariant];
  return (
    <div className={`${styles.toast} ${styles[filteredVariant]}`}>
      <div className={styles.iconContainer}>
        <Tag size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{`${filteredVariant} -`}</VisuallyHidden>
        {children}
      </p>
      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
