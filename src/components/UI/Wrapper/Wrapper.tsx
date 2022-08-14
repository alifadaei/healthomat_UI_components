type WrapperProps = {
  children: JSX.Element;
};

const Wrapper = (props: WrapperProps) => {
  return <div className="max-w-3xl mx-auto px-3">{props.children}</div>;
};

export default Wrapper;
