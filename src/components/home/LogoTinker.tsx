import { motion } from "framer-motion";

function LogoTinker() {
  return (
    <div className="w-full py-8">
      <div className="max-w-7xl mx-auto">
        {/* Mask for smooth fading */}
        <div className="flex overflow-hidden  [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-shrink-0 pointer-events-none"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 100,
              ease: "linear",
            }}
          >
            {/* First set of logos */}
            {Array.from({ length: 5 }).map((_) => (
              <>
                <img
                  src="/fiverrLogo.svg"
                  alt="Fiverr"
                  className="h-8 w-auto grayscale"
                />
                <img
                  src="/googleLogo.svg"
                  alt="google"
                  className="h-8 w-auto grayscale"
                />
                <img
                  src="/microsoftLogo.svg"
                  alt="microsoft"
                  className="h-8 w-auto grayscale"
                />
                <img
                  src="/stripeLogo.svg"
                  alt="stripe"
                  className="h-8 w-auto grayscale"
                />
                <img
                  src="/upworkLogo.svg"
                  alt="upwork"
                  className="h-8 w-auto grayscale"
                />
              </>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LogoTinker;
