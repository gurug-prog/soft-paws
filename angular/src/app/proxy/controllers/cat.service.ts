import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CatDto, GetCatListDto } from '../cats/models';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  apiName = 'Cats';
  

  createCat = (input: CatDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CatDto>({
      method: 'POST',
      url: '/api/CatsManagement/Cats/CreateCatAsync',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  getCat = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CatDto>({
      method: 'GET',
      url: `/api/CatsManagement/Cats/GetCatAsync/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getCatsList = (input: GetCatListDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CatDto>>({
      method: 'GET',
      url: '/api/CatsManagement/Cats/GetCatsListAsync',
      params: { sorting: input.sorting, searchQuery: input.searchQuery, breedFilter: input.breedFilter, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  removeCat = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'DELETE',
      url: `/api/CatsManagement/Cats/RemoveCatAsync/${id}`,
    },
    { apiName: this.apiName,...config });
  

  updateCat = (input: CatDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CatDto>({
      method: 'PUT',
      url: '/api/CatsManagement/Cats/UpdateCatAsync',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
