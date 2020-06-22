export interface IJobOffer{
    id: number,
    position:string,
    salary: number,
    qualifications:string,
    descriptions:string,
    date: string,
    status:string,
    applicants:number
}

export class JobOffer implements IJobOffer{

        constructor(    public id: number,
                        public position:string,
                        public salary: number,
                        public qualifications:string,
                        public descriptions:string,
                        public date: string,
                        public status:string,
                        public applicants:number 
                    ) {} 
}