import {useExperimentValue} from './useExperimentValue'

const useExperimentVariant = () => {
  const {variant} = useExperimentValue()

  return variant
}

export {useExperimentVariant}
