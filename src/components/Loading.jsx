import { BounceLoader } from 'react-spinners';

const Loading = () => (
  <div className="absolute top-0 left-0 w-full h-full bg-gray-200">
    <BounceLoader
      color="#FF712E"
      size="4rem"
      css="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"
    />
  </div>
);

export default Loading;
