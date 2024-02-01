import TopStoriesCard from "./TopStoriesCard";

const TopStories = () => {
  return (
    <>
      <div className="flex justify-between items-center py-3">
        <h2 className="text-lg font-semibold">Top Stories</h2>
        <a className="text-[#7950F2] font-semibold" href="">
          See All
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <TopStoriesCard image={"https://i.ibb.co/0cn7fYf/image6.jpg"} />
        <TopStoriesCard image={"https://i.ibb.co/R4Thhv6/image4.jpg"} />
        <TopStoriesCard image={"https://i.ibb.co/qj6VBWj/image5.jpg"} />
        <TopStoriesCard image={"https://i.ibb.co/0cn7fYf/image6.jpg"} />
      </div>
    </>
  );
};
export default TopStories;
