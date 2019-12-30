export class Todo{
    _id: any;
    title: string;
    priority: string;
    status: string;
    isDelete: boolean;
    createdAt: Date;
    updatedAt: Date;

    constructor() {  
        this._id = null;
        this.title = '';
        this.priority = '';
        this.status = '';
        this.isDelete = false;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}