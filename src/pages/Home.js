import { useEffect, useState } from "react";
import Card from "../components/card";



export default function Home() {

  const [shows,setShows] = useState([])

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all").then((response) => {
      response.json().then((data) => {
         setShows(data)
      });
    });
  }, []);

  return (
    <div className="home">
    {
        shows.map((show) => {
          return  <Card key={show.show.id} value={show} />
        })
        
    }
    </div>
  );
}
