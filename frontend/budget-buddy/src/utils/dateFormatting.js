import moment from 'moment';

//Added dateFormatting function to quickly change date using the moment library;
export const DateFormatting = (date) =>{
    return moment(date).format('DD-MM-YYYY')
}