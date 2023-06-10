import type { ReportCallback } from 'web-vitals';

const reportWebVitals = (onReport?: ReportCallback): void => {
  if (onReport) {
    import('web-vitals')
      .then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
        onCLS(onReport);
        onFID(onReport);
        onFCP(onReport);
        onLCP(onReport);
        onTTFB(onReport);
      })
      .catch((e) => console.debug(e));
  }
};

export default reportWebVitals;
