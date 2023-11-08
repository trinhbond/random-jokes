import classNames from "classnames";

type Size = {
  size: "small" | "medium" | "large";
};

function Loading({ size }: Size) {
  return (
    <div className="spinner-parent">
      <div className={classNames("spinner", size)}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
