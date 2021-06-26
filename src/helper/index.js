const applicationHelper = {
    date_to_string: (date) => {
        return (date.getDate() + "/" + Number(date.getMonth()+1) + "/" + date.getFullYear());
    },
};

module.exports = applicationHelper;