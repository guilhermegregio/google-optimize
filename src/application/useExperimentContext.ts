import {useContext} from 'react'
import {Context} from './experimentContext'

const useExperimentContext = () => {
  return useContext(Context)
}

export {useExperimentContext}
