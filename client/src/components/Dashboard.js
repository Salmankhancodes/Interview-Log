import { Helmet } from 'react-helmet'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'
import { REDIRECT_FALSE, REMOVE_MESSAGE } from '../store/types/PostTypes'
const Dashboard = () => {
  const { redirect, message } = useSelector((state) => state.PostReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    if (redirect) {
      dispatch({ type: REDIRECT_FALSE })
    }
    if (message) {
      toast.success(message)
      dispatch({ type: REMOVE_MESSAGE })
    }
  }, [])
  return (
    <>
      <Helmet>
        <title>User Dashboard</title>
        <meta name='description' content='User Dashboard' />
      </Helmet>
      <h1>Dashboard</h1>
      <Toaster
        position='top-center'
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: '14px',
          },
        }}
      />
    </>
  )
}
export default Dashboard
