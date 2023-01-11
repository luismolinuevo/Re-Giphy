import { useLoaderData, Link } from "react-router-dom";

export default function RandomPage() {
  const giphyRandomData = useLoaderData();
  // console.log(giphyRandomData);

  return (
    // <div className="random-page">
    //   {giphyRandomData ? (
    //     <ul>
    //       {giphyRandomData.data.map((giphy) => (
    //         <li key={giphy.id}>
    //           <Link to={`/gif/${giphy.id}`}>{giphy.title}</Link>
    //         </li>
    //       ))}
    //     </ul>
    //   ) : (
    //     <div>This is the random page</div>
    //   )}
      <div>This is the random page</div>
    // </div>
  );
}