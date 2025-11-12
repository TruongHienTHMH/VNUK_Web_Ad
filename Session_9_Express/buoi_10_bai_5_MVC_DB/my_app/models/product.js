const db = require('../config/database')

const Product = {
    getAllProducts: (callback) => {
        db.query('SELECT * FROM square', (err, results) => {
            if(err){
                return callback(err, null)
            } 
            return callback(null, results)
        })
    },
}

module.exports = Product