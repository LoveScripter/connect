import React from "react";

const Post = () => {
  return (
    <>
      <div className="flex p-5 items-center">
        <div className="flex gap-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://picsum.photos/10?random=2"
            width={12}
            height={12}
            alt="userPic"
          />
          <div className="flex flex-col gap-3">
            <div className="flex gap-1">
              User <span className="text-gray-600">@UserName</span>
            </div>
            <div className="description w-[50vw] break-words text-">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              placeat exercitationem unde numquam maiores, ipsam quibusdam
              dignissimos similique aperiam praesentium, alias totam dolorem
              blanditiis consequuntur officiis perspiciatis vel consectetur
              earum incidunt recusandae. Atque soluta officia amet fugit, sit
              non. Commodi obcaecati est dicta maxime quae et omnis, enim fuga
              nisi, nihil asperiores dolor, porro repellendus.
            </div>
            <div className="h-full">
              <img
                className="rounded-xl"
                src="https://picsum.photos/500"
                alt="postPic"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
