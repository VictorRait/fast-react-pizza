import { useSelector } from 'react-redux';

function Username() {
  const username = useSelector((state) => state.user.username);
  if (!username) return null;
  return (
    <div className="hidden text-sm font-semibold md:block">
      {/* i think i need to use useparams for this to not render on other pages */}
      {/* Start your order, <span className="text-yellow-50 ">{username}</span> */}
      <span className="text-yellow-50 ">{username}</span>
    </div>
  );
}

export default Username;
