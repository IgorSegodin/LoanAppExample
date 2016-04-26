import moment from 'moment';

export default {

    formatDateTime: function(input) {
        return moment(input).format("DD/MM/YYYY HH:mm:ss");
    }
}