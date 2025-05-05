import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";
const CLIENT_ID = "Client-ID GjyW33zQt3f6rWAuY81VXblF7z1JlHFzzf5nhOqW6sU";

export const fetchImages = async (query, page, perPage = 12) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        query,
        page,
        per_page: perPage,
      },
      headers: {
        Authorization: CLIENT_ID,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
