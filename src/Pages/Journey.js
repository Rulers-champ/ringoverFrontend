import React from 'react';
import '../styling/Journey.css';

function Journey()
{
    return <div>
             
            <section style={{backgroundImage:'/img/grasspic.jpg'}}>
                <h1>THE  JOURNEY</h1>
            </section>

            <div className='wrapper'>
              
              <div className='block-1 sm-block'>
                 <h4>THE ROOTS</h4>
                 <p>It is a long established fact that a reader will be distracted by the readable content of a 
                 page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                 as opposed to using 'Content here, content here', making it look like readable English.Various versions have evolved over the years,
                 sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
              </div>

              <div className='block '>
                 <h4>CHAPTER I</h4>
                 <br/>
                 <p>It is a long established fact that a reader will be distracted by the readable content of a 
                 page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                 as opposed to using 'Content here, content here', making it look like readable English.Various versions have evolved over the years, 
                 sometimes by accident, sometimes on purpose (injected humour and the like).</p>
              </div>
              <div className='block '>
                 <h4>CHAPTER II</h4>
                 <br/>
                 <p>It is a long established fact that a reader will be distracted by the readable content of a 
                 page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                 as opposed to using 'Content here, content here', making it look like readable English.Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour and the like).</p>
              </div>
              <div className='block-2 sm-block'>
                 <h4>kICKSUP</h4>
                 <br/>
                 <p>It is a long established fact that a reader will be distracted by the readable content of a 
                 page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                 as opposed to using 'Content here, content here', making it look like readable English.Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour and the like).</p>
              </div>

            </div>

           </div>;
}

export default Journey;