const index = (req, res) => {  
    res.render('index', { title: 'Ayan web page' });   
};
module.exports = {
    index
};