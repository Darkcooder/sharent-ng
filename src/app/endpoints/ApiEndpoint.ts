import {ApiMethod, ApiService} from '../services/api/api.service';
import * as ApiConfig from '../../../api.config.json';
import {ErrorService} from '../services/error/error.service';

export abstract class ApiEndpoint<RQ, RSM> {
  protected url: string;
  protected name: string;
  protected method: ApiMethod;
  protected sampleResponse: RSM;

  constructor(private api: ApiService, private error: ErrorService) {
  }

  public execute(request: RQ): Promise<RSM> {
    if (ApiConfig.useFakeApiByDefault || ApiConfig.fakeEndPoints.includes(this.name)) {
      console.log('Fake Api Request:: ', this.name, request);
      console.log('Fake Api Response:: ', this.sampleResponse);
      return new Promise<RSM>((resolve) => resolve(this.sampleResponse));
    } else {
      return new Promise<RSM>((resolve, reject) => {
        this.api.execute(this.url, this.method, request).subscribe(
          (response: Response<RSM>) => {
            if (response.status === 200) {
              resolve(response.payload);
            } else {
              reject(response.error);
            }
          }, response => reject(response.error));
      });
    }
  }
}

abstract class Response<T> {
  public status: number;
  public error: string;
  public payload: T;
}
