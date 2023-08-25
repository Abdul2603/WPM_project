/* GET home page */
const homelist = (req, res) => {
    res.render('index', { title: 'LiteraZe' });
};

/* GET Location Info page */
const locationInfo = (req, res) => {
    res.render('index', { title: 'Club Info' });
};

/* GET Add review page */
const addReview = (req, res) => {
    res.render('index', { title: 'Add review' });
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};