interface Window {
  gtag: (
    type: string,
    value: string,
    options?: { [key: string]: any }
  ) => void;
  dataLayer: any[];
}