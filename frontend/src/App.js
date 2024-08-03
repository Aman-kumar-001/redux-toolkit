import './App.css';
import {  useGetAllPostQuery , useGetPostByIdQuery , useGetPostByLimitQuery } from './component/post';


function App() {

  // const response = useGetAllPostQuery();
  // const response = useGetPostByIdQuery(5);
  const response = useGetPostByLimitQuery(4);
console.log(response);
  // console.log(response.data)
  
  // if(response.isLoading) return <div>Loading....</div>
  if(response.isLoading) return <div>Loading....</div>
  


  return (
    <div className="App">
      <h1>redux toolkit - RTK</h1>
      {
        response.data.map((post) =>
     <div>
      <h2>{post.id}{post.title}</h2>
      <p>{post.body}</p>
     </div>
        )
      }  
     {/* <div>
      <h2>{response.data.id}{response.data.title}</h2>
      <p>{response.data.body}</p>
     </div> */}

    </div>
  );
}

export default App;
