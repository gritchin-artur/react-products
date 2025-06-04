export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-16 h-16">
        <div className="absolute w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute w-12 h-12 border-4 border-blue-300 border-t-transparent rounded-full animate-spin animation-delay-150"></div>
      </div>
    </div>
  );
};
