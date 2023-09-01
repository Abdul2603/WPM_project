const index = (req, res) => {  
    res.render('index', { title: 'Web page' });   
};
module.exports = {
    index
};