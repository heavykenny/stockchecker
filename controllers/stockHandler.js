const fetch = require("node-fetch");

exports.getPrice = async (req, res) => {
    try {
        const stock = req.query.stock;
        const like = "&like=" + (req.query.like) ? req.query.like : false;

        let url = "?";
        if (Array.isArray(stock)) {
            stock.forEach(element => {
                url += "stock=" + element + '&';
            });
        } else {
            url += "stock=" + stock + '&';
        }

        let response = await fetch("https://stock-price-checker.freecodecamp.rocks/api/stock-prices" + url + like).then((res) => {
            return res.json()
        });
        return res.status(200).json(
            response
        );
    } catch (error) {
        return res.status(500).json(
            error
        );
    }
};