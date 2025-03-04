import addons from '@storybook/addons';
import { v4 as uuidv4 } from 'uuid';
import { scriptLoader } from './lit-script';

const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const eventHandles = eventNames => {
  return eventNames.map(eventName => `on${capitalize(eventName)}`);
};

/**
 * DEPRECATED
 * @param  {} compName
 * @param  {} eventNames
 */
export const action = (compName, eventNames) => {
  return scriptLoader(`
    (function(){
      const comp = document.querySelector('${compName}');
      ${eventNames
        .map(
          eventName => `
        comp.addEventListener('${eventName}', () => {
          var evt = new MouseEvent('on${capitalize(eventName)}', {
            bubbles: true,
            cancelable: true,
            view: window
          });
          comp.dispatchEvent(evt);
        });
      `,
        )
        .join('')}
    })()
  `);
};

export const customEventActionLogger = (eventName, eventDetailMapCallback = ec => ec) => {
  return {
    handleEvent(e) {
      addons.getChannel().emit('storybook/actions/action-event', {
        count: 0,
        data: {
          name: eventName,
          args: {
            event: e,
            detail: eventDetailMapCallback(e),
          },
        },
        id: uuidv4(),
        options: {
          depth: 15,
          clearOnStoryChange: true,
          limit: 50,
          allowFunction: false,
        },
      });
    },
  };
};
