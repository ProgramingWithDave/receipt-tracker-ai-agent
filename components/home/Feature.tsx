import { LucideProps } from 'lucide-react'
import React from 'react'

interface FeatureProps {
    Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    title: string;
    description: string;
    iconStyles?: string;
    iconOuterLayerStyles?: string;
}

function Feature({ Icon, title, description, iconStyles, iconOuterLayerStyles }: FeatureProps) {
    return (
        <div className='flex flex-col items-center space-y-2 border border-gray-200 rounded-lg p-6 dark:border-gray-800'>
            <div className={`p-3 rounded-full  ${iconOuterLayerStyles && `${iconOuterLayerStyles}`}`} >
                <Icon className={`h-6 w-6 ${iconStyles && `${iconStyles}`}`} />
            </div>

            <h3 className='text-xl font-bold'>{title}</h3>
            <p className='text-gray-500 dark:text-gray-400 text-center'>
                {description}
            </p>
        </div>
    )
}

export default Feature
