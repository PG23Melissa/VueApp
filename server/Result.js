'use strict'

export default class Result{
    constructor(msg='OK', code=0, payload={}){

        this.data={
            msg,
            code,
            payload,
        }
    }

    get ok(){return(this.code==0)}

    OK(){
        this.msg='Ok';
        this.code=0
    }

    serialize(){
        return JSON.stringify(this)
    }
}