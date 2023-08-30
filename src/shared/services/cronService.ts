import cron from 'node-cron';
import ElasticService from './elasticService';
import { ICronServiceAttributes, ICronServiceConstructor } from './types/cronService';
import dayjs from 'dayjs';

//@ts-ignore
export default class CronService implements ICronServiceAttributes{
    private elasticService: ElasticService;
    
    constructor(props:ICronServiceConstructor){
        Object.assign(this,props)
    }
    
    async bulkProducts(){
        await this.elasticService.bulkProducts({})
        cron.schedule('*/1 * * * *', ()=>{
            console.log("Running cronjob for BulkingProducts!")
            this.elasticService.bulkProducts({
                startDate:dayjs().subtract(1,'minutes').toDate()
            })
        });
    }
}