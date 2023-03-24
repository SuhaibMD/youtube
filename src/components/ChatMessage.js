import React from 'react'

const ChatMessage = ({name, message}) => {
    return (
        <div className='flex items-center gap-1 shadow-sm p-2'>
            <img className='w-12 h-12' src="https://static.vecteezy.com/system/resources/previews/002/934/748/non_2x/man-face-circle-icon-in-trendy-flat-style-vector.jpg" alt="user_profile" />
            <span className='font-bold px-2'>{name}</span>
            <span className='italic'>{message}</span>
        </div>
    )
}

export default ChatMessage
