import { useEffect, useState } from "react";
import Show from "../components/show";
import { useParams } from "react-router-dom";

export default function ShowPage() {
  const [show, setShow] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all").then((response) => {
      response.json().then((data) => {
        var a = filterit(data);
        setShow(a);
      });
    });
  });

  //   var filteredShow
  function filterit(data) {
    var filteredShow = data.filter((show) => show.show.name === name);
    return filteredShow;
  }

  if (show.length > 0) {
    return (
      <div>
        <Show value={show} />
      </div>
    );
  }
}
