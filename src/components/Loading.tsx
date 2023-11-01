interface Sizes {
  size: "small" | "medium" | "large";
}

function Loading({ size }: Sizes) {
  return (
    <div className="spinner-parent">
      <div className={`spinner ${size}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
