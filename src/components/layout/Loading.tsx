const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-gray-800 dark:text-gray-200">
            <div className="flex space-x-2 animate-pulse">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            </div>
        </div>
    );
};

export default Loading;