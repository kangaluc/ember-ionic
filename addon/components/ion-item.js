import Ember from 'ember';
import layout from '../templates/components/ion-item';


export default Ember.Component.extend({
  layout: layout,
  tagName: 'ion-item',
  classNames: ['item', 'item-remove-animate', 'item-avatar', 'item-icon-right', 'item-complex', 'item-right-editable'],
  classNameBindings: [
    'toggle:item-toggle',
    'checkbox:item-checkbox',
    'radio:item-radio',
    'select:item-select',
    'input:item-input',
    'divider:item-divider',
    'icon-left:item-icon-left',
    'icon-right:item-icon-right',
    'button-left:item-button-left',
    'button-right:item-button-right',
    'avatar:item-avatar',
    'thumbnail-left:item-thumbnail-left',
    'thumbnail-right:item-thumbnail-right'
  ],

  translateX: null,

  transformOutput: Ember.computed('translateX', function() {
    return `transform: translateX(${this.get('translateX')})`;
  }),

  optionButtons: Ember.computed(function() {
    return [];
  }),

  registerOptionButton(button) {
    this.get('optionButtons').pushObject(button);
  }
});
