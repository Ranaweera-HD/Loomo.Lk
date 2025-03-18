import express, { Router } from "express";
const router = express.Router();

let data =["corn", "wheat", "rice", "beetles", "pumpkins"];

const getDocuments = async (req, res) => {
    try {
        res.status(200).send(data);
    } catch (err){
        res.status(500).send(err);
    }
};

router.get("/", getDocuments);
export default router;