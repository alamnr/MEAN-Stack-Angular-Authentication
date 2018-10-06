export class User{
    constructor(
        public email: string,
        public password : string,
        public phone: string,
        public captcha: string
    ){}
}