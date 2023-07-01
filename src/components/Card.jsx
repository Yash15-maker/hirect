function Card() {
  return (
    <>
      <div className="card bg-white w-[200px] h-[280px] m-2 rounded-lg shadow-lg">
        <div className="top">
          <img
            className="w-[200px] h-[200px] object-cover  p-2"
            src="https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img"
          />
        </div>
        <div className="bottom flex flex-col justify-center items-start p-3 bg-">
          <div className="title font-semibold text-xs my-1">
            Apple iPhone 13 (128GB) - Midnight
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
