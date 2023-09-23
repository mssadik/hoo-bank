import styles from "../style";
import Button from "./Button";


const Cta = () => {
    return (
        <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
            <div>
                <h2 className={`${styles.heading2}`}>Let's try our service now!</h2>
                <p className={`${styles.paragraph} max-w-[475px] mt-5`}>Everything you need to accept card papyment and grow your buisness anywhere on the planet</p>
                 
            </div>
            <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                <Button></Button>
            </div>
        </section>
    );
};

export default Cta;