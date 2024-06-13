export const config = {
  domainSource: "https://5648f1fb-0df2-4baf-8f15-f8785056aae5.weweb-preview.io/", // Your WeWeb app link
  metaDataEndpoint: "https://xzlq-1eat-f6yv.n7.xano.io/api:uksO2MFT/articles/get_single/{articles_id}", // Link of the endpoint that returns the metadata. /{id} will be added to this path. With id being the last parameter of the dynamic page
  patterns: {
    dynamicPage: "/article/[^/]+"
  }
};
