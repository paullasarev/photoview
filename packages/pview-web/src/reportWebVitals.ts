import { ReportCallback, ReportOpts, onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportCallback, opts?: ReportOpts) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
      onCLS(onPerfEntry, opts);
      onFID(onPerfEntry, opts);
      onFCP(onPerfEntry, opts);
      onLCP(onPerfEntry, opts);
      onTTFB(onPerfEntry, opts);
    };
};

export default reportWebVitals;
