export interface SafetyFeature {
    id: string;
    title: string;
    description: string;
}

export const safetyFeatures: SafetyFeature[] = [
    {
        id: 'rating-system',
        title: 'Rating system',
        description: 'We ask users to give us their honest feedback after each ride. You can choose your driver based on the experience of previous riders'
    },
    {
        id: 'mandatory-checks',
        title: 'Mandatory checks',
        description: 'All drivers must pass background check before driving with inDrive'
    },
    {
        id: 'safety-button',
        title: 'Safety button',
        description: 'Tap it to quickly contact the police or emergency services'
    }
] as const;
