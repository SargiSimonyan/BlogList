import { useEffect, useState } from "react"
import Popup from "./Popup";
export default function Layout () {
  const [text, setText] = useState("")


  const [BlogListData, setBlogListData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activPost, setActivPost] = useState({})
  const [BlogPopupOpened , setBlogPopupOpened]=useState(false);

  const handlePopup = (e , item) =>{
    // e.preventDefault();
    // e.stopPropagation();
    setActivPost(item);
    setBlogPopupOpened(!BlogPopupOpened);
    // document.body.classList.add('hidden');
    console.log(1);
  }
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
          <div className="item" key={ix}
            onClick={e => handlePopup(e , item)}
          >
            <img src={item.img}/>
            <h4 className="tags">
              <b>{item.tags}</b>
            </h4>
            <h3 className="title">{item.title}</h3>
            <span className="autor">
              {item.autor}
              <span className="autor1">
                • {item.date} • {item.views} Views
              </span> 
            </span>
            <p className="autor1">{item.text}</p> 
            <Popup
              BlogPopupOpened = {BlogPopupOpened}
              BlogListData = {BlogListData}
              ix = {ix}
              activPost = {activPost}
            />         
          </div>
        )
      })}
    </div>
  );
}