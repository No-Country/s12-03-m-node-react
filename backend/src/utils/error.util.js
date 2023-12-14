class HttpError {
    constructor(statusText, status = 500, error) {
      this.status = status;
      this.message = statusText;
      error && (this.details = error);
    }
  }
  
export default HttpError