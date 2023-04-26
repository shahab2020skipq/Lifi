import { LiFiWidget } from '@lifi/widget';



export const WidgetPage = () => {
    const widgetConfig = {


  // deny chains
  chains: {
    deny: [100],
  },
  chains: {
    deny: [250],
  },
  chains: {
    deny: [10,43114,250,25,66,100,122,1284,1285,42220,1313161554,106,288,9001,1666600000,128,137,1],
  },

  

        containerStyle: {
          border: '1px solid rgb(234, 234, 234)',
          borderRadius: '16px',
        },
      };
  return (
    <LiFiWidget integrator="Your dApp/company name" config={widgetConfig} />
  );
};