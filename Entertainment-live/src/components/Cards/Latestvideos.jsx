import saif from '/src/assets/images/Layer 16.png';
import man from '/src/assets/images/Layer 21.png';

const Latestvideos = () => {
  return (
    <div className='flex flex-row w-2/3 mx-auto items-start videocardBg rounded-xl p-3 gap-4'>
        <img className='rounded-xl w-1/2 h-full object-cover' src={saif} alt="" />
        <div className='flex flex-col gap-1.5'>
        <div className='flex items-start vidRow rounded gap-0.5 p-0.5'>
                <img className='mr-2.5' src={man} alt='' />
                <article className='flex flex-col gap-0 mr-3'>
                    <h3 className='text-s font-bold font-sans'>STRING MASTER</h3>
                    <p className='text-xs font-light font-sans '>Electric Ganesha Land</p>
                </article>
            </div>
            <div className='flex items-start vidRow rounded gap-0.5 p-0.5'>
                <img className='mr-2.5' src={man} alt='' />
                <article className='flex flex-col gap-0 mr-3'>
                    <h3 className='text-s font-bold font-sans'>STRING MASTER</h3>
                    <p className='text-xs font-light font-sans '>Electric Ganesha Land</p>
                </article>
            </div>
            <div className='flex items-start vidRow rounded gap-0.5 p-0.5'>
                <img className='mr-2.5' src={man} alt='' />
                <article className='flex flex-col gap-0 mr-3'>
                    <h3 className='text-s font-bold font-sans'>STRING MASTER</h3>
                    <p className='text-xs font-light font-sans '>Electric Ganesha Land</p>
                </article>
            </div>
            <div className='flex items-start vidRow rounded gap-0.5 p-0.5'>
                <img className='mr-2.5' src={man} alt='' />
                <article className='flex flex-col gap-0 mr-3'>
                    <h3 className='text-s font-bold font-sans'>STRING MASTER</h3>
                    <p className='text-xs font-light font-sans '>Electric Ganesha Land</p>
                </article>
            </div> 
        </div>
    </div>
  )
}

export default Latestvideos


// populate the videos using Youtube data api and have a working media player for this 