import React from 'react';
import styles from './Settings.module.css';
import { SettingsLanguage } from './SettingsLanguage/SettingsLanguage';

export function Settings() {
  return (
    <div className={styles.settings}>
      <SettingsLanguage />
    </div>
  );
}
