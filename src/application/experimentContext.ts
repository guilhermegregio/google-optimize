import {createContext} from 'react'
import {ExperimentStatus, ExperimentResult} from '@/domain'

const defaultValue = {
  experiment: {
    experimentId: 'NOT_DEFINED',
    experimentStatus: ExperimentStatus.INATIVE,
    variant: '0',
  },
  activate: () => {},
}

const Context = createContext<ExperimentResult>(defaultValue)

const {Provider} = Context

export {Context, Provider}
