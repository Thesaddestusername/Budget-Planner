import moment from 'moment';

export const DateFormatting = (date) =>{
    return moment(date).format('DD-MM-YYYY')
}