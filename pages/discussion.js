import React from "react";
import Layout from "../components/Layout";
import DiscussionForum from "../components/DiscussionForum";

const Discussion = () => {
  return <Layout>
    <div className="space-y-3">
    <h1 className='text-3xl text-red-600 font-bold'>Discussion Forum</h1>
    <DiscussionForum/>
    <DiscussionForum/>
    <DiscussionForum/>
    <DiscussionForum/>

    </div>
  </Layout>;
};

export default Discussion;
