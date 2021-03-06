import * as React from 'react'

const defaultOpportunity = {
    id: '',
    title: '',
    description: '',
    applications_close_date: '',
    earliest_start_date: '',
    latest_end_date: '',
    backgrounds: [{
        name: '',
        id: '',
        option: ''
    }],
    backgroundsData: [{
        name: '',
        id: '',
        option: ''
    }],
    selection_process: '',
    salary: '',
    city: '',
    updateAvailable: false,
    errors: {
        title: '',
        description: '',
        applications_close_date: '',
        earliest_start_date: '',
        latest_end_date: '',
        backgrounds: '',
        selection_process: '',
        salary: '',
        city: '',        
    }
}

const defaultContext = {
    data: [defaultOpportunity],
    updateValue: (id: string, label: string ,value: string) => { },
    applyOpportunityChanges: (id: string) => { }
}

const OpportunityContext = React.createContext(defaultContext)
const { Provider, Consumer } = OpportunityContext

export {
    Provider as OpportunitiesProvider,
    Consumer as OpportunitiesConsumer
}