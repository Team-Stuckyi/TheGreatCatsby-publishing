import { $ } from './dom.js';
import { alertClose } from './alertClose.js';
import { alertComponents } from './alertComponents.js';

alertComponents();
const buttons = document.querySelectorAll('.btn');

for (let button of buttons) {
    button.addEventListener('click', () => {
        if (button.dataset.alert == 'edit') {
            $('#alert-area').innerHTML = `<alert-components data-alerttext=edit></alert-components>`;

            alertClose();
        } else if (button.dataset.alert == 'del') {
            $('#alert-area').innerHTML = `<alert-components data-alerttext=del></alert-components>`;

            alertClose();
        }
    });
}
