
const Button = ({ styles }) => {
    return (
      <div>
        <button
          type="button"
          className={`py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 focus:outline-none font-poppins font-medium text-white text-[18px] rounded-[10px] shadow-md ${styles}`}
        >
          Get Started
        </button>
      </div>
    );
  };
  
  export default Button;
  