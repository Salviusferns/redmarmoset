import ReactPlayer from 'react-player'
import './Feed.css'
import React, { useState } from "react";
import Hamburger from './Hamburger'
import Gun from './images/Feed.png'
export default function Feed(){
    const [query, setQuery] = useState('Apex legend');
    const [list, setList] = useState(null);
    const search = (e) => {
      e.preventDefault();
      searchYouTube(query).then(setList);
    };

    async function searchYouTube(q) {
        q = encodeURIComponent(q);
        const response = await fetch("https://youtube-search-results.p.rapidapi.com/youtube-search/?q=gaming%20videos" + q, {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
            "x-rapidapi-key": "c15cfecb69msh19ac29d3a7f087dp1cdf88jsnf6922ef648f7"
          }
        });
        const body = await response.json();
        console.log(body);
        return body.items.filter(item => item.type === 'video');
      }
    return(
        <div>
          <div>
            <hi> FEED</hi>
          </div>

          
            <form onSubmit={search}>
        <input autoFocus value={query} onChange={e => setQuery(e.target.value)} />
        <button>Search</button>
      </form>
      {list &&
        (list.length === 0
          ? <p>No results</p>
          : (
            <ul className="items">
              {list.map(item => (
                <li className="item" key={item.id}>
                  <div>
                    <b>{item.title}</b>
                    <ReactPlayer width="500px" height="300px" border-radius= "15px" url={item.url} key={item.id} playing  />

                    <p>{item.description}</p>
                  </div>
                  <ul className="meta">
                    <li>By: <a href={item.author.ref}>{item.author.name}</a></li>
                    <li>Views: {item.views}</li>
                    <li>Duration: {item.duration}</li>
                    <li>Uploaded: {item.uploaded_at}</li>
                  </ul>
                  <img alt="" src={item.thumbnail} />
                </li>
              ))}
            </ul>
          )
        )
      }
        </div>
    )
}