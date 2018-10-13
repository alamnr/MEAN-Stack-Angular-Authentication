export class User {
    constructor(
        public email: string,
        public password: string,
        public phone: string,
        public topic: string,
        public timePreference: string,
        public subscribe: boolean,
        public captcha: string,
        public power?: string,
        public date?:string,
        public name?:string,
        public alterEgo?:string
    ) { }
}