import React, { useEffect } from 'react';
import { insertThankYouScript } from 'omni-tracking';
import { insertTrackingScript } from 'omni-tracking';

function ThankYouPage() {
  useEffect(() => {
    const cleanup = insertThankYouScript(12333, 400);

    const OMNI = {
        scriptID: 12345,
        async: true,
    }

    const omniTracking = insertTrackingScript(OMNI);

    return () => {
      cleanup();
    };
  }, []);


  return (
    //
  );
}

export default ThankYouPage;


// Impachetat
// Testat live
// Documentatie
// 