import { Suspense } from 'react'

// project imports
import Loader from './loader.js'

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component) => function loadable(props) {
  return (
    <Suspense fallback={<Loader />}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...props} />
    </Suspense>
  )
}

export default Loadable
