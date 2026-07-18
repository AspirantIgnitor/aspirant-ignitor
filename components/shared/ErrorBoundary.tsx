"use client";

import { Component, ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-700">Something went wrong. Please refresh and try again.</div>;
    }
    return this.props.children;
  }
}
