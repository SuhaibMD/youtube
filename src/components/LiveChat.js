import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
// import {randomGenerateName, makerandomMessage} from '../utils/helper'
import { randomGenerateName, makerandomMessage } from '../utils/helper';


const LiveChat = () => {

    const dispatch = useDispatch();
    const [liveMessage, setLiveMessage] = useState("")
    const ChatMessages = useSelector(store => store.chat.messages)
    useEffect(() => {
        const i = setInterval(() => {
            //API Polling
            // console.log("Api polling")
            dispatch(addMessage({
                name: randomGenerateName(),
                message: makerandomMessage(20) + '🧑‍🚀',
            }))

        }, 5000);

        return () => clearInterval(i);
    }, [])

    return (
        <>
            <div>
                <div className='w-full h-[600px] rounded-lg p-2 ml-2 border bg-slate-100 border-b-0 border-black flex flex-col-reverse overflow-y-auto'>
                    {ChatMessages.map(({ name, message }, index) => <ChatMessage key={index} name={name} message={message}></ChatMessage>)}
                </div>

            </div>
            <form className='w-full p-2 ml-2 border border-black  rounded-sm' onSubmit={(e) => {
                e.preventDefault();
                dispatch(addMessage({
                    name: "Basically",
                    message: liveMessage,
                }))
                setLiveMessage('                                                                                                                                                                                                    ')
            }}>
                <input type="text" className='p-2 w-64 mr-3 border border-blue-400' value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
                <button className='p-2 border-black border bg-gray-500 text-white font-bold text-lg rounded-lg'>Submit</button>
            </form>
        </>
    )
}                                                                                                                           

export default LiveChat
