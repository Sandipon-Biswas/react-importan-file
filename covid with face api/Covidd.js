import React, {useEffect, useState} from 'react'
import '../Covid.css';

const Covidd = () => {
    const [data, setData]=useState([]);
    const getCovidData = async() => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json')
            const actualData = await res.json();
            console.log(actualData.statewise[0])
            setData(actualData.statewise[0])
        } catch (err) {
            console.log(err)
        }
    };
    
    useEffect(() => {
       getCovidData();
    }, [])
    return (
        <div >
            <div className="full container ">
            <div className="text-center py-5">
             <button id="neonShadow"><span>🔴 </span></button> 
            <h5 className="mt-4" >  covid 19 tracker</h5>
            </div>
            <ul>
                <div className="row">
                        <div className="col-md-4 text-center">
                            <li className="card " >
                                <div className="card__main py-3 shadow-lg ">
                                    <div className="card__inner">
                                        <p className="card__name" ><span className="small sss" >OUR</span> COUNTRY</p>
                                        <p className="card__total card__small display-6 text-primary" >BANGLADESH</p>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div className="col-md-4 text-center">
                            <li className="card " >
                                <div className="card__main py-3 shadow-lg ">
                                    <div className="card__inner">
                                        <p className="card__name" ><span className="small sss" >TOTAL</span> Recovary</p>
                                        <p className="card__total card__small display-6 text-info" > {data.recovered} </p>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div className="col-md-4 text-center">
                            <li className="card " >
                                <div className="card__main py-3 shadow-lg ">
                                    <div className="card__inner">
                                        <p className="card__name" ><span className="small sss" >TOTAL</span> Confirmed</p>
                                        <p className="card__total card__small display-6 text-warning " > {data.confirmed} </p>
                                    </div>
                                </div>
                            </li>
                        </div>
                        
                        
                </div>
                <div className="row mt-4">
                        <div className="col-md-4 text-center ">
                            <li className="card  " >
                                <div className="card__main py-3 shadow-lg ">
                                    <div className="card__inner">
                                        <p className="card__name" ><span className="small sss text-danger " >TOTAL</span> Death</p>
                                        <p className="card__total card__small display-6 text-danger    " > {data.deaths} </p>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div className="col-md-4 text-center">
                            <li className="card " >
                                <div className="card__main py-3 shadow-lg ">
                                    <div className="card__inner">
                                        <p className="card__name" ><span className="small sss text-success " >TOTAL</span> Active</p>
                                        <p className="card__total card__small display-6 text-success " >{data.active}</p>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div className="col-md-4 text-center">
                            <li className="card " >
                                <div className="card__main py-3 shadow-lg ">
                                    <div className="card__inner">
                                        <p className="card__name" ><span className="small sss text-info" >Last</span> Update</p>
                                        <p className="card__total card__small display-6 text-info " > {data.lastupdatedtime} </p>
                                    </div>
                                </div>
                            </li>
                        </div>
                </div>
                
            </ul>
            </div>
        </div>
    )
}

export default Covidd
