'use client'
import { useRouter, usePathname } from 'next/navigation';

const steps = [
    {step: 1, name: 'Menú', url: '/'},
    {step: 2, name: 'Resumen', url: '/overview'},
    {step: 3, name: 'Datos y Total', url: '/total'}
];

const Steps = () => {
    const router = useRouter();
    const pathname = usePathname();

    const calculateProgress = () => {
        let value;
        switch(pathname){
            case '/':
                value = 2;
                break;
            case '/overview':
                value = 50;
                break;
            case '/total':
                value = 100;
                break;
            default:
                value = 0;
        }
        return value;
    }

    return (
        <>
            <div className="flex justify-between mb-5">
                {steps.map(step => (
                    <button
                        className="text-2xl font-bold"
                        key={step.step}
                        onClick={() => {
                            router.push(step.url);
                        }}
                    >
                        {step.name}
                    </button>
                ))}
            </div>
            <div>
                <div className="bg-gray-100 rounded-full mb-10">
                    <div className="bg-amber-500 rounded-full text-xs leading-none h-2 text-center text-white" style={{width: `${calculateProgress()}%`}}></div>
                </div>
            </div>
        </>
    )
}

export default Steps
