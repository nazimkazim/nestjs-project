import { HttpException, HttpStatus } from "@nestjs/common";
import { ValidationError } from "class-validator";

export class ValidationException extends HttpException {
    messanges: ValidationError[];

    constructor(response:ValidationError[]) {
        super(response, HttpStatus.BAD_REQUEST)
        this.messanges = response
    }
}