import "./login.css";
export default function Login() {
  return (
    <div className="containar mx-auto w-1/2 bg-stone-900 p-8 mt-20 rounded-full">
      <div className="flex justify-center mb-10 mt-11">
        <h1 className="font-thin text-6xl text-white"> Login </h1>
      </div>
      <div className="body">
        <form className="flex gap-5 flex-col items-center">
          <div className="border">
            <input type="text" placeholder="Username" />
          </div>
          <div className="border">
            <input type="password" placeholder="Password" />
          </div>
          <div className="flex justify-center">
            <div
              className="bg-white text-black flex justify-center items-center login cursor-pointer font-semibold rounded-ss-2xl rounded-ee-2xl"
              style={{
                width: 150,
                height: 45,
              }}
            >
              {" "}
              Login{" "}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
