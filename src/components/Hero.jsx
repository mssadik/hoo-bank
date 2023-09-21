import { discount, robot } from '../assets'
import styles from '../style';
import GetStarted from './GetStarted';
const Hero = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
                    <img className='w-[32px] h-[32px]' src={discount} alt="discount" />
                    <p className={`${styles.paragraph} ml-2`}>
                        <span className='text-white'>20%</span>
                        Discount For {" "}
                        <span className='text-white'>1 Month</span>
                    </p>
                </div>
                <div className='flex flex-row justify-between items-center w-full'>
                    <h1 className='flex-1 font-popins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>The Next <br className='sm:block hidden'/> {" "} 
                    <span className='text-gradient'>Generation</span> {" "} </h1>
                    <div className='ss:flex hidden md:mr-4 mr-0'>
                        <GetStarted></GetStarted>
                    </div>
                </div>
                <h1 className=' font-popins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>Payment Method</h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team of exprets uses a methodlolgy to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.  7:30</p>
            </div>
        </section>
    );
};

export default Hero;