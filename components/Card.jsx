const Card = ({ children, className }) => {
  return (
    <div
      className={`${className} cursor-pointer px-4 py-2 bg-gray-200 shadow-sm rounded-md inline-block transition duration-200 transform hover:-translate-y-1`}
    >
      {children}
    </div>
  );
};

export default Card;
