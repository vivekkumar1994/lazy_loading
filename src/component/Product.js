import React from 'react'

import { useRef } from 'react';
import clsx from "clsx";
import useLazyLoad from '../useLazyLoad';
import { LoadingPosts } from '../Loadingpost';
import ProductDetail from './ProductDetail';
import "./product.css"
import { ImageList } from '@mui/material';
import Extra from './ProductDetail';


 

const NUM_PER_PAGE = 6;
const TOTAL_PAGES = 3;


const Product = ({user}) => {
const triggerRef = useRef(null);
const onGrabData = (currentPage) => {
        // This would be where you'll call your API
        return new Promise((resolve) => {
        setTimeout(() => {
            const data1 = user.slice(
            ((currentPage - 1)%TOTAL_PAGES) * NUM_PER_PAGE,
            NUM_PER_PAGE * (currentPage%TOTAL_PAGES)
            );
            console.log(data1);
            resolve(data1);
        }, 2000);
        });
    };
    const { data, loading } = useLazyLoad({ triggerRef, onGrabData });
    
  return(
    <>
    <ImageList sx={{ width: '100%', height:'100%'}} cols={3} rowHeight={164} gap={4}>

    {data.map(image => {
        return <Extra title={image["title"]} images={image["images"]} />
    })};

   
    </ImageList>
    <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
    
        <LoadingPosts />
    </div>
    </>
  )
   
}

export default Product
