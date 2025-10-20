interface LoadingProps {
  size?: "small" | "medium" | "large";
}

const Loading = ({ size = "medium" }: LoadingProps) => {
  const sizeClasses = {
    small: "h-4 w-4",
    medium: "h-8 w-8",
    large: "h-12 w-12",
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`animate-spin rounded-full border-4 border-primary-200 border-t-primary-600 ${sizeClasses[size]}`}
        role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
