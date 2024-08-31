import exp from "constants";

export function getHomePageContent() {
  return getFeaturedCardContent();
}

function getFeaturedCardContent() {
  return {
    featuredCards: [
      {
        id: 1,
        title: "Card 1",
        content: "Card 1 content",
        author: "Author 1",
        image: "https://via.placeholder.com/150",
        installs: 100,
      },
      {
        id: 2,
        title: "Card 2",
        content: "Card 2 content",
        author: "Author 2",
        image: "https://via.placeholder.com/151",
        installs: 200,
      },
      {
        id: 3,
        title: "Card 3",
        content: "Card 3 content",
        author: "Author 3",
        image: "https://via.placeholder.com/152",
        installs: 300,
      },
    ],
  };
}

export function getSearchPageContent() {
  return getSearchPageCardContent();
}

function getSearchPageCardContent() {
  return {
    searchPageCards: [
      {
        title: "Sample Title",
        author: "John Doe",
        date: "2022-01-01",
        views: 1000,
        favorites: 500,
        installs: 10000,
        comments: 200,
        description: "This is a sample description",
        tags: ["tag1", "tag2", "tag3"],
        image: "https://via.placeholder.com/153",
      },
      {
        title: "Sample Title 2",
        author: "Jane Smith",
        date: "2022-02-01",
        views: 2000,
        favorites: 1000,
        installs: 20000,
        comments: 400,
        description: "This is another sample description",
        tags: ["tag4", "tag5", "tag6"],
        image: "https://via.placeholder.com/154",
      },
      {
        title: "Sample Title 3",
        author: "Bob Johnson",
        date: "2022-03-01",
        views: 3000,
        favorites: 1500,
        installs: 30000,
        comments: 600,
        description: "This is a third sample description",
        tags: ["tag7", "tag8", "tag9"],
        image: "https://via.placeholder.com/155",
      },
    ],
  };
}
