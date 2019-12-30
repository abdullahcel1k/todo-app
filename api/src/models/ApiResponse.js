class ApiResponse {
  constructor(ok, status, message, data, errorDetail) {
    this.ok = ok;
    this.status = status;
    this.message = message;
    this.data = data;
    this.errorDetail = errorDetail;
  }
}

module.exports = ApiResponse;
