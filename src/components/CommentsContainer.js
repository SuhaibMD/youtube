import React from 'react'
import {randomGenerateName} from '../utils/helper'
const commentsData = [
    {
        name: 'Suhaib',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        replies: []
    },
    {
        name: 'Suhaib',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        replies: [
            {
                name: 'Suhaib',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                replies: []
            },
            {
                name: 'Suhaib',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                replies: []
            },
            {
                name: 'Suhaib',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                replies: [
                    {
                        name: 'Suhaib',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        replies: []
                    },
                    {
                        name: 'Suhaib',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        replies: [
                            {
                                name: 'Suhaib',
                                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                                replies: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'Suhaib',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        replies: []
    },
    {
        name: 'Suhaib',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        replies: [
            {
                name: 'Suhaib',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                replies: []
            },
            {
                name: 'Suhaib',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                replies: [

                    {
                        name: 'Suhaib',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        replies: []
                    },
                    {
                        name: 'Suhaib',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        replies: []
                    },
                    {
                        name: 'Suhaib',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        replies: []
                    },
                ]
            },
        ]
    }
]

const Comment = ({ data }) => {

    const { name, text, replies } = data;

    return (
        <div className='m-5 p-2 flex shadow-sm bg-gray-100 rounded-lg w-60.3 gap-x-4 items-center'>
            <div>
                <img className='w-12 h-12' src="https://static.vecteezy.com/system/resources/previews/002/934/748/non_2x/man-face-circle-icon-in-trendy-flat-style-vector.jpg" alt="user_profile" />
            </div>
            <div className=''>
                <h1 className='font-bold text-2xl'>{randomGenerateName() + ' @' + Math.floor(Math.random() * 100)}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}

const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index}>
            <Comment  data={comment} className/>
            <div className='pl-5 border-l border-l-black ml-5 shadow-none'>
                <CommentsList key={index} comments={comment.replies} />
            </div>
        </div>
    ))
}
const CommentsContainer = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className='font-bold text-5xl'>Comments :</h1>
            {/* <Comment data = {commentsData[0]}/> */}
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer
