import React from "react"
import Header from "../layouts/Header"
import HeroSection from "../layouts/HeroSection"
import MenuBox from "../layouts/MenuBox"
import '../App.scss'
import { useParams } from "react-router-dom"
import { useGetPostQuery } from "../store/reducer/postSlice"

const PostPage: React.FC<any> = () => {
    const { id } = useParams()
    const {data}=useGetPostQuery(id ||' ')
    console.log(data)
    return (
        <>
            </>
    )
 }
export default PostPage