const Page = require("../models/Page")


const CreatePageView = async (req, res) => {
    const { name } = req.body
    console.log(name)
    await Page.create({ name })
    return res.json({ name: name })

}

const GetPagesView = async (req, res) => {

    const data = await Page.find()
    res.send(data)

}



module.exports = {
    CreatePageView,
    GetPagesView
}