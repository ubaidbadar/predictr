import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';

dayjs.extend(calendar);


export default function dateFromNowOn(date) {
    const fromNow = dayjs(date).fromNow();
    return dayjs(date).calendar(null, {
        lastWeek: '[Last] dddd',
        lastDay: '[Yesterday]',
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        nextWeek: 'dddd',
        sameElse: () => `[${fromNow}]`,
    });
}