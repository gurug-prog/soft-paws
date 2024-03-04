import type { EntityDto, PagedResultRequestDto } from '@abp/ng.core';
import type { CatBreed } from './cat-breed.enum';

export interface CatDto extends EntityDto<string> {
  name?: string;
  age: number;
  breed: CatBreed;
  isVaccinated: boolean;
  creationTime?: string;
}

export interface GetCatListDto extends PagedResultRequestDto {
  sorting?: string;
  searchQuery?: string;
  breedFilter: CatBreed[];
}
