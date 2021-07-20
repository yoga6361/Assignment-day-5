import React from "react"
import Card from "./Card"
const GetInTouchSection=()=>{
    return(
        <section className="contact bg-success ">
        <div className="container ">
          <h2 className="text-white">
            We love new friends!
          </h2>
          <div className="row">
            <Card imageLink="https://source.unsplash.com/1600x900/?orange" cardTitle="Orange" cardDiscription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," buttonText="Apple"/>
            <Card imageLink="https://source.unsplash.com/1600x900/?Guava" cardTitle="Guava" cardDiscription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " buttonText="Bannana"/>
            <Card imageLink="https://source.unsplash.com/1600x900/?Mango" cardTitle="Mango" cardDiscription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " buttonText="Chikku"/>
          </div>
        </div>
      </section>
    )
}

export default GetInTouchSection;