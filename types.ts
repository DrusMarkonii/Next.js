export type addressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export type contactType = {
  id: number;
  name: string;
  email: string;
  address: addressType;
};

export type postType = {
  title: string;
  body: string;
};

export type socialsTypes = {
  id: number;
  icon: string;
  path: string;
};

export type newsType = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string;
};

export type gameType = {
  id:string;
  name: string;
  added: number;
  platforms: [
    platform: {
      id: number;
      name: string;
      slug: string
    }
  ];
  background_image: string;
  released: string;
  rating: number;
  short_screenshots: [
    {
      id: string;
      image: string;
    }
  ];
};
