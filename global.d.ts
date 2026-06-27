import React from 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends React.AriaAttributes, React.DOMAttributes<T> {
    size?: string | number;
    strokeWidth?: string | number;
  }
}
