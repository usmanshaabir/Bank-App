import React from 'react';


export default function Home() {
    return (
        <>
            <div className='landingPages'>
                <div className="container">
                    <div className="row" style={{ paddingTop: "75px" }}>
                        <div class="card" style={{ width: "35rem", backgroundColor: "rgba(0,70,107,.8)" }}>
                            <div class="card-body">
                                <h3 class="card-title text-light">get a $200 bonus then
                                    make it better</h3>
                                <p class="card-text text-light">Just add savings to a new Online Checking account and maximize
                                    your bonus to $250.</p>
                                <button className='btn btn-light text-dark'>See Offer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
