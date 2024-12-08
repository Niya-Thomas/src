import React from 'react'
import Child from './Child'
import banner1 from './assets/banner1.png'
import banner3 from './assets/banner3.jpg'
import banner2 from './assets/banner2.png'

const Parent = () => {
  return (
//    <div class="body">
//     <div class="card1">
//      <Child  heading="The Seasons Latest" paragraph="Get the seasons all latest design in a flick of you hand"  class="card" />
//      <div>
//       <button class="button">show more</button>
//      </div>
//     </div>
//     <div class="card2">
//       <div class="content">
//       <Child  head="The Seasons Latest" para="Get the seasons all latest design in a flick of you hand"  />
//       <div>
//         <button class="btn1">show more</button>
//       </div>
// </div>
//     </div>
//     <div class="card3">
//     <div class="content3">
//     <Child  heading="The Seasons Latest" paragraph="Get the seasons all latest design in a flick of you hand"  class="card" />
//     <button class="btn2">show more</button>
//     </div>
     
//     </div>
   
    
    

//   </div>
<div>
  <Child
  image={banner2}

  name="the season latesr"
  head="get the season all leasr in flick your"
  button="show more"
  style="style"
  desc="desc"
  heading="heading"
  para="para"
  but="but"
  boxshadow="boxshadow"/>


  <Child
  image={banner1}
  name="our design"
  head="get the season all leasr in flick your"
  button="show more"
  style="style1"
  desc1="desc1"
  heading="heading1"
  para="para"
  but="but"
  
  boxshadow="boxshadow"/>

<Child
  image={banner3}
  name="insider"
  head="get the season all leasr in flick your"
  button="show more"
  style="style2"
  desc1="desc2"
  heading="heading1"
  para="para"
  but="but"
  
  boxshadow="boxshadow"/>


  
  
</div>
  );
};

export default Parent;