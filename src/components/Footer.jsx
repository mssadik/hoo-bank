import {logo} from '../assets';
import { footerLinks, socialMedia } from '../constans';
import styles from '../style';
const Footer = () => {
    return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <div className='flex-1 flex-col justify-start mr-10'>
                    <img className='w-[266px] h-[72px] origin-center' src={logo} alt="logo" />
                    <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
                </div>
                <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt--0 mt-10'>
                    {
                        footerLinks.map((footerLink) =>(
                            <div className='flex flex-col ss:my-0 my-4 min-w-[150px]' key={footerLink.id}>
                                <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>{footerLink.title}</h4>
                                <ul>
                                    {
                                        footerLink.links.map((link, index) =>(
                                            <li className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer' key={link.name}>
                                                {link.name}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45'>
                <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>2023 HooBank. All Rights Reserved.</p>
                <div className='flex flex-row md:mt-0 mt-6'>
                    {
                        socialMedia.map((social, index) =>(
                            <img className={`w-[21px] h-[21px] origin-center cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0" }`} src={social.icon} key={social.id} alr=""/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Footer;