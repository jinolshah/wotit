import Link from 'next/link'
import { TbBrandGoogleAnalytics, TbSettings, TbLogout } from "react-icons/tb";
import Logout from '@/components/buttons/Logout'

export default function Sidebar() {
    return (
        <aside className='pl-4 pt-4 pb-4'>
            <div className='bg-white px-6 py-2 rounded-xl drop-shadow'>
                <Link href={'/'} className='font-bold flex justify-center'>
                    <span>
                        wotit &gt;&gt;
                    </span>
                </Link>
            </div>
            <div className='rounded-xl bg-white border-solid py-6 drop-shadow mt-4'>
                <nav className='flex flex-col gap-10 mx-auto px-6'>
                    <Link href={'/account'} className='flex flex-row items-center'>
                        <TbSettings className='w-5 h-5'/>
                        <span className='ml-2'>Settings</span>
                    </Link>
                    <Link href={'/analytics'} className='flex flex-row items-center'>
                        <TbBrandGoogleAnalytics className='w-5 h-5'/>
                        <span className='ml-2'>Analytics</span>
                    </Link>
                    <Logout className='text-left flex flex-row items-center'>
                        <TbLogout className='w-5 h-5'/>
                        <span className='ml-2'>Logout</span>
                    </Logout>
                </nav>
            </div>
        </aside>
    )
}
