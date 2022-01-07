export type ContinentCarouselModel = {
  id: string;
  name: string;
  call: string;
  callImage: string;
};

type City = {
  id: string;
  name: string;
  image: string;
  country: string;
  code: string;
};

export type ContinentModel = {
  id: string;
  name: string;
  bannerImage: string;
  about: string;
  countries: number;
  languages: number;
  cities100: number;
  cities: City[];
};
