import TagManager from 'react-gtm-module';

export const GTM_ID = 'GTM-XXXXXXX';

export const initGTM = () => {
  TagManager.initialize({ gtmId: GTM_ID });
};