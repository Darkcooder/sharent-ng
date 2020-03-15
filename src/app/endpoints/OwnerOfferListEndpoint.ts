import {ApiEndpoint} from './ApiEndpoint';
import {OwnerModel} from '../models/OwnerModel';
import {ApiMethod, ApiService} from '../services/api/api.service';

class OwnerOfferListEndpoint extends ApiEndpoint<OwnerOfferListRequest, OwnerModel[]> {
  protected url: '/getOwnerOfferList';
  protected name: 'OwnerOfferList';
  protected method = ApiMethod.Get;
  protected sampleResponse = [{name: 'John'}];
}

class OwnerOfferListRequest {
    public dateFrom: Date;
    public dateTo: Date;
}

export {OwnerOfferListEndpoint, OwnerOfferListRequest};
