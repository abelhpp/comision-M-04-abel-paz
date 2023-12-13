import { RouterProvider } from "react-router-dom"
import { AuthProvider, useAuthContext } from "./context/AuthContext.jsx"
import { router } from "./router"
import DefaultLayout from "./layout/DefaultLayout.jsx"





const App = () => {

  return (
    <AuthProvider>
      <DefaultLayout>
        <RouterProvider router={router}/>
      </DefaultLayout>
    </AuthProvider>
  )
}

export default App
