import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' 
          subtitle='Here are some recently listed properties that can be very usefull fo you for rent as well as buy.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent