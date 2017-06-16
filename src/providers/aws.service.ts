import {Injectable} from "@angular/core";
import {_MOBILE_ANALYTICS_APP_ID} from './properties.service'
declare var AMA:any;
@Injectable()
export class AwsUtil{
    constructor(){

    }
    initAwsService(){
      var options = {
          appId: _MOBILE_ANALYTICS_APP_ID,
      };
    var mobileAnalyticsClient = new AMA.Manager(options);
    mobileAnalyticsClient.submitEvents();
    }
}