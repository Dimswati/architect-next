import { Suspense } from "react"
import SearchBar from "@/components/SearchBar"

const Home = () => {
  return (
    <div>
      <div>
            <h2>Rendered on the server</h2>
        </div>
        <div>
            <Suspense fallback={<h2>Rendered on the client...</h2>}>
                <SearchBar/>
            </Suspense>
        </div>
    </div>
  )
}

export default Home