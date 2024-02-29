const proList = require("../model/ProductModel")

const allProducts = async (req , res) => {
    const data = await proList.find({})
    return res.status(200).json({product : data})
}

const Product = async (req , res) => {
    const {id} = req.params
    const data = await proList.findById(id)
    return res.status(200).json({product : data})
}

const filterByQuery = async (req , res) => {
    const data  = await proList.find(req.query)
    return res.status(200).json({product : data})
}

module.exports = {
    allProducts,
    Product,
    filterByQuery
}