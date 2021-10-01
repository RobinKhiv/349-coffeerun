(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    class FormHandler {
        constructor(selector) {
            console.log('In FormHandler constructor...');

            if (!selector) { throw new Error('No selector provided'); }

            this.$formElement = $(selector);
            if (this.$formElement.length === 0) {
                throw new Error('Could not find element with selector: ' + selector);
            }
        }
        addSubmitHandler(fn) {
            console.log('Setting submit handler for form');
            // TODO: 
            this.$formElement.on('submit', function (event) {
                event.preventDefault();
        
                $('#payment-modal').modal({
                    escapeClose: false,
                    clickClose: false,
                    showClose: false
                });

                $('#payment-modal').on('submit', function(event){
                    event.preventDefault();
                    var data = {};
                    $(this).serializeArray().forEach(function (item) { 
                        data[item.name] = item.value;
                    });
                    const text = `<h2>Thank you for your payment, ${data.title} ${data.name}</h2><a href="#" rel="modal:close">Close</a>`;
                    $('#payment-complete').html(text).modal();   
                })
                // var data = $(this).serializeArray();
                var data = {};
                $(this).serializeArray().forEach(function (item) { 
                    data[item.name] = item.value;
                    console.log(item.name + ' is ' + item.value);
                });
                //console.log(data, 'data');
                fn(data);         // truck createOrder is currently fn
                this.reset();
                this.elements[0].focus();
            });
        }
    }

   
    App.FormHandler = FormHandler;
    window.App = App;
  })(window);