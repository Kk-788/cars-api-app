import {useEffect, useState} from "react";
import CarList from "./components/CarList";

function App() {

  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      setLoading(true)
      const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json`)
      const json = await response.json()
      setData(json)
    } catch (err) {
      setData(err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="App">
      {data && <CarList data={data}/>}
    </div>
  );
}

export default App;
