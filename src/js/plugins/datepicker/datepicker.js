import { inject, customAttribute } from 'aurelia-framework';

@customAttribute('datepicker')
@inject(Element)
export class DatePicker {
    constructor(element) {
        this.element = element;
    }

    attached() {

        $(this.element).datepicker({
                clearBtn: true,
                keyboardNavigation: true,
                forceParse: false,
                calendarWeeks: true,
                autoclose: true,
                format: 'dd/mm/yyyy',
                todayHighlight: true,
                weekStart: 1

            })
            .on('change', e => fireEvent(e.target, 'input'));

    }

    detached() {
        $(this.element).datepicker('destroy')
            .off('change');
    }
}

function createEvent(name) {
    var event = document.createEvent('Event');
    event.initEvent(name, true, true);
    return event;
}

function fireEvent(element, name) {
    var event = createEvent(name);
    element.dispatchEvent(event);
}

/*options="{format: 'DD.MM.YYYY', locale : {
                                        applyLabel: 'Odaberi',
                                        cancelLabel: 'Odustani',
                                        fromLabel: 'Od',
                                        toLabel: 'Do',
                                        firstDay: 1,
                                        daysOfWeek: ['Ned','Pon','Uto','Sri','Čet','Pet','Sub'],
                                        monthNames: ['Januar', 'Februar','Mart','April','Maj','Juni','Juli','August','Septembar','Oktobar','Novembar','Decembar']
                                    }}*/
