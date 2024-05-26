export class Column{
    constructor(
        public name: string, 
        public id: string, 
        public tasks: Tasks[],
       
    ) {}
}

export class Tasks{
    constructor(
        public title: string,
        public date: string,
        public status: string,
        public end: string,
        public attachNo: string,
        public image: string,
        public ticketNo: string,
        public timer: string,
    ) {}
}