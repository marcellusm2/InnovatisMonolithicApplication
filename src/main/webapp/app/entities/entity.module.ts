import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { InnovatisMonolithicApplicationRegionModule } from './region/region.module';
import { InnovatisMonolithicApplicationCountryModule } from './country/country.module';
import { InnovatisMonolithicApplicationLocationModule } from './location/location.module';
import { InnovatisMonolithicApplicationDepartmentModule } from './department/department.module';
import { InnovatisMonolithicApplicationTaskModule } from './task/task.module';
import { InnovatisMonolithicApplicationEmployeeModule } from './employee/employee.module';
import { InnovatisMonolithicApplicationJobModule } from './job/job.module';
import { InnovatisMonolithicApplicationJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        InnovatisMonolithicApplicationRegionModule,
        InnovatisMonolithicApplicationCountryModule,
        InnovatisMonolithicApplicationLocationModule,
        InnovatisMonolithicApplicationDepartmentModule,
        InnovatisMonolithicApplicationTaskModule,
        InnovatisMonolithicApplicationEmployeeModule,
        InnovatisMonolithicApplicationJobModule,
        InnovatisMonolithicApplicationJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InnovatisMonolithicApplicationEntityModule {}
