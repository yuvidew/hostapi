const proList = require("../model/ProductModel");

const addProduct = async (req , res) => {
    const {title , brand , newPrice , oldPrice , dis , url} = req.body
    console.log(title , brand , newPrice , oldPrice , dis , url);
    try {
        const result = await proList.create({
            title : title,
            brand : brand,
            newPrice : newPrice,
            oldPrice : oldPrice,
            ImageUrl : url,
            discription : dis
        })

        if(!result) return res.status(500).json({msg : 'server side problem '})
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json({msg : 'server side problem '})
    }

}

module.exports = addProduct