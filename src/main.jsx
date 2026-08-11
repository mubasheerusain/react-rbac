import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './AuthProvider.js'
import { ProtectedRoute } from './ProtectedRoute.js'
import { List } from './List.js'
import { Provider } from "react-redux"
import { store } from './store/store.js'
import { Counter } from './counter.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/protected",
    element: <ProtectedRoute allowedRoles={['Admin']}><h3>Protected Route</h3></ProtectedRoute>
  },
  {
    path: "/list",
    element: <List />
  },
  {
    path: "/counter",
    element: <Counter />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router}>
        </RouterProvider>
      </AuthProvider>
    </Provider>
  </StrictMode>,
)
