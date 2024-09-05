import React from 'react'

const Workoutsession = () => {
  return (
    <section className='workout_session'>
      <div className="wrapper">
        <h1>Welcome to Our Bootcamp Sessions</h1>
    
        <img src="/img5.jpg" alt="Bootcamp Workout" />
      </div>
      <div className="wrapper">
        <h1>Featured Bootcamps:-</h1>
        <p>Check out our most popular bootcamps below!.</p>
        <div className="bootcamps">
          <div>
            <h4>Strength Bootcamp</h4>
            <p>Focus on building muscle with high-intensity strength training exercises. Perfect for those who want to tone their body and increase their strength.</p>
          </div>
          <div>
            <h4>Cardio Blast Bootcamp</h4>
            <p>Get your heart racing and burn calories with our cardio-focused bootcamp. Ideal for weight loss and improving your cardiovascular health.</p>
          </div>
          <div>
            <h4>HIIT Bootcamp</h4>
            <p>High-Intensity Interval Training (HIIT) bootcamp combines short bursts of intense exercise with periods of rest to maximize fat burning and endurance.</p>
          </div>
          <div>
            <h4>Functional Fitness Bootcamp</h4>
            <p>Train your body for real-life movements with functional fitness exercises. This bootcamp helps improve strength, balance, and flexibility.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Workoutsession
