import DiscussionForum from "../components/DiscussionForum";
import Layout from "../components/Layout";
import MarketStories from "../components/MarketStories";

export default function Home() {
  return <Layout>
    <div className="flex gap-4 ">
    <div className="space-y-3 hidden md:block">
    <h1 className='text-3xl text-red-600 font-bold'>Discussion Forum</h1>
    <DiscussionForum/>
    <DiscussionForum/>
    <DiscussionForum/>
    <DiscussionForum/>

    </div>
    <div className="space-y-3">
    <h1 className='text-3xl text-red-600 font-bold'>Market Stories</h1>
      <MarketStories/>
      <MarketStories/>
      <MarketStories/>
    </div>

    </div>
  </Layout>;
}
