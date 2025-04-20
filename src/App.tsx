import { useEffect, useState } from "react";
import Conversion from "./Conversion";
function App() {
  const [data, setData] = useState<any>({data:{rates:{}}});
  useEffect(()=>{
    fetch("https://open.er-api.com/v6/latest/USD")
    .then((response)=>{
      return response.json()
    }).then((data)=>{
      setData(data);
      
    })
  },[])
  return (
    <>
      <Conversion data={data}></Conversion>
    </>
  )
}

export default App
