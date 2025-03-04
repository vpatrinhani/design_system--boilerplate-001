import { html } from 'lit-html';
import { scriptLoader } from './lit-script';

export const FormWrapperTemplate = ({ id = 'form-template-wrapper', content }) => {
  const formScript = scriptLoader(`
    (function(){
      function serializeForm (data) {
        let obj = {};
        for (let [key, value] of data) {
          if (obj[key] !== undefined) {
            if (!Array.isArray(obj[key])) {
              obj[key] = [obj[key]];
            }
            obj[key].push(value);
          } else {
            obj[key] = value;
          }
        }
        return obj;
      }

      function logAction(eventName, data) {
        var uniqueId = function(eventName) {
          return eventName + '-' + (new Date()).getTime();
        };

        __STORYBOOK_ADDONS.getChannel()
          .emit('storybook/actions/action-event', {
            count: 0,
            data: {
              name: eventName,
              details: data,
            },
            id: uniqueId(eventName),
            options: {
              depth: 15,
              clearOnStoryChange: true,
              limit: 50,
              allowFunction: false,
            }
          });
      }

      var form = document.querySelector('form#${id}');
      form.onsubmit = function(e) {
        var data = serializeForm(new FormData(form));

        logAction('onFormSubmit', {
          event: e,
          data: data
        });

        return false;
      }
    })()
  `);

  const styles = html`
  <style>
    form#${id}::before {
      content: 'Form';
      position: absolute;
      left: -2px;
      top: -26px;
      background-color: #009999;
      color: white;
      padding: 4px 16px;
    }

    form#${id} {
      position: relative;
      border: 2px solid #009999;
      padding: 16px;
      box-shadow: 6px 4px #009999;
      margin: 24px;
    }
  </style>
  `;

  return html`
    ${styles}
    <form id="${id}">
      <input id="id--field-hidden" name="field-hidden" type="hidden" value="field hidden - Value" />
      ${content}
    </form>
    ${formScript}
  `;
};
