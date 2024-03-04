import { mapEnumToOptions } from '@abp/ng.core';

export enum CatBreed {
  None = 0,
  Abyssinian = 1,
  BritishShorthair = 2,
  Persian = 3,
  Bengal = 4,
  MaineCoon = 5,
  Ragdoll = 6,
  EgyptianMau = 7,
  EuropeanShorthair = 8,
  Sphynx = 9,
  YorkChocolate = 10,
}

export const catBreedOptions = mapEnumToOptions(CatBreed);
