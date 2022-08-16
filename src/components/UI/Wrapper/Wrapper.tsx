type WrapperProps = {
  children: JSX.Element;
};

const Wrapper = (props: WrapperProps) => {
  return <div className="max-w-7xl mx-auto px-3 py-3">{props.children}</div>;
};

export default Wrapper;
