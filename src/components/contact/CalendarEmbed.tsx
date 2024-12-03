import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

export function CalendarEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", { 
        styles: { 
          branding: { brandColor: "#000000" } 
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <div className="h-[600px] w-full bg-white rounded-lg">
      <Cal
        calLink="quantryx/meet-with-marcelo"
        style={{
          width: "100%",
          height: "100%",
          overflow: "scroll"
        }}
        config={{
          layout: "month_view"
        }}
      />
    </div>
  );
}