const enum TypeJOB  {
    PENDING=0,
    DONE=1,
    DOING=2
}
console.log(TypeJOB.DONE);
type Job = {
    id:number,
    value:string,
    type:TypeJOB
}

const job1:Job = {
    id:1,
    value:"say hello",
    type:TypeJOB.DONE
}
console.log(job1);


export {}