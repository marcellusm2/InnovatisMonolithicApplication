import { Moment } from 'moment';
import { IDepartment } from 'app/shared/model//department.model';
import { IJob } from 'app/shared/model//job.model';
import { IEmployee } from 'app/shared/model//employee.model';

export interface IEmployee {
    id?: number;
    firstName?: string;
    lastName?: string;
    nickName?: string;
    email?: string;
    phoneNumber?: string;
    birthDate?: Moment;
    hireDate?: Moment;
    salary?: number;
    department?: IDepartment;
    jobs?: IJob[];
    manager?: IEmployee;
}

export class Employee implements IEmployee {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public nickName?: string,
        public email?: string,
        public phoneNumber?: string,
        public birthDate?: Moment,
        public hireDate?: Moment,
        public salary?: number,
        public department?: IDepartment,
        public jobs?: IJob[],
        public manager?: IEmployee
    ) {}
}
