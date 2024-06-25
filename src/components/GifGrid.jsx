import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category);

    console.log(isLoading);



    // const [images, setImages] = useState([]);

    // const getImages = async (category) => {
    //     const images = await getGifs(category);
    //     setImages(images);
    // }

    // useEffect(() => {

    //     getImages(category);
    // }, []);

    return (
        <>
            <h3> {category} </h3>

            {
                isLoading && ( <h2>Cargando... </h2>)
            }

            <div className="card-grid">
                {images.map((img) => (
                    <GifItem
                        key={img.id}
                        {...img}
                    />

                ))}
            </div>

        </>

    )
}