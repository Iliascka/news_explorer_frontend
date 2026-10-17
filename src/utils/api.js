export function getItems() {
  return new Promise((resolve, reject) =>
    resolve([
      {
        _id: "65f738423js9347sdf9394",
        title: "Some news article",
        url: "https://www.journaldugeek.com/2026/10/10/msi-aussi-a-son-portable-rtx-spark-hors-de-prix",
        urlToImage:
          "https://www.journaldugeek.com/app/uploads/2026/10/Prestige-N16-Flip-AI-1600x900.jpg",
        publishedAt: "October 7, 2026",
        description:
          "ASUS schickt seine neuen Creator-Laptops ProArt P14 (H7407) und ProArt P16 (H7607) ins Rennen. Wer es verpasst hat: Microsoft hat mit NVIDIA gestern ordentlich abgeliefert und...Zum Beitrag: ASUS: ProArt P14 und P16 mit NVIDIA RTX Spark starten in die Vorbest…",
        source: {
          name: "The Verge",
        },
      },
      {
        _id: "65f738423js9347sdf9398",
        title: "Some news article",
        url: "https://www.yahoo.com/news/politics/articles/trump-gives-national-treasure-musk-193940175.html",
        urlToImage:
          "https://s.yimg.com/lo/mysterio/api/a290cb5a43c8f383922f32e2e7f69911eb2dd7d5b0e923700f09aff6c07d893f/lightyear_networkapi/resizefill_w1200%3Bquality_80%3Bformat_webp/https%3A%2F%2Fmedia.zenfs.com%2Fen%2Fafp.com%2Ff0a681a3b20fc84a13a673408cbd6a8a.jpg",
        publishedAt: "October 7, 2026",
        description:
          "ASUS schickt seine neuen Creator-Laptops ProArt P14 (H7407) und ProArt P16 (H7607) ins Rennen. Wer es verpasst hat: Microsoft hat mit NVIDIA gestern ordentlich abgeliefert und...Zum Beitrag: ASUS: ProArt P14 und P16 mit NVIDIA RTX Spark starten in die Vorbest…",
        source: {
          name: "The Verge",
        },
      },
      {
        _id: "65f738423js9347sdf9399",
        title: "Some news article",
        url: "https://stadt-bremerhaven.de/asus-proart-p14-und-p16-mit-nvidia-rtx-spark-starten-in-die-vorbestellung/",
        urlToImage:
          "https://stadt-bremerhaven.de/wp-content/uploads/2026/10/ProArt-Laptop-Vorbestellung.webp",
        publishedAt: "October 7, 2026",
        description:
          "ASUS schickt seine neuen Creator-Laptops ProArt P14 (H7407) und ProArt P16 (H7607) ins Rennen. Wer es verpasst hat: Microsoft hat mit NVIDIA gestern ordentlich abgeliefert und...Zum Beitrag: ASUS: ProArt P14 und P16 mit NVIDIA RTX Spark starten in die Vorbest…",
        source: {
          name: "The Verge",
        },
      },
    ]),
  );
}

export function saveArticle(article) {
  return new Promise((resolve, reject) => {
    resolve({
      _id: "65g0394k8guis85nf76820s8",
      url: article.url,
      publishedAt: article.publishedAt,
      description: article.description,
      title: article.title,
      urlToImage: article.urlToImage,
      source: article.source,
      tag: article.tag,
    });
  });
}

export function deleteArticle(article) {
  return new Promise((resolve, reject) => {
    resolve({ message: "Article deleted" });
  });
}
