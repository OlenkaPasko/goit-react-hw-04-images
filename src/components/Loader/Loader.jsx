import { Hearts } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="spinner">
      <Hearts
        height="80"
        width="80"
        color="DEFAULT_COLOR"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
export default Loader;