import {Handler} from "express";

const index: Handler = (_, res) => {
    res.redirect('/api/docs');
}

export {
    index
}
