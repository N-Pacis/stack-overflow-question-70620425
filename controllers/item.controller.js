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

export const getItemById = async(req,res)=>{
    try{
        let item = await Item.findById(req.params.itemId);
        if(!item) return res.status(404).send("No item found with the given id")
        return res.status(200).send({
            message: "Item",
            data: item
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
            data: item
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
        item = await Item.findByIdAndUpdate(
            req.params.itemId,
            { Quantity: req.body.Quantity },
            { new: true }
        );
        return res.status(201).send({
            message:
                "Item updated successfully",
            data: item
        });      
    }
    catch (ex) {
        return res.status(400).send(ex.message)
    }
};