import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/index.ts'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { store } from './redux/store.ts'
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer />
    <Provider store={store}>
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
