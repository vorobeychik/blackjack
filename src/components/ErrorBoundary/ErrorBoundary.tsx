import React from 'react';
import styles from './ErrorBoundary.module.css';

interface ErrorBoundaryProps {
  children: React.Component[],
}

export class ErrorBoundary extends React.Component {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    // @ts-ignore
    const {hasError} = this.state;
    // eslint-disable-next-line react/prop-types
    const {children} = this.props;
    if (hasError) {
      return <h1 className={styles.errorMsg}>Something went wrong try later</h1>;
    }

    return children;
  }
}
