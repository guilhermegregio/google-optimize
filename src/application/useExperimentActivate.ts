import {useExperimentContext} from './useExperimentContext'

const useExperimentActivate = () => {
  const {activate} = useExperimentContext()

  return activate
}

export {useExperimentActivate}
