import { useEffect, useState } from "react"
import { data } from "../data/data"
import request from "../request"
export default function Layout () {

  const [BlogListData, setBlogListData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData () {
      try {
        const response = await fetch(`https://cloud.codesupply.co/endpoint/react/data.json`);
        if (!response.ok) {
          throw new Error('error');
        }
        const result = await response.json();
        setBlogListData(result);
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false);
      }
    };

    fetchData(); 
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      {BlogListData && BlogListData.map((item, ix)=>{
        return(
          <div className="item" key={ix}>
            <a href="/#" >
              <img src={item.img}/>
            </a>
            <h4 key={ix} className="tags">
              <b>{item.tags}</b>  
            </h4>
            <h3 className="title">{item.title}</h3>
            <span className="autor">{item.autor}<span className="autor1">• {item.date} • {item.views} Views</span> </span>
            <p className="autor1">{item.text}</p>          
          </div>

        )

      })}
    </div>
  );
}