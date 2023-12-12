import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import DefaultLayout from "./layout/DefaultLayout"





const App = () => {

  return (
    <DefaultLayout>
      <RouterProvider router={router}/>
    </DefaultLayout>
  )
}

export default App
