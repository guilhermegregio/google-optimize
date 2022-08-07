import {useState, useCallback} from 'react'
import {interval, dataLayerEventPush, getVariant} from '@/infrastructure'
import {ExperimentStatus, ExperimentResult} from '@/domain'

export type ExperimentParams = {
  experimentId?: string
  customEvent?: string
  onActivate?: (variant: string) => void
}

type UseExperiment = (params: ExperimentParams) => ExperimentResult

const EMPTY_PARAMS = {
  experimentId: '',
  customEvent: '',
  onActivate: () => {},
}

const VARIANT_ORIGINAL = '0'

const useExperiment: UseExperiment = ({
  experimentId = '',
  customEvent = '',
  onActivate = () => {},
} = EMPTY_PARAMS) => {
  const [experimentStatus, setExperimentStatus] = useState(
    ExperimentStatus.INATIVE,
  )
  const [variant, setVariant] = useState(VARIANT_ORIGINAL)

  const activateCustomEvent = useCallback(() => {
    if (customEvent === '') {
      return
    }

    dataLayerEventPush(customEvent)
  }, [customEvent])

  const activateVariant = useCallback(() => {
    const gVariant = getVariant(experimentId)

    setVariant(() => gVariant)
    setExperimentStatus(() => ExperimentStatus.ACTIVE)
    onActivate(gVariant)
  }, [experimentId])

  const activate = useCallback((): void => {
    activateCustomEvent()
    interval(activateVariant, 100)
  }, [activateVariant, activateCustomEvent])

  const experiment = {
    experimentId,
    experimentStatus,
    variant,
  }

  return {experiment, activate}
}

export {useExperiment}
