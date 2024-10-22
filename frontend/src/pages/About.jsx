import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit harum aspernatur, ratione rerum, tempora corrupti, alias a odio architecto tempore inventore. Eos dolor tempore ratione aspernatur libero dolorum officia quibusdam?</p>
          <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dignissimos, dicta asperiores quaerat eos quae ut assumenda reiciendis hic corrupti impedit modi, mollitia recusandae maiores obcaecati, dolorem ullam inventore laborum!</p>
        <b className="text-gray-800">Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quidem ut cum ea, inventore ex impedit molestiae, consequatur iste facilis beatae veritatis nisi minus quo deleniti maiores assumenda ipsum odit.</p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quo, tempora maxime tempore eveniet totam eum ipsa</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quo, tempora maxime tempore eveniet totam eum ipsa</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quo, tempora maxime tempore eveniet totam eum ipsa</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About