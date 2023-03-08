//copyright (c) 2023 Melissa osorio
'Use Strict';

import Express from "express";
const Router = Express.Router();

import Result from "../Result.js";

const myTelemetryData=[];

Router.post('/settings',(request,response,next)=>{
    //your handler here
    const result = new Result("BOOM, it broke", 420, {});

    result.ok();
    response.send(result.serialize());
    next()
});

export default Router;