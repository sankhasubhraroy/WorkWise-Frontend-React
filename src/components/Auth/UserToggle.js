import { motion } from "framer-motion";

// Array of userType
const users = ["consumer", "freelancer"];

const UserToggle = ({ userType, setUserType }) => {
  const switchUser = (user) => {
    setUserType(user);
  };

  return (
    <div className="flex justify-center gap-6">
      {users.map((user) => (
        <button
          key={user}
          onClick={() => switchUser(user)}
          className="relative px-8 py-4 flex justify-center items-center rounded-full"
        >
          {userType === user && (
            <motion.div
              layoutId="selected"
              className="absolute w-full h-full bg-blushPurple rounded-full"
            ></motion.div>
          )}

          <p
            className={`z-[1] font-secondary capitalize transition-colors duration-300 ease-in-out ${
              userType !== user && "text-secondary"
            }`}
          >
            {user}
          </p>
        </button>
      ))}
    </div>
  );
};

export default UserToggle;
