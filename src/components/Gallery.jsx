import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "../context/context";

const url =
  "https://api.unsplash.com/search/photos?client_id=vzhaZplaMV9IQGbKL8pvu5mU0tA6FV0DEWZtmTbFIKU";

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>loading...</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>Error...</h4>
      </section>
    );
  }

  const results = response.data.results;

  if (results.lenght < 1) {
    return (
      <section className="image-container">
        <h4>No results found</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.id.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
