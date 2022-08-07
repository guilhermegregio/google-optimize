import {useExperimentContext} from './useExperimentContext'

const useExperimentValue = () => {
  const {experiment} = useExperimentContext()

  return experiment
}

export {useExperimentValue}
