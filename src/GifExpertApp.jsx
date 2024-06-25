import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Dragon ball']);

    const addCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([...categories, newCategory]);
    }

    return (
        <>
            <h1>GifExpert</h1>

            <AddCategory
                // setCategories={setCategories} categories={categories}> 
                onNewCategory={value => addCategory(value)} >

            </AddCategory>

            <button onClick={addCategory}>Agregar</button>

            {/* <ol> */}
                {/* {categories.map(category => {
                    return <li key={category}> {category}</li>
                })} */}

                {/* {categories.map(category => (
                     <GifGrid key={category} category={category} >  </GifGrid>
                ))}

            </ol> */}

            {/* <ol>
                {
                    categories.map(category => (
                        <div key={category}>
                            <h3>{"Hola"}</h3>
                            <li>{category}</li>

                        </div>
                    ))
                }
            </ol> */}

            {categories.map(category => (
                     <GifGrid key={category} category={category} >  </GifGrid>
            ))}
        </>
    );
}