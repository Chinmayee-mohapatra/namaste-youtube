import React from "react";
import { FaUserAlt } from "react-icons/fa";

const commentsData = [
  {
    name: "Akshay Saini",
    text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
    replies: [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
        replies: [
          {
            name: "Akshay Saini",
            text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
            replies: [
              {
                name: "Akshay Saini",
                text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
                replies: [
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
                  },
                ],
              },
            ],
          },
          {
            name: "Akshay Saini",
            text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
            replies: [
              {
                name: "Akshay Saini",
                text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
                replies: [
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
      },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum,dhkjcndk dcdouihad kmodkvndi",
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex gap-2 my-2">
      <div>
        <FaUserAlt
          size={24}
          className="border-2 border-black rounded-full p-1"
        />
      </div>
      <div>
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Dont use index as keys
  return comments?.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="border-l-2 border-l-black pl-6">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-xl font-semibold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
