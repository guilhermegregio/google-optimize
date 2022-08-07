/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
  interface Window {
    dataLayer: any[]
    google_optimize: any
  }
}

export {}
