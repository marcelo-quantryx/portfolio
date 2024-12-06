import React from 'react';

export function CalendarEmbed() {
  React.useEffect(() => {
    // Create and inject the Cal.com script
    const script = document.createElement('script');
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "meet-with-marcelo", {origin:"https://cal.com"});

      Cal.ns["meet-with-marcelo"]("inline", {
        elementOrSelector:"#my-cal-inline",
        config: {"layout":"month_view","theme":"light"},
        calLink: "quantryx/meet-with-marcelo",
      });

      Cal.ns["meet-with-marcelo"]("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"column_view"});
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="h-[600px] w-full bg-white rounded-lg">
      <div id="my-cal-inline" style={{ width: '100%', height: '100%', overflow: 'scroll' }}></div>
    </div>
  );
}