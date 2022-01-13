import { Item } from "../models/item.model.js";
import lodash from "lodash";
const { pick } = lodash;

export const getItems = async(req,res)=>{
    try{
        let items = await Item.find();
        if(items.length == 0) return res.status(200).send("No items found")
        return res.status(200).send({
            message: "Items",
            data: items
        })
    }
    catch(ex){
        return res.status(500).send(ex.message);
    }
}

export const createItem = async (req, res) => {
    try {
        let item = new Item(
            pick(req.body, [
                "Name",
                "Description",
                "Quantity"
            ])
        );
        await item.save();
        return res.status(201).send({
            message:
                "Item created successfully",
        });
    }
    catch (ex) {
        res.status(500).send(ex.message);
    }
};

export const updateQuantity = async (req, res) => {
    try {
        let item = await Item.findById(req.params.itemId)
        if (!item) return res.status(404).json("No product found with the given Id")
        await Item.findByIdAndUpdate(
            req.params.itemId,
            { quantity: req.body.quantity },
            { new: true },
        );
    }
    catch (ex) {
        return res.status(400).send(ex.message)
    }
};