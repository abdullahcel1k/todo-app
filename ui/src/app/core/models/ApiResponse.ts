export class ApiResponse{
    ok: boolean;
    status: number;
    message: string;
    data: any;
    errorDetail: any;

    constructor(ok: boolean, status: number, message: string, data: any, errorDetail: any){
        this.ok = ok;
        this.status = status;
        this.message = message;
        this.data = data;
        this.errorDetail = errorDetail;
    }
}