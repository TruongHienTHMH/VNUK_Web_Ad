exports.home = (req, res) => {
    res.render('index', {content: 'partials/home'})
}

exports.about = (req, res) => {
    res.render('index', {content:'partials/about'})
}

exports.contact = (req, res) => {
    res.render('index', {content: 'partials/contact'})
}

